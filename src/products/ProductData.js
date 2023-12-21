
import lamp1 from "../images/lamps/table-lamp.jpg";
import lamp2 from "../images/lamps/table-lamp2.jpg";
import lamp3 from "../images/lamps/table-lamp3.jpg";
import nightLamp1 from "../images/lamps/nightstand-lamp.jpg";
import nightLamp2 from "../images/lamps/nightstand-lamp2.jpg";
import nightLamp3 from "../images/lamps/nightstand-lamp3.jpg";
import toaster1 from "../images/kitchen/toaster.jpg";
import toaster2 from "../images/kitchen/toaster2.jpg";
import toaster3 from "../images/kitchen/toaster3.jpg";
import cuttingBoard1 from "../images/kitchen/cutting-board.jpg";
import cuttingBoard2 from "../images/kitchen/cutting-board2.jpg";
import cuttingBoard3 from "../images/kitchen/cutting-board3.jpg";
import drawer1 from "../images/kitchen/kitchen-drawer.jpg";
import drawer2 from "../images/kitchen/kitchen-drawer2.jpg";
import drawer3 from "../images/kitchen/kitchen-drawer3.jpg";
import beanbag1 from "../images/chairs/beanbag.jpg";
import beanbag2 from "../images/chairs/beanbag2.jpg";
import beanbag3 from "../images/chairs/beanbag3.jpg";
import deskChair1 from "../images/chairs/desk-chair.jpg";
import deskChair2 from "../images/chairs/desk-chair2.jpg";
import deskChair3 from "../images/chairs/desk-chair3.jpg";
import cottonChair1 from "../images/chairs/cotton-chair.jpg";
import cottonChair2 from "../images/chairs/cotton-chair2.jpg";
import cottonChair3 from "../images/chairs/cotton-chair3.jpg";
import table1 from "../images/tables/furniture-table.jpg";
import table2 from "../images/tables/furniture-table2.jpg";
import table3 from "../images/tables/furniture-table3.jpg";
import coffeeTable1 from "../images/tables/coffee-table.jpg";
import coffeeTable2 from "../images/tables/coffee-table2.jpg";
import coffeeTable3 from "../images/tables/entry-table.jpg";
import entryTable1 from "../images/tables/entry-table.jpg";
import entryTable2 from "../images/tables/entry-table2.jpg";
import entryTable3 from "../images/tables/entry-table3.jpg";
import charger1 from "../images/electronics/iphone-charger.jpg";
import charger2 from "../images/electronics/iphone-charger2.jpg";
import charger3 from "../images/electronics/iphone-charger3.jpg";
import mouse1 from "../images/electronics/wireless-mouse.jpg";
import mouse2 from "../images/electronics/wireless-mouse2.jpg";
import mouse3 from "../images/electronics/wireless-mouse3.jpg";
import keyboard1 from "../images/electronics/keyboard.jpg";
import keyboard2 from "../images/electronics/keyboard2.jpg";
import keyboard3 from "../images/electronics/keyboard3.jpg";
import shelf1 from "../images/shelves/wooden-shelf.jpg";
import shelf2 from "../images/shelves/wooden-shelf2.jpg";
import shelf3 from "../images/shelves/wooden-shelf3.jpg";
import floatingshelf1 from "../images/shelves/floating-shelf.jpg";
import floatingshelf2 from "../images/shelves/floating-shelf2.jpg";
import floatingshelf3 from "../images/shelves/floating-shelf3.jpg";

