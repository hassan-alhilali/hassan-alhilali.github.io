export const languages = {
  en: { label: 'English', short: 'EN', dir: 'ltr' as const },
  ar: { label: 'العربية', short: 'AR', dir: 'rtl' as const },
};

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const content = {
  en: {
    meta: {
      title: 'Hassan Al-Hilali | Primavera P6 & Project Controls Consultant',
      description:
        'Primavera P6 schedule development, health checks, delay analysis, earned value and Power BI reporting for oil & gas and construction projects.',
      switchLabel: 'العربية',
      switchTitle: 'Switch to Arabic',
    },
    nav: {
      services: 'Services',
      p6: 'Primavera P6',
      approach: 'Approach',
      deliverables: 'Deliverables',
      expertise: 'Expertise',
      experience: 'Experience',
      certificates: 'Certificates',
      order: 'Order',
      about: 'About',
      contact: 'Contact',
      menu: 'Toggle navigation menu',
      skip: 'Skip to content',
      home: 'Home',
    },
    cta: {
      primary: 'Discuss a Project',
      secondary: 'View Services',
      email: 'Email me',
      whatsapp: 'WhatsApp',
      order: 'Request a service',
    },
    hero: {
      eyebrow: 'Primavera P6 · Planning & Project Controls',
      employer: 'Project Monitoring · Dhi Qar Oil Company',
      title: 'Primavera P6 schedules that hold up under scrutiny.',
      lead:
        'I build, audit and recover project schedules in Primavera P6 — resource- and cost-loaded, risk-aware, and connected to reporting your stakeholders actually read.',
      badges: ['Primavera P6', 'Microsoft Project', 'Power BI', 'Earned Value', 'Schedule Risk'],
      chartTitle: 'Baseline vs. progress',
      chartNote: 'Illustrative schedule view',
    },
    metrics: [
      { k: 'DCMA 14-Point', v: 'Schedule health measured against recognised quality criteria — not opinion.' },
      { k: 'Cost & Resource Loaded', v: 'Baselines that carry budget, manpower and productivity, not just dates.' },
      { k: 'Oil & Gas · Construction', v: 'Capital projects with heavy interfaces, long leads and approval cycles.' },
      { k: 'P6 → Power BI', v: 'Reporting generated straight from the schedule, refreshed on demand.' },
    ],
    services: {
      eyebrow: 'What I do',
      title: 'Services',
      lead: 'Primavera P6 at the core, with the full project controls layer built around it.',
      items: [
        {
          id: 'p6-development',
          icon: 'gantt',
          title: 'Primavera P6 Schedule Development',
          desc:
            'WBS, activity coding, calendars, logic and constraints built to the contract — then resource- and cost-loaded and baselined, so progress means something from day one.',
          points: ['Contract-aligned WBS', 'Activity coding & layouts', 'Resource / cost loading', 'Baseline submission pack'],
        },
        {
          id: 'health-check',
          icon: 'check',
          title: 'Schedule Review & Health Check',
          desc:
            'An independent audit of your programme: DCMA 14-point metrics, logic density, open ends, negative float, lags and constraints — delivered as a prioritised fix list, not just a score.',
          points: ['DCMA 14-point run', 'Critical path validation', 'Logic & float quality', 'Prioritised remediation plan'],
        },
        {
          id: 'delay-recovery',
          icon: 'recovery',
          title: 'Delay Analysis & Recovery Planning',
          desc:
            'Windows analysis and time impact analysis to establish what actually drove the delay, plus what-if scenarios and a recovery schedule the team can realistically execute.',
          points: ['Windows / TIA analysis', 'Entitlement narrative support', 'What-if scenarios', 'Recovery & acceleration plan'],
        },
        {
          id: 'cost-evm',
          icon: 'curve',
          title: 'Cost Control & Earned Value',
          desc:
            'Cost breakdown aligned to the WBS, PV / EV / AC tracking, CPI and SPI trends, and EAC forecasts that give early warning instead of hindsight.',
          points: ['Cost-loaded baseline', 'Monthly EVM cycle', 'CPI / SPI trending', 'EAC & VAC forecasting'],
        },
        {
          id: 'reporting',
          icon: 'dashboard',
          title: 'Reporting & Power BI Dashboards',
          desc:
            'Weekly lookaheads, monthly progress narratives and live Power BI dashboards fed directly from P6 — one version of the truth for every stakeholder.',
          points: ['3-week lookaheads', 'Monthly progress report', 'Live Power BI dashboard', 'Automated P6 data pipeline'],
        },
        {
          id: 'setup-training',
          icon: 'structure',
          title: 'P6 Setup, Training & Support',
          desc:
            'EPS and OBS structures, user roles, global change libraries and templates — plus hands-on coaching so your planners keep the system healthy long after the engagement ends.',
          points: ['EPS / OBS design', 'Admin & security setup', 'Templates & global change', 'Planner coaching'],
        },
      ],
    },
    showcase: {
      eyebrow: 'Inside the work',
      title: 'What a schedule looks like when it is built properly',
      lead:
        'A programme is only useful if it can be trusted. Every schedule I hand over is checked against the same criteria before it reaches your desk.',
      checks: [
        'Complete WBS mapped to contract deliverables and cost accounts',
        'Full logic — no open ends, no dangling activities, minimal hard constraints',
        'A single, defensible critical path with realistic total float',
        'Calendars that reflect real working conditions, shutdowns and weather',
        'Resource and cost loading that reconciles to the approved budget',
        'A locked baseline with a documented change and revision procedure',
      ],
      legend: { critical: 'Critical path', normal: 'Non-critical', milestone: 'Milestone', today: 'Data date' },
      healthTitle: 'Schedule health check',
      healthNote: 'Illustrative output',
      evmTitle: 'Earned value at a glance',
      evmLead:
        'The same update cycle that moves the schedule produces the cost picture — planned value, earned value and actual cost on one axis, with variance visible before it becomes a surprise.',
      evmLegend: { pv: 'Planned value (PV)', ev: 'Earned value (EV)', ac: 'Actual cost (AC)', date: 'Data date' },
    },
    approach: {
      eyebrow: 'How I work',
      title: 'From raw scope to a decision you can defend',
      lead: 'A structured cycle that turns project data into information management can act on.',
      steps: [
        { title: 'Assess', desc: 'Review contract, scope, existing schedule and reporting. Establish what is trustworthy and what is not.' },
        { title: 'Structure', desc: 'Build the WBS, coding, calendars and controls framework the project will run on.' },
        { title: 'Baseline', desc: 'Load logic, resources and cost. Validate the critical path and lock an approved baseline.' },
        { title: 'Monitor', desc: 'Run the update cycle: progress, earned value, variance, risk and forecast to complete.' },
        { title: 'Report & Decide', desc: 'Deliver clear dashboards and narratives that point to a decision, not just a status.' },
      ],
    },
    deliverables: {
      eyebrow: 'Deliverables',
      title: 'What you actually receive',
      lead: 'Every engagement ends with files and documents you own and can hand to anyone.',
      items: [
        { title: 'Primavera P6 project (.xer / .xml)', desc: 'Fully coded, loaded and baselined — ready to import into your own EPS.' },
        { title: 'Schedule basis & narrative', desc: 'Assumptions, calendars, logic rationale, exclusions and risks written down.' },
        { title: 'Health check report', desc: 'DCMA 14-point results with a prioritised remediation list and re-test.' },
        { title: 'Three-week lookahead', desc: 'Field-ready, filtered to the crews, disciplines and areas that need it.' },
        { title: 'Monthly progress & EVM report', desc: 'Physical progress, CPI / SPI, variance analysis and forecast to complete.' },
        { title: 'Power BI dashboard', desc: 'Refreshable, with drill-down by WBS, discipline, area and contractor.' },
      ],
    },
    why: {
      eyebrow: 'Why work with me',
      title: 'Controls that connect, not four disconnected spreadsheets',
      items: [
        { title: 'Integrated by design', desc: 'Schedule, cost, risk and reporting are built as one system. A change in the programme moves the cost forecast and the dashboard in the same cycle.' },
        { title: 'One point of accountability', desc: 'Scheduling, cost management, earned value and risk analysis under a single owner — no gaps between specialists to fall through.' },
        { title: 'Evidence, not opinion', desc: 'Every recommendation is traceable to schedule metrics, earned value data and trend analysis that can be re-run and challenged.' },
        { title: 'Built for capital projects', desc: 'Oil & gas and construction programmes with long-lead procurement, multi-contractor interfaces and demanding approval cycles.' },
      ],
    },
    expertise: {
      eyebrow: 'Capability',
      title: 'Tools & sectors',
      lead: 'The stack I use to build, analyse and automate project controls.',
      core: 'Core project controls',
      data: 'Data & automation',
      sectors: 'Industry sectors',
      certs: 'Certifications',
      certsNote: 'Details available on request.',
    },
    experience: {
      eyebrow: 'Professional experience',
      title: 'Project monitoring at Dhi Qar Oil Company',
      lead:
        'My employed role is project follow-up and monitoring at Dhi Qar Oil Company — the desk that receives contractor schedules, checks them and tracks them through execution. That owner-side perspective is what I bring to every independent engagement.',
      current: 'Current role',
      duties: [
        { title: 'Project follow-up & monitoring', desc: 'Tracking physical progress against approved baselines, flagging slippage early and keeping management informed.' },
        { title: 'Reviewing submitted schedules', desc: 'Auditing the baseline and update programmes contractors submit to the company — logic, critical path, float, calendars and loading.' },
        { title: 'Verification & comments', desc: 'Issuing structured review comments, verifying corrections and recommending acceptance or resubmission.' },
        { title: 'Progress reporting', desc: 'Turning schedule data into clear progress reports and dashboards for decision-makers.' },
      ],
      flowTitle: 'How a contractor schedule is reviewed',
      flowNote: 'The review cycle I run on programmes submitted to the company',
      flow: [
        { k: 'Submit', v: 'Contractor submits baseline or update (.xer)' },
        { k: 'Audit', v: 'DCMA 14-point and logic checks' },
        { k: 'Comment', v: 'Structured review comments issued' },
        { k: 'Verify', v: 'Corrections re-checked' },
        { k: 'Accept', v: 'Approved baseline, monthly monitoring' },
      ],
      stats: [
        { k: 'Owner side', v: 'Hands-on experience of what owner-side reviewers check before a schedule is accepted.' },
        { k: 'Oil & gas', v: 'Field development, facilities and infrastructure projects.' },
        { k: 'Many projects', v: 'Monitored, reviewed and reported across their full lifecycle.' },
      ],
      independence:
        'Consulting services on this site are provided independently, in a personal capacity — not on behalf of my employer. To avoid any conflict of interest, I do not accept engagements on projects where my employer is the owner or a party, and no confidential employer information is ever used.',
    },
    certificates: {
      eyebrow: 'Credentials',
      title: 'Certificates',
      lead: 'Certified by specialised institutes in Primavera P6, planning and project management, having met the requirements of each programme.',
      view: 'View certificate',
      pending: 'Copy available on request',
      verifyAtIssuer: 'Verify with issuer',
      verifyId: 'Verification ID',
      hours: 'hours',
      close: 'Close',
    },
    order: {
      eyebrow: 'How to order',
      title: 'Request a service in four steps',
      lead: 'Pick the service, add a few details and send it straight to my WhatsApp or email. I reply with scope, timeline and fee.',
      steps: [
        { k: 'Choose', v: 'Select the service you need.' },
        { k: 'Describe', v: 'Project type, stage and what the schedule needs.' },
        { k: 'Send', v: 'One tap to WhatsApp or email.' },
        { k: 'Receive', v: 'A proposal, then delivery of your files.' },
      ],
      form: {
        service: 'Service',
        consult: 'Consultation session',
        other: 'Other / not sure yet',
        name: 'Your name',
        org: 'Company / project',
        details: 'Project details',
        detailsHint: 'Scope, stage, deadline, existing schedule (if any)…',
        sendWa: 'Send via WhatsApp',
        sendEmail: 'Send via email',
        greeting: 'Hello Hassan, I would like to request a service.',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'About me',
      photoAlt: 'Hassan Al-Hilali',
      photoPlaceholder: 'Add photo.jpg to /public/images',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      items: [
        { q: 'Do you work remotely?', a: 'Yes. Most engagements run remotely with scheduled review sessions. On-site mobilisation for kick-off, baseline workshops or claim support can be arranged when the project needs it.' },
        { q: 'Can you take over an existing schedule?', a: 'Usually that is the starting point. I run a health check on what exists, agree with you what must be fixed, and rebuild only what genuinely needs rebuilding.' },
        { q: 'Which versions of Primavera P6 do you work with?', a: 'P6 Professional and P6 EPPM, current and legacy releases. I also work in Microsoft Project and can convert cleanly between the two.' },
        { q: 'How does an engagement usually start?', a: 'A short call, then a fixed-scope first step — normally a schedule health check or a baseline build — so you can judge the work before committing to anything longer.' },
        { q: 'How are fees and payment handled?', a: 'Each request receives a written quote with scope, deliverables, timeline and a fixed fee (or a day rate for open-ended support), in USD or IQD. Larger engagements are split into milestone payments.' },
        { q: 'Is my project data kept confidential?', a: 'Yes. Project files are used only for the agreed scope, are not shared with third parties, and are deleted or returned at the end of the engagement. I am happy to sign your NDA before receiving any files.' },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Discuss a project',
      lead: 'Send a short note about the project, its stage and where the schedule currently hurts. I will reply with how I would approach it.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      availabilityLabel: 'Availability',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      tagline: 'Primavera P6 and project controls consulting for capital projects.',
      rights: 'All rights reserved.',
      trademark:
        'Oracle and Primavera are registered trademarks of Oracle and/or its affiliates. This is an independent consulting practice, not affiliated with or endorsed by Oracle.',
      backToTop: 'Back to top',
    },
  },

  ar: {
    meta: {
      title: 'حسن الهلالي | استشاري بريمافيرا P6 وضبط المشاريع',
      description:
        'إعداد جداول بريمافيرا P6، وتدقيق الجداول، وتحليل التأخير، والقيمة المكتسبة، وتقارير Power BI لمشاريع النفط والغاز والإنشاءات.',
      switchLabel: 'English',
      switchTitle: 'التحويل إلى الإنجليزية',
    },
    nav: {
      services: 'الخدمات',
      p6: 'بريمافيرا P6',
      approach: 'المنهجية',
      deliverables: 'المخرجات',
      expertise: 'الخبرات',
      experience: 'الخبرة',
      certificates: 'الشهادات',
      order: 'اطلب خدمة',
      about: 'نبذة',
      contact: 'تواصل',
      menu: 'فتح قائمة التنقل',
      skip: 'تخطي إلى المحتوى',
      home: 'الرئيسية',
    },
    cta: {
      primary: 'ناقش مشروعك',
      secondary: 'استعرض الخدمات',
      email: 'راسلني',
      whatsapp: 'واتساب',
      order: 'اطلب خدمة',
    },
    hero: {
      eyebrow: 'بريمافيرا P6 · التخطيط وضبط المشاريع',
      employer: 'متابعة المشاريع · شركة نفط ذي قار',
      title: 'جداول بريمافيرا P6 تصمد أمام التدقيق.',
      lead:
        'أُعِدّ جداول المشاريع في بريمافيرا P6 وأدقّقها وأعيد بناءها عند التعثر — محمّلة بالموارد والتكاليف، مدروسة المخاطر، ومرتبطة بتقارير يقرؤها أصحاب القرار فعلًا.',
      badges: ['بريمافيرا P6', 'مايكروسوفت بروجكت', 'Power BI', 'القيمة المكتسبة', 'مخاطر الجدول'],
      chartTitle: 'خط الأساس مقابل الإنجاز',
      chartNote: 'عرض توضيحي للجدول',
    },
    metrics: [
      { k: 'معايير DCMA الـ14', v: 'قياس سلامة الجدول وفق معايير جودة معتمدة، لا وفق الانطباع.' },
      { k: 'محمّل بالتكلفة والموارد', v: 'خطوط أساس تحمل الميزانية والأيدي العاملة والإنتاجية، لا التواريخ وحدها.' },
      { k: 'النفط والغاز · الإنشاءات', v: 'مشاريع رأسمالية بتداخلات كثيفة وتوريدات طويلة ودورات اعتماد صارمة.' },
      { k: 'من P6 إلى Power BI', v: 'تقارير تُبنى مباشرة من الجدول وتُحدَّث عند الطلب.' },
    ],
    services: {
      eyebrow: 'ما أقدمه',
      title: 'الخدمات',
      lead: 'بريمافيرا P6 في القلب، وحولها منظومة ضبط المشاريع كاملة.',
      items: [
        {
          id: 'p6-development',
          icon: 'gantt',
          title: 'إعداد جداول بريمافيرا P6',
          desc:
            'هيكل تجزئة العمل، وترميز الأنشطة، والتقاويم، والعلاقات المنطقية والقيود — مبنية وفق العقد، ثم محمّلة بالموارد والتكاليف ومعتمدة كخط أساس، ليصبح للإنجاز معنى من اليوم الأول.',
          points: ['هيكل WBS مطابق للعقد', 'ترميز الأنشطة والتخطيطات', 'تحميل الموارد والتكاليف', 'حزمة اعتماد خط الأساس'],
        },
        {
          id: 'health-check',
          icon: 'check',
          title: 'مراجعة وتدقيق الجدول',
          desc:
            'تدقيق مستقل لبرنامجك الزمني: معايير DCMA الـ14، وكثافة المنطق، والأنشطة المفتوحة، والفوائض السالبة، والفواصل والقيود — بنتيجة على شكل قائمة إصلاح مرتّبة بالأولوية، لا مجرد درجة.',
          points: ['تشغيل معايير DCMA الـ14', 'التحقق من المسار الحرج', 'جودة المنطق والفائض', 'خطة معالجة بالأولوية'],
        },
        {
          id: 'delay-recovery',
          icon: 'recovery',
          title: 'تحليل التأخير وخطط الاسترجاع',
          desc:
            'تحليل النوافذ الزمنية وتحليل الأثر الزمني لتحديد السبب الفعلي للتأخير، مع سيناريوهات افتراضية وجدول استرجاع قابل للتنفيذ فعليًا من قِبل الفريق.',
          points: ['تحليل النوافذ و TIA', 'إسناد المطالبات بالأدلة', 'سيناريوهات ماذا-لو', 'خطة استرجاع وتسريع'],
        },
        {
          id: 'cost-evm',
          icon: 'curve',
          title: 'ضبط التكلفة والقيمة المكتسبة',
          desc:
            'تفصيل التكلفة بما يوازي هيكل WBS، وتتبع PV و EV و AC، ومؤشرات CPI و SPI واتجاهاتها، وتنبؤات EAC التي تُنذر مبكرًا بدل أن تشخّص متأخرًا.',
          points: ['خط أساس محمّل بالتكلفة', 'دورة EVM شهرية', 'تتبع اتجاهات CPI / SPI', 'تنبؤ EAC و VAC'],
        },
        {
          id: 'reporting',
          icon: 'dashboard',
          title: 'التقارير ولوحات Power BI',
          desc:
            'خطط الأسابيع الثلاثة القادمة، والتقارير الشهرية التحليلية، ولوحات Power BI الحيّة المغذّاة مباشرة من P6 — نسخة واحدة من الحقيقة لكل الأطراف.',
          points: ['خطط استباقية لثلاثة أسابيع', 'تقرير إنجاز شهري', 'لوحة Power BI حيّة', 'ربط بيانات P6 آليًا'],
        },
        {
          id: 'setup-training',
          icon: 'structure',
          title: 'تأسيس P6 والتدريب والدعم',
          desc:
            'بناء هياكل EPS و OBS، وصلاحيات المستخدمين، ومكتبات التغيير الشامل والقوالب — مع تدريب عملي لمخططيك ليحافظوا على سلامة النظام بعد انتهاء التكليف.',
          points: ['تصميم EPS / OBS', 'إعداد الإدارة والصلاحيات', 'القوالب والتغيير الشامل', 'تدريب فريق التخطيط'],
        },
      ],
    },
    showcase: {
      eyebrow: 'داخل العمل',
      title: 'كيف يبدو الجدول حين يُبنى كما ينبغي',
      lead:
        'لا قيمة لبرنامج زمني لا يمكن الوثوق به. كل جدول أسلّمه يُفحص وفق المعايير نفسها قبل أن يصل إلى مكتبك.',
      checks: [
        'هيكل WBS كامل مرتبط بمخرجات العقد وحسابات التكلفة',
        'منطق مكتمل — بلا أنشطة مفتوحة أو معلّقة، وبأقل قدر من القيود الصارمة',
        'مسار حرج واحد قابل للدفاع عنه بفائض كلي واقعي',
        'تقاويم تعكس ظروف العمل الحقيقية والتوقفات والأحوال الجوية',
        'تحميل للموارد والتكاليف يتطابق مع الميزانية المعتمدة',
        'خط أساس مقفل مع إجراء موثّق للتغيير والمراجعات',
      ],
      legend: { critical: 'المسار الحرج', normal: 'غير حرج', milestone: 'محطة رئيسية', today: 'تاريخ البيانات' },
      healthTitle: 'فحص سلامة الجدول',
      healthNote: 'مخرجات توضيحية',
      evmTitle: 'القيمة المكتسبة بلمحة',
      evmLead:
        'دورة التحديث نفسها التي تحرّك الجدول تنتج صورة التكلفة — القيمة المخططة والمكتسبة والتكلفة الفعلية على محور واحد، مع انحراف مرئي قبل أن يتحول إلى مفاجأة.',
      evmLegend: { pv: 'القيمة المخططة (PV)', ev: 'القيمة المكتسبة (EV)', ac: 'التكلفة الفعلية (AC)', date: 'تاريخ البيانات' },
    },
    approach: {
      eyebrow: 'منهجية العمل',
      title: 'من نطاق خام إلى قرار يمكن الدفاع عنه',
      lead: 'دورة منظّمة تحوّل بيانات المشروع إلى معلومة تستطيع الإدارة التصرف بناءً عليها.',
      steps: [
        { title: 'التقييم', desc: 'مراجعة العقد والنطاق والجدول القائم والتقارير الحالية، وتحديد ما يمكن الوثوق به وما لا يمكن.' },
        { title: 'الهيكلة', desc: 'بناء هيكل WBS والترميز والتقاويم وإطار الضبط الذي سيعمل المشروع عليه.' },
        { title: 'خط الأساس', desc: 'تحميل المنطق والموارد والتكلفة، والتحقق من المسار الحرج، ثم اعتماد خط أساس مقفل.' },
        { title: 'المتابعة', desc: 'تشغيل دورة التحديث: الإنجاز، والقيمة المكتسبة، والانحرافات، والمخاطر، والتنبؤ حتى الإنجاز.' },
        { title: 'التقرير والقرار', desc: 'تسليم لوحات وتقارير واضحة تشير إلى قرار محدد، لا إلى حالة عامة فقط.' },
      ],
    },
    deliverables: {
      eyebrow: 'المخرجات',
      title: 'ما تستلمه فعليًا',
      lead: 'كل تكليف ينتهي بملفات ووثائق تملكها أنت ويمكنك تسليمها لأي جهة.',
      items: [
        { title: 'ملف بريمافيرا P6 ‏(.xer / .xml)', desc: 'مرمّز ومحمّل ومعتمد كخط أساس — جاهز للاستيراد إلى هيكل EPS لديك.' },
        { title: 'وثيقة أسس الجدول', desc: 'الافتراضات والتقاويم ومبررات المنطق والاستثناءات والمخاطر موثّقة كتابيًا.' },
        { title: 'تقرير فحص السلامة', desc: 'نتائج معايير DCMA الـ14 مع قائمة معالجة مرتّبة بالأولوية وإعادة اختبار.' },
        { title: 'خطة الأسابيع الثلاثة', desc: 'جاهزة للموقع، مُرشّحة حسب الفرق والتخصصات والمناطق المعنية.' },
        { title: 'تقرير الإنجاز و EVM الشهري', desc: 'الإنجاز الفعلي، ومؤشرات CPI / SPI، وتحليل الانحراف، والتنبؤ حتى الإنجاز.' },
        { title: 'لوحة Power BI', desc: 'قابلة للتحديث مع تفصيل حسب WBS والتخصص والمنطقة والمقاول.' },
      ],
    },
    why: {
      eyebrow: 'لماذا أنا',
      title: 'منظومة ضبط مترابطة، لا أربعة جداول منفصلة',
      items: [
        { title: 'تكامل بالتصميم', desc: 'الجدول والتكلفة والمخاطر والتقارير تُبنى كنظام واحد. أي تغيير في البرنامج ينعكس على تنبؤ التكلفة واللوحة في الدورة نفسها.' },
        { title: 'جهة مسؤولية واحدة', desc: 'الجدولة وضبط التكلفة والقيمة المكتسبة وتحليل المخاطر تحت مسؤول واحد — بلا فجوات بين التخصصات.' },
        { title: 'أدلة لا آراء', desc: 'كل توصية يمكن تتبّعها إلى مؤشرات الجدول وبيانات القيمة المكتسبة وتحليل الاتجاه، وكلها قابلة لإعادة التشغيل والمساءلة.' },
        { title: 'مبني للمشاريع الرأسمالية', desc: 'برامج النفط والغاز والإنشاءات ذات التوريدات طويلة الأمد وتداخل المقاولين ودورات الاعتماد الصارمة.' },
      ],
    },
    expertise: {
      eyebrow: 'القدرات',
      title: 'الأدوات والقطاعات',
      lead: 'المنظومة التقنية التي أبني وأحلّل وأؤتمت بها ضبط المشاريع.',
      core: 'أدوات ضبط المشاريع',
      data: 'البيانات والأتمتة',
      sectors: 'القطاعات الصناعية',
      certs: 'الشهادات',
      certsNote: 'التفاصيل متاحة عند الطلب.',
    },
    experience: {
      eyebrow: 'الخبرة المهنية',
      title: 'متابعة المشاريع في شركة نفط ذي قار',
      lead:
        'وظيفتي هي متابعة المشاريع ورصدها في شركة نفط ذي قار — الجهة التي تستلم جداول المقاولين وتدقّقها وتتابع تنفيذها. وهذا المنظور من جهة المالك هو ما أحمله إلى كل تكليف مستقل.',
      current: 'المنصب الحالي',
      duties: [
        { title: 'متابعة المشاريع ورصدها', desc: 'تتبّع الإنجاز الفعلي مقابل خطوط الأساس المعتمدة، والتنبيه المبكر للتأخير، وإبقاء الإدارة على اطلاع.' },
        { title: 'مراجعة الجداول المقدَّمة', desc: 'تدقيق جداول خط الأساس والتحديثات التي يقدّمها المقاولون إلى الشركة — المنطق والمسار الحرج والفائض والتقاويم والتحميل.' },
        { title: 'التحقق وإصدار الملاحظات', desc: 'إصدار ملاحظات مراجعة منظّمة، والتحقق من التصحيحات، والتوصية بالقبول أو إعادة التقديم.' },
        { title: 'تقارير الإنجاز', desc: 'تحويل بيانات الجدول إلى تقارير إنجاز ولوحات واضحة لصنّاع القرار.' },
      ],
      flowTitle: 'كيف يُراجَع جدول المقاول',
      flowNote: 'دورة المراجعة التي أطبّقها على الجداول المقدَّمة إلى الشركة',
      flow: [
        { k: 'التقديم', v: 'المقاول يقدّم خط الأساس أو التحديث (.xer)' },
        { k: 'التدقيق', v: 'معايير DCMA الـ14 وفحص المنطق' },
        { k: 'الملاحظات', v: 'إصدار ملاحظات مراجعة منظّمة' },
        { k: 'التحقق', v: 'إعادة فحص التصحيحات' },
        { k: 'الاعتماد', v: 'خط أساس معتمد ومتابعة شهرية' },
      ],
      stats: [
        { k: 'من جهة المالك', v: 'خبرة عملية بما يدقّقه مراجِع جهة المالك قبل قبول أي جدول.' },
        { k: 'النفط والغاز', v: 'مشاريع تطوير الحقول والمنشآت والبنى التحتية.' },
        { k: 'مشاريع عديدة', v: 'متابعة ومراجعة وتقارير على امتداد دورة حياتها كاملة.' },
      ],
      independence:
        'الخدمات الاستشارية في هذا الموقع تُقدَّم بصفة شخصية مستقلة، لا باسم جهة عملي. وتجنبًا لأي تضارب مصالح، لا أقبل أي تكليف في مشاريع تكون جهة عملي مالكة لها أو طرفًا فيها، ولا تُستخدم أي معلومات سرية تخص جهة العمل.',
    },
    certificates: {
      eyebrow: 'المؤهلات',
      title: 'الشهادات',
      lead: 'حاصل على شهادات من معاهد متخصصة في بريمافيرا P6 والتخطيط وإدارة المشاريع، مستوفيًا شروط كل برنامج.',
      view: 'عرض الشهادة',
      pending: 'نسخة متاحة عند الطلب',
      verifyAtIssuer: 'التحقق لدى الجهة المانحة',
      verifyId: 'رقم التحقق',
      hours: 'ساعة',
      close: 'إغلاق',
    },
    order: {
      eyebrow: 'طريقة الطلب',
      title: 'اطلب خدمتك في أربع خطوات',
      lead: 'اختر الخدمة، وأضف بعض التفاصيل، وأرسلها مباشرة إلى الواتساب أو البريد الإلكتروني. سأرد عليك بالنطاق والمدة والتكلفة.',
      steps: [
        { k: 'اختر', v: 'حدّد الخدمة التي تحتاجها.' },
        { k: 'صِف', v: 'نوع المشروع ومرحلته وما يحتاجه الجدول.' },
        { k: 'أرسل', v: 'بنقرة واحدة عبر واتساب أو البريد.' },
        { k: 'استلم', v: 'عرض فني ومالي، ثم تسليم ملفاتك.' },
      ],
      form: {
        service: 'الخدمة',
        consult: 'جلسة استشارية',
        other: 'أخرى / غير متأكد بعد',
        name: 'الاسم',
        org: 'الشركة / المشروع',
        details: 'تفاصيل المشروع',
        detailsHint: 'النطاق، المرحلة، الموعد النهائي، الجدول الحالي (إن وُجد)…',
        sendWa: 'أرسل عبر واتساب',
        sendEmail: 'أرسل عبر البريد',
        greeting: 'مرحبًا أستاذ حسن، أرغب بطلب خدمة.',
      },
    },
    about: {
      eyebrow: 'نبذة',
      title: 'نبذة عني',
      photoAlt: 'حسن الهلالي',
      photoPlaceholder: 'أضف photo.jpg إلى ‎/public/images',
    },
    faq: {
      eyebrow: 'أسئلة',
      title: 'أسئلة متكررة',
      items: [
        { q: 'هل تعمل عن بُعد؟', a: 'نعم. معظم التكليفات تُدار عن بُعد مع جلسات مراجعة مجدولة. ويمكن ترتيب حضور ميداني لانطلاق المشروع أو ورش خط الأساس أو دعم المطالبات عند الحاجة.' },
        { q: 'هل يمكنك استلام جدول قائم؟', a: 'غالبًا هذه هي نقطة البداية. أُجري فحص سلامة لما هو موجود، ونتفق معًا على ما يجب إصلاحه، ثم أعيد بناء ما يستحق إعادة البناء فقط.' },
        { q: 'ما إصدارات بريمافيرا P6 التي تعمل عليها؟', a: 'إصدارات P6 Professional و P6 EPPM، الحديثة والقديمة. وأعمل أيضًا على Microsoft Project مع تحويل نظيف بين النظامين.' },
        { q: 'كيف يبدأ التكليف عادةً؟', a: 'مكالمة قصيرة، ثم خطوة أولى محددة النطاق — عادةً فحص سلامة جدول أو بناء خط أساس — لتحكم على العمل قبل الالتزام بأي مدى أطول.' },
        { q: 'كيف تُحدَّد الأتعاب وطريقة الدفع؟', a: 'كل طلب يحصل على عرض مكتوب يوضح النطاق والمخرجات والمدة وأتعابًا ثابتة (أو أجرًا يوميًا للدعم المفتوح)، بالدولار أو الدينار العراقي. والتكليفات الكبيرة تُقسَّم إلى دفعات مرتبطة بمراحل التسليم.' },
        { q: 'هل تبقى بيانات مشروعي سرية؟', a: 'نعم. تُستخدم ملفات المشروع للنطاق المتفق عليه فقط، ولا تُشارك مع أي طرف ثالث، وتُحذف أو تُعاد عند انتهاء التكليف. ويسعدني توقيع اتفاقية عدم إفصاح (NDA) قبل استلام أي ملف.' },
      ],
    },
    contact: {
      eyebrow: 'للتواصل',
      title: 'ناقش مشروعك',
      lead: 'أرسل نبذة مختصرة عن المشروع ومرحلته وموضع الخلل في الجدول حاليًا، وسأرد بتصوري لطريقة التعامل معه.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'رقم الهاتف',
      locationLabel: 'الموقع',
      availabilityLabel: 'الإتاحة',
      linkedinLabel: 'لينكدإن',
    },
    footer: {
      tagline: 'استشارات بريمافيرا P6 وضبط المشاريع للمشاريع الرأسمالية.',
      rights: 'جميع الحقوق محفوظة.',
      trademark:
        'Oracle و Primavera علامتان تجاريتان مسجلتان لشركة Oracle و/أو الشركات التابعة لها. هذه ممارسة استشارية مستقلة لا ترتبط بشركة Oracle ولا تحظى باعتمادها.',
      backToTop: 'العودة للأعلى',
    },
  },
} as const;

export function t(lang: Lang) {
  return content[lang];
}

export function localePath(lang: Lang, hash = '') {
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return hash ? `${base}${hash}` : base;
}
