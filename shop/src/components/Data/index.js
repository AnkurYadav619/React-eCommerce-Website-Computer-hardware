const products = [
  {
    id: 1,
    name: "Radeon Pro WX4100",
    description: "AMD Graphics Card",
    price: 398.55,
    group: "newProducts",
    type: "graphic card",
    img: "https://i.ibb.co/8x930KV/AMD1.jpg",
    inCart: false,
    category: "graphics"
  },
  {
    id: 2,
    name: "AORUS RX 580",
    description: "AMD Graphics Card",
    price: 424.11,
    group: "specials",
    type: "graphic card",
    img: "https://i.ibb.co/2hBm61X/AMD2.png",
    inCart: false,
    category: "graphics"
  },
  {
    id: 3,
    name: "Gigabyte GV-N1050G1",
    description: "Gigabyte Graphics",
    price: 120.92,
    group: "newProducts ",
    type: "graphic card",
    img: "https://i.ibb.co/tM039LT/gb.jpg",
    inCart: false,
    category: "graphics"
  },
  {
    id: 4,
    name: "MSI GeForce GTX1080",
    description: "MSI Graphics Card",
    price: 1204.12,
    group: "specials",
    type: "graphic card",
    img: "https://i.ibb.co/7yHf7xx/msi.jpg",
    inCart: false,
    category: "graphics"
  },
  {
    id: 5,
    name: "Zebronics 15.6in LED Monitor",
    description: "Full HD Monitors by Zebronics",
    price: 99.98,
    group: "newProducts",
    type: "monitor",
    img: "https://i.ibb.co/HP35VXQ/monitor2.jpg",
    inCart: false,
    category: "monitor"
  },
 {
    id: 6,
    name: "BENQ 23.8in LED Monitor",
    description: "Thin Bezel Monitor by BENQ",
    price: 164.28,
    group: "newProducts",
    type: "monitor",
    img: "https://i.ibb.co/0XBCKWJ/benq.jpg",
    inCart: false,
    category: "monitor"
  },
  {
    id: 7,
    name: "LG 22in LCD Monitor",
    description: "Full HD Monitor by LG",
    price: 168.57,
    group: "specials",
    type: "monitor",
    img: "https://i.ibb.co/ss3MC4w/lg.jpg",
    inCart: false,
    category: "monitor"
  },
  {
    id: 8,
    name: "H320 32in 16:9 LED Widescreen Monitor",
    description: "Monitor by Viotek",
    price: 189.99,
    group: "newProducts",
    type: "monitor",
    img: "https://i.ibb.co/s2F41TS/viotek.jpg",
    inCart: false,
    category: "monitor"
  },
  {
    id: 9,
    name: "WDS120G0A 120GB 2.5in SSD",
    description: "Solid State Drive by Western Digital",
    price: 76,
    group: "specials",
    type: "storage",
    img: "https://i.ibb.co/dP3Lx2N/wd.jpg",
    inCart: false,
    category: "storage"
  },
  {
    id: 10,
    name: "SONY HD-B1 1TB Hard Disk",
    description: "External Hard Disk by Sony",
    price: 95.71,
    group: "newProducts",
    type: "storage",
    img: "https://i.ibb.co/NVLZ9Ck/sony.jpg",
    inCart: false,
    category: "storage"
  },
 {
    id: 11,
    name: "Toshiba 2TB Internal HDD",
    description: "Internal HDD by TOSHIBA",
    price: 70.00,
    group: "specials",
    type: "storage",
    img: "https://i.ibb.co/Cmt20z5/HDD.jpg",
    inCart: false,
    category: "storage"
  },
   {
    id: 12,
    name: "Seagate 1TB USB 3.0 Hard Disk",
    description: "External Hard Disk by Seagate",
    price: 114.27,
    group: "specials",
    type: "storage",
    img: "https://i.ibb.co/jDkjC4j/seagate.jpg",
    inCart: false,
    category: "storage"
  },
{
    id: 13,
    name: "HP USB X500 wired Optical Mouse",
    description: "Mouse By HP",
    price: 10.99,
    group: "newProducts",
    type: "mouse",
    img: "https://i.ibb.co/KxvWyrp/mouse.jpg",
    inCart: false,
    category: "accessories"
  },
 {
    id: 14,
    name: "Logitech M331 Wireless Mouse",
    description: "Mouse by Logitech",
    price: 21.35,
    group: "newPorducts",
    type: "mouse",
    img: "https://i.ibb.co/9s3cD1F/mouse2.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 15,
    name: "Jisen 3200dpi2.4GHz Wireless Mouse",
    description: "Gaming Mouse By Jisen",
    price: 6.84,
    group: "specials",
    type: "mouse",
    img: "https://i.ibb.co/58YCfb6/mouse3.jpg",
    inCart: false,
    category: "accessories"
  },
{
    id: 16,
    name: "K10 Wired Keyboard",
    description: "KeyBoard By Artis",
    price: 7.85,
    group: "newPorducts",
    type: "KeyBoard",
    img: "https://i.ibb.co/GfZRtSP/artis.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 17,
    name: "RedGear Blaze 3",
    description: "Gaming KeyBoard by RedGear",
    price: 18.55,
    group: "specials",
    type: "KeyBoard",
    img: "https://images-na.ssl-images-amazon.com/images/I/61nqraP6wBL._SL1000_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Amkette Xcite Pro USB",
    description: "KeyBoard By Amkette",
    price: 7.98,
    group: "specials",
    type: "KeyBoard",
    img: "https://i.ibb.co/G3qhShj/amkette.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 19,
    name: "PS 600VA Line Interactive UPS",
    description: "UPS by Artis",
    price: 35.99,
    group: "newPorducts",
    type: "UPS",
    img: "https://i.ibb.co/hsgkfWC/ups2.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "APC BX600C-IN 600VA, 230V Back UPS",
    description: "UPS By APC",
    price: 48.92,
    group: "newPorducts",
    type: "UPS",
    img: "https://i.ibb.co/xMjTKWw/ups.jpg",
    inCart: false,
    category: "accessories"
  },
];

export default products;
