// products.js
// لازم الملف اسمه products.js (مش products.js.txt)

window.PRODUCTS = [

/* ====================== تكييفات (AC) ====================== */

/* ====================== هيرو (Hero) ====================== */
/* 1.5 بارد */
{
  id: "hero_15_c",
  section: "ac",
  line: "هيرو",
  name: "تكييف هيرو 1.5 حصان (بارد)",
  capacity: "1.5 حصان",
  mode: "بارد",
  img: "images/hero-1.jpg",
  features: [
    "زعنفة زرقاء (حماية ضد التآكل)",
    "تبريد سريع",
    "صوت هادي"
  ]
},
/* 1.5 بارد/ساخن */
{
  id: "hero_15_h",
  section: "ac",
  line: "هيرو",
  name: "تكييف هيرو 1.5 حصان (بارد/ساخن)",
  capacity: "1.5 حصان",
  mode: "بارد / ساخن",
  img: "images/hero-2.jpg",
  features: [
    "زعنفة زرقاء (حماية ضد التآكل)",
    "تبريد سريع",
    "صوت هادي"
  ]
},
/* 2.25 بارد */
{
  id: "hero_225_c",
  section: "ac",
  line: "هيرو",
  name: "تكييف هيرو 2.25 حصان (بارد)",
  capacity: "2.25 حصان",
  mode: "بارد",
  img: "images/hero-3.jpg",
  features: [
    "زعنفة زرقاء (حماية ضد التآكل)",
    "تبريد سريع",
    "صوت هادي"
  ]
},
/* 2.25 بارد/ساخن */
{
  id: "hero_225_h",
  section: "ac",
  line: "هيرو",
  name: "تكييف هيرو 2.25 حصان (بارد/ساخن)",
  capacity: "2.25 حصان",
  mode: "بارد / ساخن",
  img: "images/hero-4.jpg",
  features: [
    "زعنفة زرقاء (حماية ضد التآكل)",
    "تبريد سريع",
    "صوت هادي"
  ]
},
/* 3 حصان بارد/ساخن */
{
  id: "hero_30_h",
  section: "ac",
  line: "هيرو",
  name: "تكييف هيرو 3 حصان (بارد/ساخن)",
  capacity: "3 حصان",
  mode: "بارد / ساخن",
  img: "images/hero-5.jpg",
  features: [
    "زعنفة زرقاء (حماية ضد التآكل)",
    "تبريد سريع",
    "صوت هادي"
  ]
},

/* ====================== ستاندرد (STD) ====================== */
{
  id: "std_15_c",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 1.5 حصان (بارد)",
  capacity: "1.5 حصان",
  mode: "بارد",
  img: "images/std-1.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "std_15_h",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 1.5 حصان (بارد/ساخن)",
  capacity: "1.5 حصان",
  mode: "بارد / ساخن",
  img: "images/std-2.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "std_225_c",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 2.25 حصان (بارد)",
  capacity: "2.25 حصان",
  mode: "بارد",
  img: "images/std-3.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "std_225_h",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 2.25 حصان (بارد/ساخن)",
  capacity: "2.25 حصان",
  mode: "بارد / ساخن",
  img: "images/std-4.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "std_30_c",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 3 حصان (بارد)",
  capacity: "3 حصان",
  mode: "بارد",
  img: "images/std-5.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "std_30_h",
  section: "ac",
  line: "ستاندرد",
  name: "تكييف ستاندرد 3 حصان (بارد/ساخن)",
  capacity: "3 حصان",
  mode: "بارد / ساخن",
  img: "images/std-6.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات"
  ]
},

