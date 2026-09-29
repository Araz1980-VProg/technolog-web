export type PhaseKey =
  | 'ai_research'
  | 'concept'
  | 'simulation'
  | 'cad_design'
  | 'electronics'
  | 'firmware'
  | 'prototyping'
  | 'industrial_scale'
  | 'field_testing';

export type PhaseStatus = 'pending' | 'in_progress' | 'completed';

export interface ProjectPhase {
  key: PhaseKey;
  progress: number;
  status: PhaseStatus;
}

// interfaces
export interface Feasibility {
  estimatedCost: string; // مثلاً "High", "Low", یا مقدار عددی
  marketReadiness: 'concept' | 'prototype' | 'pilot' | 'industrial'; 
  roiPotential: string; // پتانسیل بازگشت سرمایه
  notes: string; // تحلیل مختصر و مفید
}

export interface CategoryMeta {
  id: string;
  label: {
    en: string;
    fa: string;
    tr: string;
  };
}

export interface Bottleneck {
  task: string;
  isSolved: boolean; // اگر ایده نهایی شده باشد true
}

export interface Resource {
  title: string;
  url: string;
}

export type MediaContent =
  | { type: 'youtube' | 'instagram'; id: string }
  | { type: 'image' | 'video'; url: string; alt?: string };
  
export const PROJECT_CATEGORIES: CategoryMeta[] = [
  // شاخه‌های اصلی فنی
  { id: "mechatronics", label: { fa: "مکاترونیک و رباتیک", en: "Mechatronics & Robotics", tr: "Mekatronik ve Robotik" } },
  { id: "ai", label: { fa: "هوش مصنوعی", en: "Artificial Intelligence", tr: "Yapay Zeka" } },
  { id: "software", label: { fa: "نرم‌افزار و اپلیکیشن", en: "Software & Apps", tr: "Yazılım ve Uygulama" } },
  { id: "3d-printing", label: { fa: "پرینت ۳بعدی و نمونه‌سازی", en: "3D Printing & Prototyping", tr: "3D Baskı ve Prototipleme" } },
  
  // حوزه‌های کاربردی
  { id: "aerospace", label: { fa: "هوا-فضا", en: "Aerospace", tr: "Havacılık ve Uzay" } },
  { id: "home_appliances", label: { fa: "لوازم خانگی", en: "Home Appliances", tr: "Ev Aletleri" } },
  { id: "workshop_tools", label: { fa: "لوازم کارگاهی", en: "Workshop Tools", tr: "Atölye Ekipmanları" } },
  { id: "energy_generation", label: { fa: "تولید انرژی", en: "Energy Generation", tr: "Enerji Üretimi" } },
  { id: "energy_storage", label: { fa: "ذخیره انرژی", en: "Energy Storage", tr: "Enerji Depolama" } },
  { id: "microcontroller", label: { fa: "میکروکنترلر و امبدد", en: "Microcontrollers & Embedded", tr: "Mikrodenetleyici" } },
  { id: "wind_turbine", label: { fa: "توربین بادی", en: "Wind Turbines", tr: "Rüzgar Türbini" } },
  { id: "pump_compressor", label: { fa: "پمپ و کمپرسور", en: "Pumps & Compressors", tr: "Pompa ve Kompresör" } },
  { id: "pet_supplies", label: { fa: "لوازم حیوانات", en: "Pet Supplies", tr: "Evcil Hayvan Ürünleri" } },
  { id: "woodworking", label: { fa: "صنایع چوب", en: "Woodworking", tr: "Ahşap İşleri" } },
  { id: "toys_fun", label: { fa: "اسباب بازی و سرگرمی", en: "Toys & Gadgets", tr: "Oyuncak ve Hobi" } },
];

export interface Project {
  slug: string;
  categories: string[];
  title: { fa: string; en: string; tr: string };
  summary: { fa: string; en: string; tr: string };
  tags: string[];
  phases?: ProjectPhase[];
  // فیلدهای جدید:
  bottlenecks?: Bottleneck[];
  resources?: Resource[];
  media?: MediaContent[];
  feasibility?: Feasibility; // بخش جدید
}