const ProductData = [
  {
    id: 1,
    type:"Lamps",
    name:"Cordless Table Lamp", 
    price:49.99,
    weight:"10 grams",
    texture:"Metal",
    size:"4.53 x 14.2",
    description:"KDG 2 Pack Cordless Table Lamp,Portable LED Desk Lamp, 5000mAh Battery Operated, 3 Color Stepless Dimming Up, for Restaurant/Bedroom/Bars/Outdoor Party/Camping/Coffee Shop Night Light(Black)",
    img01: lamp1,
    img02: lamp2,
    img03: lamp3,
  },
  {
    id: 2,
    type:"Kitchen",
    name:"BELLA Stainless Steel Toaster",
    price:21.45,
    weight:"5 grams",
    texture:"stainless steel",
    size:"6.14 x 6.53",
    description:"2 Slice Toaster with Extra Wide Slots & Removable Crumb Tray - 6 Browning Options, Auto Shut Off & Reheat Function - Toast Bread, Bagel & Waffle",
    img01: toaster1,
    img02: toaster2,
    img03: toaster3,
  },
  {
    id: 3,
    type:"Electronics",
    name:"i·Phone Charger",
    price:9.49,
    weight:"2 pounds",
    texture:"Outer: Plastic, Inner: Copper",
    size:"6ft",
    description:"3-Pack [MFi Certified] 20W PD USB C Fast Wall Charger with 6ft Charging Cord for i·Phone 14/14 Pro/13/13 Pro/12/12 Pro/11/Xs/XR/SE 2020, and More",
    img01: charger1,
    img02: charger2,
    img03: charger3,
  },
  {
    id: 4,
    type:"Chairs",
    name:"Small Bean Bag Chair",
    price:"58.99",
    weight:" 6 pounds",
    texture:"80% polystyrene, 20% cotton",
    size:"30 x 17",
    description:"for Kids and Teens, Foam-Filled Beanbag Chair with Machine Washable Cover, Red",
    img01: beanbag1,
    img02: beanbag2,
    img03: beanbag3,
  },
  {
    id: 5,
    type:"Tables",
    name:"YATINEY Nightstands Set of 2",
    price:99.99,
    weight:"5kg",
    texture:"wood & metal",
    size:"15.4 x 23.4",
    description:"End Table with Charging Station and USB Ports, Bedside Tables with 2 Drawers and Storage Shelves, Industrial Side Tables for Small Spaces, Living Room",
    img01: table1,
    img02: table2,
    img03: table3,
  },
  {
    id: 6,
    type:"Shelves",
    name:"Furologee 5-Tier Bookshelf",
    price:"88.99",
    weight:"10kg",
    texture:"Metal & Wood",
    size:"23.62 x 60.55",
    description:"Tall Bookcase with 2 Storage Drawers, Industrial Display Standing Shelf Units, Wood and Metal Storage Shelf for Living Room, Bedroom, Home Office, Rustic Brown",
    img01: shelf1,
    img02: shelf2,
    img03: shelf3,
  },
  {
    id: 7,
    type:"Lamps",
    name:"Table Lamp Set of 2",
    price:"57.99",
    weight:"5 pounds",
    texture:"Metal",
    size:"6.69 x 16",
    description:"Dimmable Nightstand Lamp with 2 USB Ports & AC Outlet, Fits for Bedroom Living Room, Matte Black Finish, Frosted Glass Shade, LED Bulb Included",
    img01: nightLamp1,
    img02: nightLamp2,
    img03: nightLamp3,
  },
  {
    id: 8,
    type:"Electronics",
    name:"TECKNET Wireless Mouse",
    price:"11.00",
    weight:"2 pounds",
    texture:"plastic",
    size:"4.09 x 1.49",
    description:".4G Ergonomic Optical Mouse, Computer Mouse for Laptop, PC, Computer, Chromebook, Notebook, 6 Buttons, 24 Months Battery Life, 2600 DPI, 5 Adjustment Levels",
    img01: mouse1,
    img02: mouse2,
    img03: mouse3,
  },
  {
    id: 9,
    type:"Kitchen",
    name:"Cutting Board",
    price:"33.99",
    weight:"3 pounds",
    texture:"Wood",
    size:"multiple sizes",
    description:"ROYAL CRAFT WOOD - Cutting Boards for Kitchen Meal Prep & Serving - Bamboo Wood Serving Board Set with Deep Juice Groove Side Handles - Charcuterie & Chopping Butcher Block",
    img01: cuttingBoard1,
    img02: cuttingBoard2,
    img03: cuttingBoard3,
  },
  {
    id: 10,
    type:"Kitchen",
    name:"Kitchen Drawer Organizer",
    price:"29.95",
    weight:"2 pounds",
    texture:"Bamboo",
    size:"different sizes",
    description:"Kitchen Drawer Organizer with Reinforced Base & Dividers - Expandable Silverware Drawer Organizer - Bamboo Utensil Holder for Flatware, Cutlery Set - Kitchen Organization and Storage Silverware Set",
    img01: drawer1,
    img02: drawer2,
    img03: drawer3,
  },
  {
    id: 11,
    type:"Shelves",
    name:"QEEIG Floating Shelves",
    price:"29.99",
    weight:"2 pounds",
    texture:"Wood",
    size:"6.7 x 15.7",
    description:"for Wall Bathroom Shelf Bedroom Kitchen Farmhouse Small Book Shelf 16 inch Set of 3, Rustic Brown (015-BN3)",
    img01: floatingshelf1,
    img02: floatingshelf2,
    img03: floatingshelf3,
  },
  {
    id: 12,
    type:"Tables",
    name:"Entry Table",
    price:"59.99",
    weight:"3kg",
    texture:"Wood & Metal",
    size:"11.8 x 31.5",
    description:"SAYGOER Console Table 2 Tier Narrow Entryway Table with Storage Shelves Half Moon Sofa Couch Table Industrial Small Entry Way Tables for Living Bedroom Hallway Office Easy Assembly, Gray Black",
    img01: entryTable1,
    img02: entryTable2,
    img03: entryTable3,
  },
  {
    id: 13,
    type:"Chairs",
    name:"Ergonomic Office Chair",
    price:"329.99",
    weight:"10kg",
    texture:"mesh",
    size:"23.6 x 42",
    description:"Adjustable Desk Chair with Lumbar Support and Rollerblade Wheels - High Back Chairs with Breathable Mesh - Thick Seat Cushion, Head, and Arm Rests - Reclines",
    img01: deskChair1,
    img02: deskChair2,
    img03: deskChair3,
  },
  {
    id: 14,
    type:"Tables",
    name:"Coffee Table Set",
    price:"65.99",
    weight:" 5kg",
    texture:"Wood & Metal",
    size:"different sizes",
    description:"BETTAHOME 2 Piece Detachable Coffee Table Set, Industrial Nesting Rectangular and Round Side Table with Storage Shelf, Ideal for Living Room, Small Spaces, Rustic Brown and Black BT003",
    img01: coffeeTable1,
    img02: coffeeTable2,
    img03: coffeeTable3,
  },
  {
    id: 15,
    type:"Electronics",
    name:"Wireless Keyboard",
    price:"22.99",
    weight:"2 pounds",
    texture:" plastic",
    size:"14.48 x 4.72",
    description:"Bluetooth Keyboard Rechargeable, Bluetooth 5.0 + 2.4G Dual Mode Keyboard with Numeric Pad, Slim Full Size Keyboard for Macbook, Android, Windows, Laptop, Computer, Tablet(Black)",
    img01: keyboard1,
    img02: keyboard2,
    img03: keyboard3,
  },
  {
    id: 16,
    type:"Chairs",
    name:"Chair & Footrest Stool set",
    price:"189.99",
    weight:"15kg",
    texture:"cotton",
    size:"31.5 x 37.4",
    description:"HollyHOME Modern Fabric Lazy Chair and Folding Footrest Stool Set, Accent Contemporary Lounge Chair and Portable Ottoman, Steel Frame Leisure Sofa Chair and Metal Cotton Anti-Slip Footstool, Dark Grey",
    img01: cottonChair1,
    img02: cottonChair2,
    img03: cottonChair3,
  },
];

export default ProductData;