/* ====================== إس بلس (S Plus) ====================== */
{
  id: "splus_15_c",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 1.5 حصان (بارد)",
  capacity: "1.5 حصان",
  mode: "بارد",
  img: "images/splus-1.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},
{
  id: "splus_15_h",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 1.5 حصان (بارد/ساخن)",
  capacity: "1.5 حصان",
  mode: "بارد / ساخن",
  img: "images/splus-2.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},
{
  id: "splus_225_c",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 2.25 حصان (بارد)",
  capacity: "2.25 حصان",
  mode: "بارد",
  img: "images/splus-3.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},
{
  id: "splus_225_h",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 2.25 حصان (بارد/ساخن)",
  capacity: "2.25 حصان",
  mode: "بارد / ساخن",
  img: "images/splus-4.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},
{
  id: "splus_30_c",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 3 حصان (بارد)",
  capacity: "3 حصان",
  mode: "بارد",
  img: "images/splus-5.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},
{
  id: "splus_30_h",
  section: "ac",
  line: "إس بلس",
  name: "تكييف إس بلس 3 حصان (بارد/ساخن)",
  capacity: "3 حصان",
  mode: "بارد / ساخن",
  img: "images/splus-6.jpg",
  features: [
    "Dual Inverter موفر للطاقة حتى 60%",
    "تبريد سريع",
    "ضمان الكمبروسر 10 سنوات",
    "Wi-Fi + LG ThinQ",
    "UV Nano"
  ]
},

/* ====================== آرت كول (Art Cool) ====================== */
{
  id: "art_15_h",
  section: "ac",
  line: "آرت كول",
  name: "تكييف آرت كول 1.5 حصان (بارد/ساخن)",
  capacity: "1.5 حصان",
  mode: "بارد / ساخن",
  img: "images/art-1.jpg",
  features: [
    "تصميم مميز (Art Cool)",
    "Dual Inverter",
    "Wi-Fi + LG ThinQ",
    "UV Nano",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "art_225_h",
  section: "ac",
  line: "آرت كول",
  name: "تكييف آرت كول 2.25 حصان (بارد/ساخن)",
  capacity: "2.25 حصان",
  mode: "بارد / ساخن",
  img: "images/art-2.jpg",
  features: [
    "تصميم مميز (Art Cool)",
    "Dual Inverter",
    "Wi-Fi + LG ThinQ",
    "UV Nano",
    "ضمان الكمبروسر 10 سنوات"
  ]
},
{
  id: "art_30_h",
  section: "ac",
  line: "آرت كول",
  name: "تكييف آرت كول 3 حصان (بارد/ساخن)",
  capacity: "3 حصان",
  mode: "بارد / ساخن",
  img: "images/art-3.jpg",
  features: [
    "تصميم مميز (Art Cool)",
    "Dual Inverter",
    "Wi-Fi + LG ThinQ",
    "UV Nano",
    "ضمان الكمبروسر 10 سنوات"
  ]
},

/* ====================== أحجام كبيرة (Big AC) ====================== */
{
  id: "big_4_h",
  section: "ac",
  line: "أحجام كبيرة",
  name: "تكييف 4 حصان (بارد/ساخن)",
  capacity: "4 حصان",
  mode: "بارد / ساخن",
  img: "images/big-4hp.jpg",
  features: [
    "Dual Inverter",
    "تبريد سريع",
    "LG ThinQ (تطبيق)"
  ]
},
{
  id: "big_5_h",
  section: "ac",
  line: "أحجام كبيرة",
  name: "تكييف 5 حصان (بارد/ساخن)",
  capacity: "5 حصان",
  mode: "بارد / ساخن",
  img: "images/big-5hp.jpg",
  features: [
    "Dual Inverter",
    "تبريد سريع",
    "LG ThinQ (تطبيق)"
  ]
},

/* ====================== غسالات / مجففات (Washers & Dryers) ====================== */
/* ⭐ الصور كلها داخل images/ باسم الموديل (MODEL.jpg) */

/* ===== WashTower ===== */
{
  id: "wt_FWT1310BGP",
  section: "washer",
  line: "WashTower",
  name: "LG WashTower FWT1310BGP 13/10 كجم",
  model: "FWT1310BGP",
  img: "images/FWT1310BGP.jpg",
  features: [
    "التكنولوجيا الأساسية: —",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "60", d: "66", h: "166" }
},
{
  id: "wt_FWT2116BS",
  section: "washer",
  line: "WashTower",
  name: "LG WashTower FWT2116BS 21/16 كجم (أسود)",
  model: "FWT2116BS",
  img: "images/FWT2116BS.jpg",
  features: [
    "التكنولوجيا الأساسية: —",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "70", d: "77", h: "186" }
},
{
  id: "wt_FWT2116SS",
  section: "washer",
  line: "WashTower",
  name: "LG WashTower FWT2116SS 21/16 كجم (فضي)",
  model: "FWT2116SS",
  img: "images/FWT2116SS.jpg",
  features: [
    "التكنولوجيا الأساسية: —",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "70", d: "77", h: "186" }
},

/* ===== Dryers ===== */
{
  id: "dry_RH80T2SP7RM",
  section: "washer",
  line: "Dryers",
  name: "مجفف Heat Pump RH80T2SP7RM سعة 8 كجم",
  model: "RH80T2SP7RM",
  img: "images/RH80T2SP7RM.jpg",
  features: [
    "التكنولوجيا الأساسية: Heat Pump",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "dry_RH10V9JV2W",
  section: "washer",
  line: "Dryers",
  name: "مجفف 10.1 كجم RH10V9JV2W (أسود)",
  model: "RH10V9JV2W",
  img: "images/RH10V9JV2W.jpg",
  features: [
    "التكنولوجيا الأساسية: Dual Inverter Heat Pump",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "60", d: "66", h: "85" }
},
{
  id: "dry_RH10V9PV2W",
  section: "washer",
  line: "Dryers",
  name: "مجفف 10.1 كجم RH10V9PV2W (فضي)",
  model: "RH10V9PV2W",
  img: "images/RH10V9PV2W.jpg",
  features: [
    "التكنولوجيا الأساسية: Dual Inverter Heat Pump",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "60", d: "66", h: "85" }
},

/* ===== Top Load ===== */
{
  id: "tl_T23H9EFHST",
  section: "washer",
  line: "Top Load",
  name: "T23H9EFHST غسالة تحميل علوي 23 كجم (AI DD + TurboWash)",
  model: "T23H9EFHST",
  img: "images/T23H9EFHST.jpg",
  features: [
    "التكنولوجيا الأساسية: AI DD + TurboWash",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "70", d: "73", h: "107" }
},
{
  id: "tl_T23X5EHHSTX",
  section: "washer",
  line: "Top Load",
  name: "T23X5EHHSTX غسالة تحميل علوي 23 كجم (AI DD + ThinQ)",
  model: "T23X5EHHSTX",
  img: "images/T23X5EHHSTX.jpg",
  features: [
    "التكنولوجيا الأساسية: AI DD + ThinQ",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "70", d: "73", h: "107" }
},
{
  id: "tl_T1164NEHGB",
  section: "washer",
  line: "Top Load",
  name: "T1164NEHGB غسالة تحميل علوي 11 كجم (محول ذكي)",
  model: "T1164NEHGB",
  img: "images/T1164NEHGB.jpg",
  features: [
    "التكنولوجيا الأساسية: Smart Inverter",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "59", d: "60", h: "95" }
},
{
  id: "tl_T1388NEHGB",
  section: "washer",
  line: "Top Load",
  name: "T1388NEHGB غسالة تحميل علوي 13 كجم (TurboDrum + LoDecibel)",
  model: "T1388NEHGB",
  img: "images/T1388NEHGB.jpg",
  features: [
    "التكنولوجيا الأساسية: TurboDrum + LoDecibel",
    "برامج ThinQ (الأبلكيشن): —",
    "برامج على البوردة: —"
  ],
  dims: { w: "60", d: "61", h: "96" }
},

/* ===== Front Load ===== */
{
  id: "fl_F0Z8DRP24",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي F0Z8DRP24",
  model: "F0Z8DRP24",
  img: "images/F0Z8DRP24.jpg",
  features: ["التكنولوجيا الأساسية: AIDD", "برامج ThinQ:37", "برامج على البوردة: 5"],
  dims: { w: "70", d: "77", h: "99" }
},
{
  id: "fl_F0Z8DYP24",
  section: "washer",
  line: "Front Load",
  name: "F0Z8DYP24 غسالة تحميل أمامي",
  model: "F0Z8DYP24",
  img: "images/F0Z8DYP24.jpg",
  features: ["التكنولوجيا الأساسية: 37", "بخار ThinQ: AIDD", "برامج على البوردة: 5"],
  dims: { w: "70", d: "77", h: "99" }
},
{
  id: "fl_F0Z6DRP24",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي F0Z6DRP24",
  model: "F0Z6DRP24",
  img: "images/F0Z6DRP24.jpg",
  features: ["التكنولوجيا الأساسية: AIDD", "بخار ThinQ: 37", "برامج على البوردة: 5"],
  dims: { w: "65", d: "65", h: "95" }
},
{
  id: "fl_F0Z6DYP24",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي F0Z6DYP24",
  model: "F0Z6DYP24",
  img: "images/F0Z6DYP24.jpg",
  features: ["التكنولوجيا الأساسية:AIDD", "بخار ThinQ: 37", "برامج على البوردة: 5"],
  dims: { w: "65", d: "65", h: "95" }
},

/* المجموعة اللي كلها 60/60/85 */
{
  id: "fl_F4Y2VYGYP",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2VYGYP",
  img: "images/F4Y2VYGYP.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2VYGYZ",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2VYGYZ",
  img: "images/F4Y2VYGYZ.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2VYGYX",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2VYGYX",
  img: "images/F4Y2VYGYX.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2TYGYZ",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2TYGYZ",
  img: "images/F4Y2TYGYZ.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2TYGYP",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2TYGYP",
  img: "images/F4Y2TYGYP.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2TYG6X",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2TYG6X",
  img: "images/F4Y2TYG6X.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2QYG6P",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2QYG6P",
  img: "images/F4Y2QYG6P.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4Y2QYG6X",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4Y2QYG6X",
  img: "images/F4Y2QYG6X.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},

/* ✅ الموديلين اللي طلبتهم */
{
  id: "fl_F4X5EYG24",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4X5EYG24",
  img: "images/F4X5EYG24.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "fl_F4X5RYG24",
  section: "washer",
  line: "Front Load",
  name: "غسالة تحميل أمامي",
  model: "F4X5RYG24",
  img: "images/F4X5RYG24.jpg",
  features: ["التكنولوجيا الأساسية: —", "برامج ThinQ: —", "برامج على البوردة: —"],
  dims: { w: "60", d: "60", h: "85" }
},
/* ====================== FRIDGES ====================== */

{
  id:"fr1",
  section:"fridge",
  name:"GRTB622PFBQ",
  img:"images/fridges/GRTB622PFBQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"831",d:"741",h:"1860"}
},
{
  id:"fr2",
  section:"fridge",
  name:"GN-F602PQBQ",
  img:"images/fridges/GN-F602PQBQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr3",
  section:"fridge",
  name:"GN-F592PQBQ",
  img:"images/fridges/GN-F592PQBQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr4",
  section:"fridge",
  name:"GN-B592PFBQ",
  img:"images/fridges/GN-B592PFBQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr5",
  section:"fridge",
  name:"GN-B592PFFQ",
  img:"images/fridges/GN-B592PFFQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr6",
  section:"fridge",
  name:"GN-B602PFBQ",
  img:"images/fridges/GN-B602PFBQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr7",
  section:"fridge",
  name:"GN-B602PFFQ",
  img:"images/fridges/GN-B602PFFQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr8",
  section:"fridge",
  name:"GL-B602PFWQ",
  img:"images/fridges/GL-B602PFWQ.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"725",h:"1845"}
},
{
  id:"fr9",
  section:"fridge",
  name:"GTF522PVAN",
  img:"images/fridges/GTF522PVAN.jpg",
  features:["Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"760",d:"750",h:"1860"}
},
{
  id:"fr10",
  section:"fridge",
  name:"GTF522PSAN",
  img:"images/fridges/GTF522PSAN.jpg",
  features:["Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"760",d:"750",h:"1860"}
},
{
  id:"fr11",
  section:"fridge",
  name:"GTF452SVAN",
  img:"images/fridges/GTF452SVAN.jpg",
  features:["Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"720",h:"1870"}
},
{
  id:"fr12",
  section:"fridge",
  name:"GTF452SSAN",
  img:"images/fridges/GTF452SSAN.jpg",
  features:["Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"700",d:"720",h:"1870"}
},
{
  id:"fr13",
  section:"fridge",
  name:"GC-X257CQEW",
  img:"images/fridges/GC-X257CQEW.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"913",d:"735",h:"1790"}
},
{
  id:"fr14",
  section:"fridge",
  name:"GC-J257KLKW",
  img:"images/fridges/GC-J257KLKW.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"913",d:"735",h:"1790"}
},
{
  id:"fr15",
  section:"fridge",
  name:"GC-B257KLJW",
  img:"images/fridges/GC-B257KLJW.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"913",d:"735",h:"1790"}
},
{
  id:"fr16",
  section:"fridge",
  name:"GC-X22FFQAB",
  img:"images/fridges/GC-X22FFQAB.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"835",d:"730",h:"1787"}
},
{
  id:"fr17",
  section:"fridge",
  name:"GW-B489FS6W",
  img:"images/fridges/GW-B489FS6W.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"595",d:"682",h:"1860"}
},
{
  id:"fr18",
  section:"fridge",
  name:"GW-B489FSGW",
  img:"images/fridges/GW-B489FSGW.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"595",d:"682",h:"1860"}
},
{
  id:"fr19",
  section:"fridge",
  name:"GW-B489FM6W",
  img:"images/fridges/GW-B489FM6W.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"595",d:"682",h:"1860"}
},
{
  id:"fr20",
  section:"fridge",
  name:"GW-B489FMGW",
  img:"images/fridges/GW-B489FMGW.jpg",
  features:["Smart Inverter Compressor","Multi Air Flow","No Frost"],
  dims:{w:"595",d:"682",h:"1860"}
},
/* ====================== DISHWASHERS ====================== */

{
  id: "dw_DFC287HMS",
  section: "washer",
  line: "Dishwasher",
  name: "غسالة أطباق DFC287HMS",
  model: "DFC287HMS",
  img: "images/DFC287HMS.jpg",
  features: [
    "TrueSteam",
    "QuadWash",
    "Auto Open Dry"
  ],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "dw_DFC287HVS",
  section: "washer",
  line: "Dishwasher",
  name: "غسالة أطباق DFC287HVS",
  model: "DFC287HVS",
  img: "images/DFC287HVS.jpg",
  features: [
    "QuadWash",
    "TrueSteam",
    "Auto Open Dry"
  ],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "dw_DFC435FP",
  section: "washer",
  line: "Dishwasher",
  name: "غسالة أطباق DFC435FP",
  model: "DFC435FP",
  img: "images/DFC435FP.jpg",
  features: [
    "TrueSteam",
    "QuadWash",
    "EasyRack"
  ],
  dims: { w: "60", d: "60", h: "85" }
},
{
  id: "dw_DFC513FVE",
  section: "washer",
  line: "Dishwasher",
  name: "غسالة أطباق DFC513FVE",
  model: "DFC513FVE",
  img: "images/DFC513FVE.jpg",
  features: [
    "QuadWash",
    "EasyRack Plus",
    "Auto Open Dry"
  ],
  dims: { w: "60", d: "60", h: "85" }
},

/* ====================== MICROWAVE ====================== */

{
  id: "mw_MH8265DIC",
  section: "builtin",
  line: "ميكروويف",
  name: "ميكروويف MH8265DIC (إنفرتر + شواية)",
  model: "MH8265DIC",
  img: "images/MH8265DIC.jpg",
  features: [
    "تقنية إنفرتر",
    "شواية",
    "مادة داخلية EasyClean",
    "ضمان 10 سنوات على وحدة التسخين والميجاترون"
  ],
  dims: { w: "54", d: "46", h: "31" }
},
{
  id: "mw_MH8265CIS",
  section: "builtin",
  line: "ميكروويف",
  name: "ميكروويف MH8265CIS (إنفرتر + شواية)",
  model: "MH8265CIS",
  img: "images/MH8265CIS.jpg",
  features: [
    "تقنية إنفرتر",
    "شواية",
    "مادة داخلية EasyClean",
    "ضمان 10 سنوات على وحدة التسخين والميجاترون"
  ],
  dims: { w: "54", d: "46", h: "31" }
},
{
  id: "mw_MS4295CIS",
  section: "builtin",
  line: "ميكروويف",
  name: "ميكروويف MS4295CIS (إنفرتر)",
  model: "MS4295CIS",
  img: "images/MS4295CIS.jpg",
  features: [
    "تقنية إنفرتر",
    "بدون شواية",
    "مادة داخلية EasyClean",
    "ضمان 10 سنوات على وحدة التسخين والميجاترون"
  ],
  dims: { w: "54", d: "46", h: "31" }
},
{
  id: "mw_MS3032JAS",
  section: "builtin",
  line: "ميكروويف",
  name: "ميكروويف MS3032JAS (30 لتر)",
  model: "MS3032JAS",
  img: "images/MS3032JAS.jpg",
  features: [
    "30 لتر",
    "بدون إنفرتر",
    "بدون شواية",
    "ضمان سنة واحدة شامل"
  ],
  dims: { w: "50", d: "40", h: "30" }
},

/* ====================== BUILT-IN ====================== */

/* ===== Ovens ===== */

{
  id: "bi_WSED7667M",
  section: "builtin",
  line: "Built-in Oven",
  name: "فرن WSED7667M (76 لتر)",
  model: "WSED7667M",
  img: "images/WSED7667M.jpg",
  features: [
    "سعة 76 لتر",
    "كفاءة طاقة A+",
    "باب InstaView",
    "Air Fry + طهي بالبخار Sous-vide",
    "صناعة كورية"
  ]
},
{
  id: "bi_WSED7613S",
  section: "builtin",
  line: "Built-in Oven",
  name: "فرن WSED7613S (76 لتر)",
  model: "WSED7613S",
  img: "images/WSED7613S.jpg",
  features: [
    "سعة 76 لتر",
    "كفاءة طاقة A+",
    "Air Fry + Sous-vide",
    "باب InstaView",
    "صناعة كورية"
  ]
},
{
  id: "bi_WSEDZM7225S2",
  section: "builtin",
  line: "Built-in Oven",
  name: "فرن WSEDZM7225S2 (72 لتر)",
  model: "WSEDZM7225S2",
  img: "images/WSEDZM7225S2.jpg",
  features: [
    "سعة 72 لتر",
    "لون أسود مع ستانلس",
    "باب زجاج ثلاثي الطبقات",
    "إضاءة LED مع مقبض",
    "صناعة صينية"
  ]
},

/* ===== Hobs ===== */

{
  id: "bi_CBEZ2414B",
  section: "builtin",
  line: "Built-in Hob",
  name: "مسطح CBEZ2414B",
  model: "CBEZ2414B",
  img: "images/CBEZ2414B.jpg",
  features: [
    "تحكم باللمس مستقل",
    "زجاج أسود Schott",
    "مؤشر حرارة السطح",
    "مؤقت + قفل أطفال"
  ]
},
{
  id: "bi_CG53626S",
  section: "builtin",
  line: "Built-in Gas Hob",
  name: "مسطح غاز CG53626S (5 شعلة)",
  model: "CG53626S",
  img: "images/CG53626S.jpg",
  features: [
    "5 شعلة",
    "حديد زهر",
    "اشتعال تلقائي",
    "كاشف إطفاء الغاز",
    "صناعة صينية"
  ]
},
{
  id: "bi_HU641BBG",
  section: "builtin",
  line: "Built-in Gas Hob",
  name: "مسطح غاز HU641BBG (4 شعلة)",
  model: "HU641BBG",
  img: "images/HU641BBG.jpg",
  features: [
    "4 شعلة",
    "حديد زهر",
    "اشتعال تلقائي",
    "كاشف إطفاء الغاز",
    "صناعة صينية"
  ]
},

/* ===== Hoods ===== */

{
  id: "bi_HC7Z3625S",
  section: "builtin",
  line: "Built-in Hood",
  name: "شفاط HC7Z3625S (90 سم)",
  model: "HC7Z3625S",
  img: "images/HC7Z3625S.jpg",
  features: [
    "عرض 90 سم",
    "تحكم باللمس",
    "إضاءة LED بيضاء",
    "قوة شفط 830 متر مكعب/ساعة",
    "4 مستويات طاقة",
    "صناعة صينية"
  ]
},
{
  id: "bi_HC7Z2425S",
  section: "builtin",
  line: "Built-in Hood",
  name: "شفاط HC7Z2425S (60 سم)",
  model: "HC7Z2425S",
  img: "images/HC7Z2425S.jpg",
  features: [
    "عرض 60 سم",
    "تحكم باللمس",
    "إضاءة LED بيضاء",
    "قوة شفط 830 متر مكعب/ساعة",
    "4 مستويات طاقة",
    "صناعة صينية"
  ]
}

];
