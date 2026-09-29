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

export interface CategoryMeta {
  id: string;
  label: {
    en: string;
    fa: string;
    tr: string;
  };
}

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
  categories: string[]; // <--- تنها منبع دسته‌بندی پروژه
  title: {
    en: string;
    fa: string;
    tr: string;
  };
  summary: {
    en: string;
    fa: string;
    tr: string;
  };
  tags: string[];
  featured?: boolean;
  phases?: ProjectPhase[];
}

export const projects: Project[] = [
  {
    slug: "pricing-bot-automation",
    categories: ["software", "ai"],
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