export const projects: Project[] = [
  {
    slug: "ang-gas-storage-mof",
    categories: ["energy_storage", "mechatronics"],
    title: {
      fa: "ذخیره‌سازی متان روی MOFها (ANG)",
      en: "Adsorbed Natural Gas (ANG) via MOFs",
      tr: "MOF'lar Üzerinde Metan Depolama (ANG)"
    },
    summary: {
      fa: "پروژه ANG یک سیستم پیشرفته ذخیره‌سازی گاز طبیعی است که به‌جای تکیه صرف بر فشار بالا، از فناوری جذب سطحی روی چارچوب‌های فلزی-آلی (MOF) استفاده می‌کند. این روش با افزایش چگالی ذخیره‌سازی، ایمنی مخازن را بهبود داده و نیاز به فشارهای کاری بسیار بالا را به‌طور قابل‌توجهی کاهش می‌دهد. در این پروژه، ما فرآیند کامل شامل انتخاب و سنتز جاذب‌های نانومتخلخل، طراحی سیستم‌های مکانیکی و ابزار دقیق، تا ساخت پایلوت و نمونه نهایی صنعتی را پیش می‌بریم. چالش اصلی در این مسیر، بهینه‌سازی بستر جاذب برای توزیع یکنواخت گاز و مدیریت حرارتی در حین فرآیند واجذب است. هدف نهایی، دستیابی به یک محصول صنعتی قابل‌اطمینان است که جایگزین بهینه‌ای برای مخازن CNG فعلی باشد. این طرح شامل بررسی‌های فنی دقیق برای تجاری‌سازی و تست‌های میدانی جهت اطمینان از عملکرد سیستم در شرایط واقعی است.",
      en: "The ANG project is an advanced natural gas storage system that utilizes Adsorbed Natural Gas (ANG) technology via Metal-Organic Frameworks (MOFs) instead of high-pressure compression alone. By increasing storage density, this method enhances tank safety and reduces the required working pressures significantly. Throughout this project, we move from the selection and synthesis of nanoporous adsorbents and the design of mechanical and instrumentation systems to the development of a pilot and the final industrial prototype. The primary technical challenge lies in optimizing the adsorbent bed for uniform gas distribution and effective thermal management during the desorption process. The ultimate goal is to deliver a reliable industrial product that serves as an efficient alternative to conventional CNG tanks. This plan encompasses rigorous technical validation for commercialization and field tests to ensure operational reliability under real-world conditions.",
      tr: "ANG projesi, sadece yüksek basınçlı sıkıştırma yerine Metal-Organik Çerçeveler (MOF) aracılığıyla Adsorbe Edilmiş Doğal Gaz (ANG) teknolojisini kullanan gelişmiş bir doğal gaz depolama sistemidir. Bu yöntem, depolama yoğunluğunu artırarak tank güvenliğini iyileştirmekte ve gerekli çalışma basınçlarını önemli ölçüde düşürmektedir. Proje boyunca, nanoporlu adsorbentlerin seçimi ve sentezinden, mekanik ve enstrümantasyon sistemlerinin tasarımına, pilot üretimden nihai endüstriyel prototip geliştirilmesine kadar ilerlemekteyiz. Temel teknik zorluk, gazın homojen dağılımı için adsorbent yatağının optimize edilmesi ve desorpsiyon işlemi sırasında termal yönetimin sağlanmasıdır. Nihai hedef, geleneksel CNG tanklarına verimli bir alternatif oluşturan güvenilir bir endüstriyel ürün sunmaktır. Bu plan, ticarileştirme için titiz teknik validasyonları ve gerçek dünya koşullarında operasyonel güvenilirliği sağlamak için saha testlerini kapsamaktadır."
    },
    tags: ["MOF", "Natural Gas", "Energy Storage", "Nanomaterials", "Process Engineering"],
    phases: [
      { key: "concept", progress: 100, status: "completed" },
      { key: "cad_design", progress: 80, status: "in_progress" },
      { key: "prototyping", progress: 0, status: "pending" }
    ],
    feasibility: {
      estimatedCost: "Medium-High", // به دلیل هزینه‌های ساخت کپسول و جاذب MOF
      marketReadiness: 'pilot',
      roiPotential: "High", // به دلیل جایگزینی ایمن‌تر با CNG
      notes: "پتانسیل بالا در بازار حمل‌ونقل عمومی و سامانه‌های توزیع گاز صنعتی. گلوگاه اقتصادی، هزینه‌ی سنتز MOF در مقیاس صنعتی است."
    },
    bottlenecks: [
      { task: 'Synthesizing industrial-grade MOFs', isSolved: false },
      { task: 'Manifold system design', isSolved: true },
      { task: 'Thermal management during desorption', isSolved: false }
    ]
  },
  {
    slug: "pricing-bot-automation",
    categories: ["software", "ai"],
    title: {
      en: "FastAPI Automated Crypto Pricing Engine",
      fa: "موتور خودکار استعلام قیمت صرافی با FastAPI",
      tr: "FastAPI Otomatik Kripto Fiyat Motoru"
    },
    summary: {
      en: "High-performance pricing service running systemd on VPS, querying APIs with scheduled tasks and SQLite persistence.",
      fa: "سرویس توزیع داده و استعلام لحظه‌ای قیمت روی VPS لینوکس با پردازش پس‌زمینه و ثبت SQLite.",
      tr: "Linux VPS üzerinde systemd ile çalışan, SQLite ve zamanlanmış görevlerle fiyat takip servisi."
    },
    tags: ["FastAPI", "Python", "SQLite", "Systemd"],
    phases: [
      { key: "concept", progress: 100, status: "completed" },
      { key: "firmware", progress: 100, status: "completed" },
      { key: "field_testing", progress: 85, status: "in_progress" }
    ]
  },
  {
    slug: "smart-pet-fountain",
    categories: ["mechatronics", "3d-printing", "pet_supplies", "pump_compressor"],
    title: {
      en: "Smart Hydroponic Pet Water Fountain",
      fa: "فواره هوشمند آب حیوانات خانگی",
      tr: "Akıllı Evcil Hayvan Su Çeşmesi"
    },
    summary: {
      en: "Custom 3D-designed 200mm circular pet fountain with integrated filtration, silent pump mount, and flow optimization.",
      fa: "طراحی و نمونه‌سازی مهندسی بدنه دایره‌ای ۲۰۰ میلی‌متری با جریان آب بهینه و فیلتراسیون یکپارچه.",
      tr: "Entegre filtreleme ve optimize edilmiş su akışına sahip 200 mm 3D tasarımlı evcil hayvan çeşmesi."
    },
    tags: ["FreeCAD", "3D Printing", "Rapid Prototyping"],
    phases: [
      { key: "concept", progress: 100, status: "completed" },
      { key: "cad_design", progress: 100, status: "completed" },
      { key: "prototyping", progress: 60, status: "in_progress" },
      { key: "field_testing", progress: 0, status: "pending" }
    ]
  },
  {
    slug: "vacuum-wax-degasser",
    categories: ["mechatronics", "workshop_tools", "pump_compressor"],
    title: {
      en: "Precision Wax Casting Bubble Removal Chamber",
      fa: "محفظه حباب‌گیری وکیوم قالب‌گیری موم",
      tr: "Hassas Mum Döküm Vakum Gaz Giderme Odası"
    },
    summary: {
      en: "Custom chamber engineering to eliminate micro-bubbles during high-detail casting and resin curing.",
      fa: "طراحی محفظه خلأ جهت حذف حباب‌های میکروسکوپی در فرایند ریخته‌گری دقیق موم و رزین.",
      tr: "Hassas döküm işlemlerinde mikro kabarcıkları yok etmek için tasarlanmış vakum odası."
    },
    tags: ["Mechanical Design", "Vacuum Systems", "Casting"],
    phases: [
      { key: "concept", progress: 100, status: "completed" },
      { key: "cad_design", progress: 100, status: "completed" },
      { key: "prototyping", progress: 40, status: "in_progress" },
      { key: "field_testing", progress: 0, status: "pending" }
    ]
  },
  {
    slug: "smart-gantry-dispenser",
    categories: ["mechatronics", "workshop_tools", "ai", "microcontroller"],
    title: {
      en: "Precision Automated Gantry Dispenser",
      fa: "سیستم هوشمند گنتری توزیع دقیق مایعات صنعتی",
      tr: "Hassas Otomatik Sıvı Dağıtım Gantry Sistemi"
    },
    summary: {
      en: "High-precision 3-axis CNC dispenser with AI surface scanning, closed-loop stepper control, and automated fluid dynamic tuning.",
      fa: "سیستم سه‌محوره صنعتی با اسکن هوشمند سطح، کنترل حلقه بسته استپر موتورها و بهینه‌سازی دینامیک سیالات در مقیاس صنعتی.",
      tr: "AI yüzey tarama, kapalı döngü step motor kontrolü ve akışkan dinamiği optimizasyonuna sahip 3 eksenli hassas dispenser."
    },
    tags: ["Mechatronics", "CNC", "Embedded Systems", "CFD", "Computer Vision"],
    phases: [
      { key: "ai_research", progress: 100, status: "completed" },
      { key: "concept", progress: 100, status: "completed" },
      { key: "simulation", progress: 100, status: "completed" },
      { key: "cad_design", progress: 100, status: "completed" },
      { key: "electronics", progress: 100, status: "completed" },
      { key: "firmware", progress: 100, status: "completed" },
      { key: "prototyping", progress: 100, status: "completed" },
      { key: "industrial_scale", progress: 65, status: "in_progress" },
      { key: "field_testing", progress: 0, status: "pending" }
    ]
  }
];
