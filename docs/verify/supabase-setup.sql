-- Certificate verification — Supabase setup
-- Run once in Supabase → SQL Editor.
--
-- Security model: the browser only holds the public anon key. The table itself is
-- closed to anon (no listing / scraping); the only way in is get_certificate(id),
-- which returns at most one row for an exact certificate number.

create table if not exists public.certificates (
  cert_id        text primary key check (cert_id ~ '^[A-Z0-9][A-Z0-9-]{3,39}$'),
  holder_name    text not null,
  holder_name_en text,
  course         text not null,
  course_en      text,
  issue_date     date not null,
  hours          int,
  issuer         text,
  image_url      text,                       -- public URL from Storage bucket "certificates"
  status         text not null default 'valid' check (status in ('valid', 'revoked')),
  created_at     timestamptz not null default now()
);

alter table public.certificates enable row level security;
-- no select policy for anon/authenticated → direct table reads return nothing
revoke all on public.certificates from anon, authenticated;

create or replace function public.get_certificate(p_cert_id text)
returns table (
  cert_id text, holder_name text, holder_name_en text, course text, course_en text,
  issue_date date, hours int, issuer text, image_url text, status text
)
language sql
stable
security definer
set search_path = public
as $$
  select cert_id, holder_name, holder_name_en, course, course_en,
         issue_date, hours, issuer, image_url, status
  from public.certificates
  where cert_id = upper(trim(p_cert_id))
  limit 1;
$$;

revoke all on function public.get_certificate(text) from public;
grant execute on function public.get_certificate(text) to anon;

-- Example record
insert into public.certificates (cert_id, holder_name, holder_name_en, course, course_en, issue_date, hours, image_url)
values ('HQ-2026-7F3K9X', 'اسم المتدرب', 'Trainee Name', 'دورة بريمافيرا P6 — التخطيط والجدولة',
        'Primavera P6 — Planning & Scheduling', '2026-09-15', 30,
        'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/certificates/HQ-2026-7F3K9X.jpg')
on conflict (cert_id) do nothing;
