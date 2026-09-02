/* Yuvaraj Agencies — Consolidated JavaScript bundle
   Original feature/data modules combined in dependency order.
*/

/* ===== config.js ===== */
/* ===== config.js ===== */
const BUSINESS_CONFIG = {
  name: "YUVARAJ AGENCIES",
  tagline: "Sivakasi • Quality • Value",
  phone: "+91 63743 29677",
  email: "rengarajrengaraj0179@gmail.com",
  address: "Meenapatti, Sivakasi, Tamil Nadu",
  mapQuery: "Yuvaraj Agencies Meenapatti Sivakasi",
  logo: "logo.jpeg",
  currency: "₹",
  pdfFilePrefix: "Yuvaraj-Agencies-Enquiry",
  // WhatsApp: country code + number, no +, spaces or hyphens.
  whatsapp: "916374329677",
  upiId: "rengarajrengaraj0179-1@okaxis",
  payeeName: "Raja",
  paymentNote: "Yuvaraj Agencies Payment",
  // Bank transfer placeholders — replace these before publishing.
  bankName: "CANARA BANK",
  accountName: "Nagalakshmi",
  accountNumber: "110034245007",
  ifscCode: "CNRB0000921",
  bankBranch: "SIVAKASI"
};

// Final catalogue source: the supplied 2026 PDF. Keep the cart in sync with this list.
const CATALOGUE_PDF = "renga 2026.pdf";
function getCartPayableTotal() {
  return cart.reduce((total, item) => {
    const p = products.find(x => x.id === Number(item.id));
    if (!p || getStock(p) === "pending") return total;
    return total + getFinalPrice(p) * Math.max(0, Number(item.qty) || 0);
  }, 0);
}
function normalizeCartToCurrentProducts() {
  if (!Array.isArray(cart)) cart = [];
  const valid = new Set(products.map(p => p.id));
  const next = cart.filter(item => valid.has(Number(item.id)) && Number(item.qty) > 0)
    .map(item => ({id:Number(item.id), qty:Math.max(1,Number(item.qty)||1)}));
  if (JSON.stringify(next) !== JSON.stringify(cart)) { cart = next; saveCart(); }
}
function whatsappIcon(label="") {
  return `<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2a9.92 9.92 0 0 0-8.51 15.08L2 22l5.08-1.48A9.92 9.92 0 1 0 12.004 2m0 18.18a8.25 8.25 0 0 1-4.21-1.155l-.3-.178-3.015.878.884-2.94-.196-.302A8.24 8.24 0 1 1 12.004 20.18"/></svg>${label}`;
}

function applyBusinessConfig() {
  const c = BUSINESS_CONFIG;
  document.title = `${c.name} | Customer Catalogue`;
  const phone = document.getElementById("phoneDisplay");
  const email = document.getElementById("emailDisplay");
  const address = document.getElementById("addressDisplay");
  const brandName = document.getElementById("brandName");
  const heroName = document.getElementById("heroBusinessName");
  const payee = document.getElementById("payeeName");
  const upi = document.getElementById("upiId");
  if (phone) phone.textContent = c.phone;
  if (email) email.textContent = c.email;
  if (address) address.textContent = c.address;
  if (brandName) brandName.textContent = c.name;
  if (heroName) heroName.textContent = c.name;
  if (payee) payee.textContent = c.payeeName || c.name;
  if (upi) upi.textContent = c.upiId;
}

/* ===== products.js ===== */
const products = [
{
    "id": 1,
    "number": 1,
    "name": "2 3/4 Kuruvi",
    "category": "ONE SOUND",
    "price": 10,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 2,
    "number": 2,
    "name": "3½ Paper",
    "category": "ONE SOUND",
    "price": 20,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 3,
    "number": 3,
    "name": "4\" Gold",
    "category": "ONE SOUND",
    "price": 30,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 4,
    "number": 4,
    "name": "4\" Hulk",
    "category": "ONE SOUND",
    "price": 28,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 5,
    "number": 5,
    "name": "5\" Dady",
    "category": "ONE SOUND",
    "price": 45,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 6,
    "number": 6,
    "name": "6\" Bahubali",
    "category": "ONE SOUND",
    "price": 55,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 7,
    "number": 7,
    "name": "Red Bijili (50 Pes)",
    "category": "BIJILI",
    "price": 20,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 8,
    "number": 8,
    "name": "Red Bijili (100 Pes)",
    "category": "BIJILI",
    "price": 40,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 9,
    "number": 9,
    "name": "Flower Pots Big",
    "category": "FLOWER POTS",
    "price": 55,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 10,
    "number": 10,
    "name": "Flower Pots Ashoka",
    "category": "FLOWER POTS",
    "price": 130,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 11,
    "number": 11,
    "name": "Flower Pots Special",
    "category": "FLOWER POTS",
    "price": 85,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 12,
    "number": 12,
    "name": "Colour Koti",
    "category": "FLOWER POTS",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 13,
    "number": 13,
    "name": "Tri Colour Fountain",
    "category": "FLOWER POTS",
    "price": 250,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 14,
    "number": 14,
    "name": "Ground Chakkar Big",
    "category": "GROUND CHAKKAR",
    "price": 60,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 15,
    "number": 15,
    "name": "Ground Chakkar Special",
    "category": "GROUND CHAKKAR",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 16,
    "number": 16,
    "name": "Ground Chakkar Deluxe",
    "category": "GROUND CHAKKAR",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 17,
    "number": 17,
    "name": "Disco Wheel",
    "category": "GROUND CHAKKAR",
    "price": 75,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 18,
    "number": 18,
    "name": "Ninja chakkar",
    "category": "GROUND CHAKKAR",
    "price": 250,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 19,
    "number": 19,
    "name": "555 Bomb",
    "category": "BOMB",
    "price": 85,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 20,
    "number": 20,
    "name": "Classic Bomb",
    "category": "BOMB",
    "price": 100,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 21,
    "number": 21,
    "name": "King Of King",
    "category": "BOMB",
    "price": 350,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 22,
    "number": 22,
    "name": "Dynamite Bomb",
    "category": "BOMB",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 23,
    "number": 23,
    "name": "¼ Kg Special",
    "category": "BOMB",
    "price": 50,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 24,
    "number": 24,
    "name": "½ Kg Special",
    "category": "BOMB",
    "price": 100,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 25,
    "number": 25,
    "name": "1½ Twinkle's Star's",
    "category": "TWINKLE'S STAR'S",
    "price": 30,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 26,
    "number": 26,
    "name": "4\" Twinkle's Star's",
    "category": "TWINKLE'S STAR'S",
    "price": 70,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 27,
    "number": 27,
    "name": "Five Falls",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 90,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 28,
    "number": 28,
    "name": "7 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 110,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 29,
    "number": 29,
    "name": "1” Chota Fancy",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 60,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 30,
    "number": 30,
    "name": "2” Pipe (3 Pcs)",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 31,
    "number": 31,
    "name": "3.5” Pipe",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 350,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 32,
    "number": 32,
    "name": "4\" (2 Pcs)",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 700,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 33,
    "number": 33,
    "name": "12 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 180,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 34,
    "number": 34,
    "name": "25 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 250,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 35,
    "number": 35,
    "name": "30 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 400,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 36,
    "number": 36,
    "name": "5g Plus",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 220,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 37,
    "number": 37,
    "name": "60 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 800,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 38,
    "number": 38,
    "name": "120 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 1400,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 39,
    "number": 39,
    "name": "240 Shot",
    "category": "NIGHT MARE SKY SHOTS",
    "price": 2800,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 40,
    "number": 40,
    "name": "10 Cm Electric",
    "category": "SPARKLERS",
    "price": 20,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 41,
    "number": 41,
    "name": "10 Cm Colour",
    "category": "SPARKLERS",
    "price": 25,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 42,
    "number": 42,
    "name": "15 Cm Electric",
    "category": "SPARKLERS",
    "price": 30,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 43,
    "number": 43,
    "name": "15 Cm Colour",
    "category": "SPARKLERS",
    "price": 35,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 44,
    "number": 44,
    "name": "30 Cm Electric",
    "category": "SPARKLERS",
    "price": 45,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 45,
    "number": 45,
    "name": "30 Cm Colour",
    "category": "SPARKLERS",
    "price": 50,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 46,
    "number": 46,
    "name": "50 Cm Electric",
    "category": "SPARKLERS",
    "price": 140,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 47,
    "number": 47,
    "name": "Dancing Umbrella",
    "category": "SPARKLERS",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 48,
    "number": 48,
    "name": "Selfi Stick",
    "category": "KIDS CORNER’S",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 49,
    "number": 49,
    "name": "Colour Smoke",
    "category": "KIDS CORNER’S",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 50,
    "number": 50,
    "name": "Children Day Out",
    "category": "KIDS CORNER’S",
    "price": 250,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 51,
    "number": 51,
    "name": "Photo Flash",
    "category": "KIDS CORNER’S",
    "price": 70,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 52,
    "number": 52,
    "name": "Bambaram",
    "category": "KIDS CORNER’S",
    "price": 100,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 53,
    "number": 53,
    "name": "Butterfly",
    "category": "KIDS CORNER’S",
    "price": 100,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 54,
    "number": 54,
    "name": "Helicoptar",
    "category": "KIDS CORNER’S",
    "price": 100,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 55,
    "number": 55,
    "name": "Guitar",
    "category": "KIDS CORNER’S",
    "price": 300,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 56,
    "number": 56,
    "name": "Bat & Ball",
    "category": "ONE SOUND",
    "price": 190,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 57,
    "number": 57,
    "name": "Cylinder",
    "category": "ONE SOUND",
    "price": 300,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 58,
    "number": 58,
    "name": "Siren",
    "category": "ONE SOUND",
    "price": 180,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 59,
    "number": 59,
    "name": "Monkey Star",
    "category": "ONE SOUND",
    "price": 170,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 60,
    "number": 60,
    "name": "Phone",
    "category": "ONE SOUND",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 61,
    "number": 61,
    "name": "Watter Queen",
    "category": "ONE SOUND",
    "price": 180,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 62,
    "number": 62,
    "name": "Rain Bow Falls",
    "category": "ONE SOUND",
    "price": 90,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 63,
    "number": 63,
    "name": "Festival Delight",
    "category": "ONE SOUND",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 64,
    "number": 64,
    "name": "Vajra Val",
    "category": "ONE SOUND",
    "price": 200,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 65,
    "number": 65,
    "name": "Silver Drops",
    "category": "ONE SOUND",
    "price": 90,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 66,
    "number": 66,
    "name": "Kit Kat",
    "category": "ONE SOUND",
    "price": 30,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 67,
    "number": 67,
    "name": "Golden Rain",
    "category": "ONE SOUND",
    "price": 90,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 68,
    "number": 68,
    "name": "Racing Wheel",
    "category": "ONE SOUND",
    "price": 139,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 69,
    "number": 69,
    "name": "Peacock",
    "category": "PEACOCK",
    "price": 150,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 70,
    "number": 70,
    "name": "Bada Peacock",
    "category": "PEACOCK",
    "price": 350,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 71,
    "number": 71,
    "name": "Peacock Feather",
    "category": "PEACOCK",
    "price": 90,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 72,
    "number": 72,
    "name": "28 Cvhorsa",
    "category": "WALA’S",
    "price": 28,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 77,
    "number": 73,
    "name": "Lamba Matches",
    "category": "MATCHES",
    "price": 110,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 78,
    "number": 74,
    "name": "Max Matches",
    "category": "MATCHES",
    "price": 180,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 79,
    "number": 75,
    "name": "Rockets Bomb",
    "category": "ROCKETS",
    "price": 64,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 80,
    "number": 76,
    "name": "Lunik Rockets",
    "category": "ROCKETS",
    "price": 95,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 81,
    "number": 77,
    "name": "Money Bank (3pcs)",
    "category": "MONEY BANKS",
    "price": 140,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 82,
    "number": 78,
    "name": "Thunder Money Bank ( 2pcs)",
    "category": "MONEY BANKS",
    "price": 230,
    "stock": "available",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 83,
    "number": 79,
    "name": "2500 Combo",
    "category": "COMBO OFFERS",
    "price": 0,
    "stock": "pending",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 84,
    "number": 80,
    "name": "5000 Combo",
    "category": "COMBO OFFERS",
    "price": 0,
    "stock": "pending",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 85,
    "number": 81,
    "name": "7000 Combo",
    "category": "COMBO OFFERS",
    "price": 0,
    "stock": "pending",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  },
{
    "id": 86,
    "number": 82,
    "name": "10000 Combo",
    "category": "COMBO OFFERS",
    "price": 0,
    "stock": "pending",
    "discount": 0,
    "unit": "Box",
    "popular": false,
    "newArrival": false
  }
]

/* Corrected customer catalogue. Blank source rates are shown as Rate Pending. */
/* ===== ui.js ===== */
const $ = id => document.getElementById(id);
let currentCategory = "All";
let currentSort = "default";
let currentAvailability = "all";
let currentMaxPrice = 5000;
let discountPercent = 0;

const adminData = {};
const PRODUCT_CATALOG_VERSION = "2026-09-02-pdf-filtered-v3";

function formatPrice(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function getFinalPrice(product) {
  const discount = product.discount || 0;
  return discount > 0 ? Math.round(product.price - product.price * discount / 100) : product.price;
}

function getStock(product) {
  return product.stock || "available";
}

function stockLabel(stock) {
  return ({available:"Available",low:"Low Stock",out:"Out of Stock",pending:"Rate Pending"})[stock] || "Available";
}

function productImageCandidates(id) {
  // Product photos are optional. Try the standard numbered-image locations first;
  // the existing fallback artwork is shown when no photo exists.
  const n = Number(id);
  return [`images/image${n}.png`, `images/image${n}.jpg`, `image${n}.png`, `image${n}.jpg`];
}

function getProductImage(product) {
  const candidates = productImageCandidates(product.id);
  const first = candidates[0];
  const next = candidates.slice(1).map(p => `\"${p}\"`).join(",");
  return `<img src="${first}" alt="${product.name}" loading="lazy" data-image-candidates='${JSON.stringify(candidates)}' data-image-index="0" onerror="tryNextProductImage(this)">
    <div class="default-product-image" style="display:none">🎆</div>`;
}

function tryNextProductImage(img) {
  const candidates = JSON.parse(img.dataset.imageCandidates || "[]");
  let index = Number(img.dataset.imageIndex || 0) + 1;
  if (index < candidates.length) {
    img.dataset.imageIndex = String(index);
    img.src = candidates[index];
    return;
  }
  img.style.display = "none";
  const fallback = img.parentElement?.querySelector(".default-product-image");
  if (fallback) fallback.style.display = "flex";
}

function renderCategories() {
  const wrap = $("categoryButtons");
  if (!wrap) return;
  wrap.innerHTML = "";
  [...new Set(products.map(p => p.category))].forEach(category => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = category;
    button.onclick = () => filterProducts(category, button);
    wrap.appendChild(button);
  });
}

function renderProducts(list = products) {
  const grid = $("productGrid");
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-products"><div>🔎</div><h3>No products found</h3><p>Try another search, category or price range.</p><button onclick="resetFilters()">Reset Filters</button></div>`;
    updateResultCount(0);
    return;
  }

  grid.innerHTML = list.map((product,index) => {
    const stock = getStock(product);
    const finalPrice = getFinalPrice(product);
    const discount = product.discount || 0;
    const isOut = stock === "out";
    const wish = wishlist.includes(product.id);
    const ribbon = product.newArrival ? `<span class="ribbon new">NEW</span>` : product.popular ? `<span class="ribbon best">BEST</span>` : "";
    const priceHTML = stock === "pending"
      ? `<strong>Rate Pending</strong>`
      : discount > 0
      ? `<div class="price-stack"><strong>${formatPrice(finalPrice)}</strong><del>${formatPrice(product.price)}</del><em>${discount}% OFF</em></div>`
      : `<strong>${formatPrice(finalPrice)}</strong>`;

    return `<article class="product-card ${isOut ? "is-out" : ""}" style="--delay:${Math.min(index*.035,.5)}s">
      <div class="product-image-wrap">${ribbon}<span class="product-number">#${product.number}</span>
      <span class="status">${stockLabel(stock)}</span>
      <button class="wish-btn ${wish ? "active" : ""}" onclick="event.stopPropagation();toggleWishlist(${product.id})">${wish ? "♥":"♡"}</button>
      ${getProductImage(product)}</div>
      <div class="product-info"><div class="category-label">${product.category}</div><h3 onclick="openProduct(${product.id})" class="product-title-link">${product.name}</h3>
      <div class="product-bottom"><div>${priceHTML}</div><div class="qty-control"><button onclick="changeProductQty(${product.id},-1)">−</button><input id="qty-${product.id}" type="number" min="1" value="1"><button onclick="changeProductQty(${product.id},1)">+</button></div></div>
      <span class="qty-rule">Quantity can be changed before enquiry</span>
      ${isOut ? `<button class="add-btn" disabled>Out of Stock</button>` : cart.some(i=>i.id===product.id) ? `<div class="selection-actions"><button class="add-btn selected-btn" onclick="event.stopPropagation();showToast('Product already selected')">✓ Selected</button><button class="cancel-product-btn" onclick="event.stopPropagation();removeFromCart(${product.id})">Cancel</button></div>` : `<button class="add-btn" onclick="event.stopPropagation();addToCart(${product.id})">Add to Enquiry</button>`}
      </div></article>`;
  }).join("");
  updateResultCount(list.length);
  attachRippleEffects();
}

function getFilteredProducts() {
  const search = ($("searchInput")?.value || "").trim().toLowerCase();
  let list = [...products];
  if (currentCategory !== "All") list = list.filter(p => p.category === currentCategory);
  if (search) list = list.filter(p => p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search));
  if (currentAvailability !== "all") list = list.filter(p => getStock(p) === currentAvailability);
  list = list.filter(p => getFinalPrice(p) <= currentMaxPrice);

  if (currentSort === "popular") list.sort((a,b)=>Number(b.popular)-Number(a.popular));
  if (currentSort === "price-low") list.sort((a,b)=>getFinalPrice(a)-getFinalPrice(b));
  if (currentSort === "price-high") list.sort((a,b)=>getFinalPrice(b)-getFinalPrice(a));
  if (currentSort === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}

function refreshProducts() { renderProducts(getFilteredProducts()); }

function filterProducts(category, button) {
  currentCategory = category;
  document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
  button?.classList.add("active");
  refreshProducts();
  scrollToProducts();
}

function searchProducts() {
  refreshProducts();
  if ($("clearSearch")) $("clearSearch").style.display = $("searchInput").value ? "block":"none";
}

function clearSearch() { $("searchInput").value=""; searchProducts(); }

function sortProducts() { currentSort = $("sortSelect").value || "default"; refreshProducts(); }
function setAvailability() { currentAvailability = $("availabilityFilter").value || "all"; refreshProducts(); }

function setPriceFilter() {
  currentMaxPrice = Number($("priceRange").value);
  $("priceValue").textContent = currentMaxPrice >= 5000 ? "₹5,000+" : formatPrice(currentMaxPrice);
  refreshProducts();
}

function resetFilters() {
  currentCategory="All"; currentSort="default"; currentAvailability="all"; currentMaxPrice=5000;
  $("searchInput").value=""; $("sortSelect").value="default"; $("availabilityFilter").value="all"; $("priceRange").value=5000; $("priceValue").textContent="₹5,000+";
  document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
  document.querySelector(".category-btn")?.classList.add("active");
  refreshProducts();
  showToast("Filters reset");
}

function updateResultCount(count) { if ($("resultCount")) $("resultCount").textContent=count; }

function changeProductQty(id, amount) {
  const input = $(`qty-${id}`); if (!input) return;
  input.value = Math.max(1,(Number(input.value)||1)+amount);
}

function showBestSellers() {
  currentCategory="All"; currentSort="popular"; $("sortSelect").value="popular";
  document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
  document.querySelector(".category-btn")?.classList.add("active");
  refreshProducts(); scrollToProducts();
}


function openProduct(id){ window.location.href=`product.html?id=${encodeURIComponent(id)}`; }
function showFavoritesOnly(){ currentCategory="All"; currentSort="default"; currentAvailability="all"; const list=products.filter(p=>wishlist.includes(p.id)); renderProducts(list); scrollToProducts(); showToast(list.length?`${list.length} favourite product(s) shown`:'No favourite products yet.'); }
function scrollToProducts() { $("productsSection")?.scrollIntoView({behavior:"smooth",block:"start"}); }
function callNow() { window.location.href=`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g,"")}`; }
function openMaps() { window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_CONFIG.mapQuery)}`,"_blank","noopener,noreferrer"); }

function updateThemeIcon(){ const e=document.getElementById("themeIcon"); if(e)e.textContent=document.body.classList.contains("dark-mode")?"☀️":"🌙"; }
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("yuvaraj_dark",document.body.classList.contains("dark-mode")?"1":"0");
  updateThemeIcon();
}

let tamilMode = localStorage.getItem("yuvaraj_tamil")==="1";
function toggleLanguage() {
  tamilMode=!tamilMode; document.body.classList.toggle("tamil-mode",tamilMode);
  localStorage.setItem("yuvaraj_tamil",tamilMode?"1":"0");
  showToast(tamilMode?"தமிழ் Mode Enabled":"English Mode Enabled");
}

function applyOffer(percent) { discountPercent=Number(percent)||0; updateCartUI(); showToast(`${discountPercent}% offer applied`); }

function copyUPI() {
  const upi=$("upiDisplay")?.textContent||"yuvarajagencies@upi";
  navigator.clipboard?.writeText(upi).then(()=>showToast("UPI ID copied")).catch(()=>showToast("UPI ID: "+upi));
}

function printPriceList() { window.print(); }

let toastTimer;
function showToast(message) {
  const toast=$("toast"); if(!toast)return;
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}

function attachRippleEffects() {
  document.querySelectorAll(".add-btn,.primary-btn,.ghost-btn,.offer-grid button").forEach(button=>{
    if(button.dataset.rippleAttached)return;
    button.dataset.rippleAttached="1";
    button.addEventListener("click",function(event){
      const r=document.createElement("span"), rect=this.getBoundingClientRect(), size=Math.max(rect.width,rect.height);
      r.className="ripple"; r.style.width=r.style.height=size+"px";
      r.style.left=(event.clientX-rect.left-size/2)+"px"; r.style.top=(event.clientY-rect.top-size/2)+"px";
      this.appendChild(r); setTimeout(()=>r.remove(),600);
    });
  });
}

function setupReveal() {
  const elements=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){elements.forEach(e=>e.classList.add("visible"));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
  elements.forEach(e=>observer.observe(e));
}

function closeOfferPopup(){ $("offerPopup")?.classList.remove("active"); }
function closeAdmin(){ $("adminPanel")?.classList.remove("active"); }

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeEnquiryCart();closeConfirmation();closeOfferPopup();closeAdmin();}
  if(e.key==="/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("searchInput")?.focus();}
});

["cartModal","confirmationScreen","adminPanel","offerPopup"].forEach(id=>{
  $(id)?.addEventListener("click",function(e){if(e.target===this)this.classList.remove("active");});
});

function updateBusinessHours() {
  const el=$("businessHours"); if(!el)return;
  const hour=new Date().getHours();
  el.textContent=hour>=9&&hour<20?"Open • 9:00 AM – 8:00 PM":"Closed • Opens 9:00 AM";
}

const festivalDate=new Date("2026-10-20T00:00:00");
function updateCountdown(){
  const el=$("countdown"); if(!el)return;
  let d=festivalDate-new Date();
  if(d<=0){el.textContent="🎆 Festival Time!";return;}
  const days=Math.floor(d/86400000); d%=86400000;
  const hours=Math.floor(d/3600000); d%=3600000;
  const minutes=Math.floor(d/60000); d%=60000;
  const seconds=Math.floor(d/1000);
  el.textContent=`${String(days).padStart(2,"0")}d ${String(hours).padStart(2,"0")}h ${String(minutes).padStart(2,"0")}m ${String(seconds).padStart(2,"0")}s`;
}

/* ===== cart.js ===== */
if (localStorage.getItem("yuvaraj_catalog_version") !== PRODUCT_CATALOG_VERSION) {
  localStorage.removeItem("yuvaraj_cart");
  localStorage.setItem("yuvaraj_catalog_version", PRODUCT_CATALOG_VERSION);
}
let cart = JSON.parse(localStorage.getItem("yuvaraj_cart") || "[]");

function saveCart() {
  localStorage.setItem("yuvaraj_cart", JSON.stringify(cart));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  if (getStock(product) === "out") {
    showToast("This product is out of stock.");
    return;
  }
  const qty = Math.max(1, Number($(`qty-${id}`)?.value) || 1);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  updateCartUI();
  if ($("productGrid") && typeof refreshProducts === "function") refreshProducts();
  animateCart();
  showToast(`${product.name} added to enquiry`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  if ($("productGrid") && typeof refreshProducts === "function") refreshProducts();
  showToast("Item removed");
}

function changeCartQty(id, amount) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  // IMPORTANT: Header count must update on Home/Catalogue too.
  // The old version returned early when #cartItems was absent.
  const count = cart.reduce((n, i) => n + Number(i.qty || 0), 0);
  if ($("cartCount")) $("cartCount").textContent = count;

  const wrap = $("cartItems");
  if (!wrap) {
    // Home/catalogue pages only need the header badge.
    return;
  }

  let totalQty = 0, subtotal = 0, pending = false;

  if (!cart.length) {
    wrap.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">🛒</div>
      <h3>Your enquiry is empty</h3><p>Add products from the catalogue.</p>
      <button onclick="closeEnquiryCart();scrollToProducts()">Browse Products</button></div>`;
  } else {
    wrap.innerHTML = cart.map(item => {
      const p = products.find(x => x.id === item.id);
      if (!p) return "";
      const stock = getStock(p), price = getFinalPrice(p);
      totalQty += Number(item.qty || 0);
      if (stock === "pending") pending = true;
      else subtotal += price * Number(item.qty || 0);
      return `<div class="cart-product">
        <div class="cart-product-image">${getProductImage(p)}</div>
        <div class="cart-product-info"><span>${p.category}</span><strong>${p.name}</strong>
          <small>${stock === "pending" ? "Rate Pending" : formatPrice(price) + " each"}</small></div>
        <div class="cart-product-actions"><strong>${stock === "pending" ? "Pending" : formatPrice(price * item.qty)}</strong>
          <div class="cart-qty"><button onclick="changeCartQty(${item.id},-1)">−</button><b>${item.qty}</b><button onclick="changeCartQty(${item.id},1)">+</button></div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button></div>
      </div>`;
    }).join("");
  }

  const discount = 0;
  const total = subtotal;
  if ($("cartCount")) $("cartCount").textContent = count;
  if ($("cartQtyTotal")) $("cartQtyTotal").textContent = totalQty;
  if ($("cartSubtotal")) $("cartSubtotal").textContent = formatPrice(subtotal);
  if ($("cartDiscount")) $("cartDiscount").textContent = "− " + formatPrice(discount);
  if ($("cartTotal")) $("cartTotal").textContent = total.toLocaleString("en-IN");
  if ($("pendingNote")) $("pendingNote").style.display = pending ? "block" : "none";
}
function animateCart() {
  const b = document.querySelector(".cart-button");
  b?.classList.add("bump");
  setTimeout(() => b?.classList.remove("bump"), 350);
}

function openEnquiryCart() {
  updateCartUI();
  $("cartModal")?.classList.add("active");
  document.body.classList.add("cart-open");
}

function closeEnquiryCart() {
  $("cartModal")?.classList.remove("active");
  document.body.classList.remove("cart-open");
}

function clearCart() {
  if (!cart.length) return showToast("Enquiry is already empty.");
  if (confirm("Clear all products from your enquiry?")) {
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Enquiry cleared");
  }
}

/* Global enquiry badge initialization */
document.addEventListener("DOMContentLoaded", function () {
  updateCartUI();
});

/* ===== wishlist.js ===== */
let wishlist=JSON.parse(localStorage.getItem("yuvaraj_wishlist")||"[]");

function toggleWishlist(id){
  const i=wishlist.indexOf(id);
  if(i>=0){wishlist.splice(i,1);showToast("Removed from favourites");}
  else{wishlist.push(id);showToast("Added to favourites ♥");}
  localStorage.setItem("yuvaraj_wishlist",JSON.stringify(wishlist));const fc=$("favoriteCount");if(fc)fc.textContent=wishlist.length;refreshProducts();
}

function showWishlist(){showFavoritesOnly();}

/* ===== whatsapp.js ===== */
function buildWhatsAppMessage(){
  const c=getCustomerForm ? getCustomerForm() : {};
  return buildEnquiryWhatsAppMessage ? buildEnquiryWhatsAppMessage(c,enquiryNumber ? enquiryNumber() : "") : null;
}
function sendWhatsAppEnquiry(){
  if(!cart.length){showToast("Please add at least one product to enquiry."); if(typeof openEnquiryCart==="function")openEnquiryCart(); return;}
  const c=getCustomerForm ? getCustomerForm() : {};
  if(!c.name){showToast("Please enter your name.");$("customerName")?.focus();return;}
  if(!/^[6-9]\d{9}$/.test((c.phone||"").replace(/\D/g,""))){showToast("Please enter a valid 10-digit mobile number.");$("customerPhone")?.focus();return;}
  if(!c.address){showToast("Delivery address is required.");$("customerAddress")?.focus();return;}
  const msg=buildEnquiryWhatsAppMessage(c,enquiryNumber());
  const number=(BUSINESS_CONFIG.whatsapp||"").replace(/\D/g,"");
  if(!number){showToast("Set your WhatsApp number in config.js");return;}
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");
}
function openWhatsAppDirect(){
  const number=(BUSINESS_CONFIG.whatsapp||"").replace(/\D/g,"");
  const msg=encodeURIComponent(`Hello ${BUSINESS_CONFIG.name}, I would like to enquire about your catalogue.`);
  if(number)window.open(`https://wa.me/${number}?text=${msg}`,"_blank","noopener,noreferrer");
}

/* ===== pdf.js ===== */
/*
  Yuvaraj Agencies — Material List PDF
  V13: Alternative premium branded template. PDF only; all website features/layout remain unchanged.
  Dependency-free A4 PDF generator.
*/

function getCustomerForm(){
  return {
    name: $("customerName")?.value.trim() || "",
    phone: $("customerPhone")?.value.trim() || "",
    address: $("customerAddress")?.value.trim() || "",
    email: $("customerEmail")?.value.trim() || "",
    notes: $("customerNotes")?.value.trim() || ""
  };
}
function validateCustomer(){
  if(!cart.length){ showToast("Please add at least one product."); return false; }
  const c=getCustomerForm();
  if(!c.name){ showToast("Please enter your name."); $("customerName")?.focus(); return false; }
  const phone=c.phone.replace(/\D/g,"");
  if(!/^[6-9]\d{9}$/.test(phone)){ showToast("Please enter a valid 10-digit mobile number."); $("customerPhone")?.focus(); return false; }
  if(!c.address){ showToast("Delivery address is required."); $("customerAddress")?.focus(); return false; }
  return true;
}
function enquiryNumber(){
  const d=new Date();
  return `YA-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}-${String(d.getHours()).padStart(2,"0")}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}`;
}
function pdfSafe(v){ return String(v ?? "").normalize("NFKD").replace(/[^\x20-\x7E]/g,"").replace(/[\\()]/g,m=>"\\"+m); }
function wrapText(text,max=42){
  const words=String(text||"").split(/\s+/), out=[]; let line="";
  for(const w of words){
    if((line+" "+w).trim().length>max){ if(line)out.push(line); line=w; }
    else line=(line+" "+w).trim();
  }
  if(line)out.push(line); return out.length?out:[""];
}
const PDF_COLORS={
  navy:[0.035,0.10,0.16], navy2:[0.075,0.16,0.23], red:[0.78,0.08,0.08], redSoft:[0.99,0.94,0.94],
  gold:[0.88,0.55,0.08], goldSoft:[0.99,0.96,0.87], ink:[0.08,0.10,0.12], muted:[0.34,0.38,0.42],
  line:[0.80,0.82,0.84], white:[1,1,1], pale:[0.97,0.98,0.99]
};
function rgb([r,g,b]){ return `${r} ${g} ${b}`; }
function pdfContent(items){
  let s="q\n";
  for(const l of items){
    if(l.type==='rect'){
      s+=`${rgb(l.fill||PDF_COLORS.white)} rg ${l.x} ${l.y} ${l.w} ${l.h} re f\n`;
      if(l.stroke)s+=`${rgb(l.stroke)} RG ${l.lineWidth||0.6} w ${l.x} ${l.y} ${l.w} ${l.h} re S\n`;
    } else if(l.type==='line') s+=`${rgb(l.stroke||PDF_COLORS.line)} RG ${l.lineWidth||0.6} w ${l.x1} ${l.y} m ${l.x2} ${l.y} l S\n`;
    else if(l.type==='vline') s+=`${rgb(l.stroke||PDF_COLORS.line)} RG ${l.lineWidth||0.6} w ${l.x} ${l.y1} m ${l.x} ${l.y2} l S\n`;
  }
  s+="Q\n";
  for(const l of items){ if(!l.text)continue; const size=l.size||9,x=l.x||45,y=l.y||780,font=l.font||"F1"; s+=`BT /${font} ${size} Tf ${rgb(l.color||PDF_COLORS.ink)} rg 1 0 0 1 ${x} ${y} Tm (${pdfSafe(l.text)}) Tj ET\n`; }
  return s;
}
function makePdfBlob(pages){
  const objects=[], add=o=>{objects.push(o);return objects.length;};
  const font=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  const boldFont=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  const pageIds=[],contentIds=[];
  for(const lines of pages){ const content=pdfContent(lines); contentIds.push(add(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`)); pageIds.push(add('PAGE_PLACEHOLDER')); }
  const pagesId=add('PAGES_PLACEHOLDER'), catalogId=add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  pageIds.forEach((id,i)=>objects[id-1]=`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${font} 0 R /F2 ${boldFont} 0 R >> >> /Contents ${contentIds[i]} 0 R >>`);
  objects[pagesId-1]=`<< /Type /Pages /Kids [${pageIds.map(id=>id+' 0 R').join(' ')}] /Count ${pageIds.length} >>`;
  let pdf='%PDF-1.4\n%YA-MATERIAL-LIST-V13\n', offsets=[0];
  for(let i=0;i<objects.length;i++){ offsets.push(pdf.length); pdf+=`${i+1} 0 obj\n${objects[i]}\nendobj\n`; }
  const xref=pdf.length; pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;
  for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,'0')+' 00000 n \n';
  pdf+=`trailer\n<< /Size ${objects.length+1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf],{type:'application/pdf'});
}
function drawText(page,text,x,y,size,color=PDF_COLORS.ink,bold=false){ page.push({text,x,y,size,color,font:bold?'F2':'F1'}); }
function drawBox(page,x,y,w,h,fill,stroke=PDF_COLORS.line){ page.push({type:'rect',x,y:y-h,w,h,fill,stroke,lineWidth:0.6}); }
function buildHeader(page,c,ref,date,period){
  const biz=BUSINESS_CONFIG||{};
  const phone=biz.phone||biz.mobile||'';
  const email=biz.email||'';
  const address=biz.address||'';
  page.push({type:'rect',x:0,y:842,w:595,h:842,fill:PDF_COLORS.white});
  page.push({type:'rect',x:0,y:842,w:595,h:104,fill:PDF_COLORS.navy});
  page.push({type:'rect',x:0,y:738,w:595,h:6,fill:PDF_COLORS.red});
  page.push({type:'rect',x:0,y:732,w:595,h:2,fill:PDF_COLORS.gold});
  drawText(page,biz.name||'YUVARAJ AGENCIES',30,812,21,PDF_COLORS.white,true);
  drawText(page,'MATERIAL SUPPLY • CUSTOMER ENQUIRY',30,792,8.2,[0.84,0.89,0.94],true);
  if(phone) drawText(page,`M: ${phone}`,30,775,7,[0.74,0.80,0.86]);
  if(email) drawText(page,`E: ${email}`,145,775,7,[0.74,0.80,0.86]);
  if(address) drawText(page,wrapText(address,55)[0],30,760,6.6,[0.74,0.80,0.86]);

  page.push({type:'rect',x:410,y:776,w:157,h:48,fill:PDF_COLORS.white,stroke:PDF_COLORS.gold,lineWidth:1});
  drawText(page,'MATERIAL LIST',424,808,9,PDF_COLORS.navy,true);
  drawText(page,'ENQUIRY REF',424,793,6.2,PDF_COLORS.muted,true);
  drawText(page,ref,424,781,7.4,PDF_COLORS.red,true);

  drawBox(page,28,708,171,43,PDF_COLORS.pale);
  drawText(page,'DATE',40,694,6.2,PDF_COLORS.muted,true);
  drawText(page,date,40,678,9,PDF_COLORS.ink,true);
  drawBox(page,211,708,171,43,PDF_COLORS.pale);
  drawText(page,'PERIOD',223,694,6.2,PDF_COLORS.muted,true);
  drawText(page,period,223,678,9,PDF_COLORS.ink,true);
  drawBox(page,394,708,173,43,PDF_COLORS.redSoft,[0.92,0.65,0.65]);
  drawText(page,'STATUS',406,694,6.2,PDF_COLORS.muted,true);
  drawText(page,'RATE / STOCK TO CONFIRM',406,678,7.7,PDF_COLORS.red,true);

  // Customer + company contact panel: Word-style information block.
  drawBox(page,28,656,539,67,PDF_COLORS.white,[0.78,0.81,0.84]);
  page.push({type:'rect',x:28,y:656,w:5,h:67,fill:PDF_COLORS.gold});
  drawText(page,'CUSTOMER DETAILS',42,642,7,PDF_COLORS.navy,true);
  drawText(page,c.name||'-',42,625,10.2,PDF_COLORS.ink,true);
  drawText(page,'CUSTOMER NAME',42,611,5.8,PDF_COLORS.muted,true);
  drawText(page,c.phone||'-',205,625,9,PDF_COLORS.ink,true);
  drawText(page,'MOBILE',205,611,5.8,PDF_COLORS.muted,true);
  drawText(page,c.email||'-',335,625,7.8,PDF_COLORS.ink,true);
  drawText(page,'EMAIL',335,611,5.8,PDF_COLORS.muted,true);
  drawText(page,'YUVARAJ AGENCIES',462,625,6.8,PDF_COLORS.red,true);
  drawText(page,'SUPPLIER',462,611,5.8,PDF_COLORS.muted,true);
  return 588;
}
function drawTableHeader(page,y){
  const x=28,w=539,h=30;
  page.push({type:'rect',x,y:y-h,w,h,fill:PDF_COLORS.navy2,stroke:PDF_COLORS.navy2,lineWidth:0.8});
  page.push({type:'rect',x:28,y:y-h,w:5,h,fill:PDF_COLORS.red});
  drawText(page,'#',42,y-19,8.3,PDF_COLORS.white,true);
  drawText(page,'DESCRIPTION / MATERIAL',70,y-19,8,PDF_COLORS.white,true);
  drawText(page,'UNIT',352,y-19,8,PDF_COLORS.white,true);
  drawText(page,'QTY',414,y-19,8,PDF_COLORS.white,true);
  drawText(page,'AMOUNT',484,y-19,8,PDF_COLORS.white,true);
  [62,340,400,470].forEach(v=>page.push({type:'vline',x:v,y1:y,y2:y-h,stroke:[0.35,0.40,0.46],lineWidth:0.55}));
  return y-h;
}
function buildPdfPages(){
  const c=getCustomerForm(),ref=enquiryNumber(),now=new Date();
  const date=now.toLocaleDateString('en-IN',{day:'2-digit',month:'2-digit',year:'numeric'});
  const period=now.toLocaleDateString('en-IN',{month:'long',year:'numeric'});
  const rows=[];let total=0,pending=false;
  cart.forEach(item=>{
    const p=products.find(x=>x.id===item.id);if(!p)return;
    const stock=getStock(p),price=getFinalPrice(p),amount=stock==='pending'?null:price*item.qty;
    if(amount===null)pending=true;else total+=amount;
    rows.push({name:p.name,units:p.unit||p.units||'Box',qty:item.qty,amount,pending:stock==='pending'});
  });
  const pages=[],ROW_H=24,ROWS_PER_PAGE=25;let index=0;
  while(index<rows.length||pages.length===0){
    const page=[];page.push({type:'rect',x:0,y:0,w:595,h:842,fill:PDF_COLORS.white});
    let y=buildHeader(page,c,ref,date,period); y=drawTableHeader(page,y);
    const count=Math.min(ROWS_PER_PAGE,Math.max(0,rows.length-index)),drawCount=rows.length?count:ROWS_PER_PAGE;
    for(let r=0;r<drawCount;r++){
      const row=rows[index+r],top=y-r*ROW_H,bottom=top-ROW_H;
      page.push({type:'rect',x:28,y:bottom,w:539,h:ROW_H,fill:r%2?PDF_COLORS.pale:PDF_COLORS.white,stroke:PDF_COLORS.line,lineWidth:0.45});
      page.push({type:'rect',x:470,y:bottom,w:97,h:ROW_H,fill:r%2?PDF_COLORS.goldSoft:PDF_COLORS.redSoft,stroke:PDF_COLORS.line,lineWidth:0.45});
      [62,340,400,470].forEach(v=>page.push({type:'vline',x:v,y1:top,y2:bottom,stroke:PDF_COLORS.line,lineWidth:0.4}));
      if(row){
        drawText(page,String(index+r+1),41,top-16,8,PDF_COLORS.muted,true);
        const lines=wrapText(row.name,40).slice(0,2);drawText(page,lines[0],70,top-10,7.7,PDF_COLORS.ink,true);if(lines[1])drawText(page,lines[1],70,top-19,6.4,PDF_COLORS.muted);
        drawText(page,row.units,353,top-16,7.3,PDF_COLORS.ink);
        drawText(page,String(row.qty),414,top-16,8.2,PDF_COLORS.ink,true);
        drawText(page,row.pending?'PENDING':`Rs.${Number(row.amount||0).toLocaleString('en-IN')}`,480,top-16,7.1,row.pending?PDF_COLORS.red:PDF_COLORS.ink,true);
      }
    }
    index+=count;
    if(index>=rows.length){
      const tableBottom=y-drawCount*ROW_H;
      // Total card.
      page.push({type:'rect',x:333,y:tableBottom-68,w:234,h:54,fill:PDF_COLORS.navy,stroke:PDF_COLORS.navy,lineWidth:0.7});
      drawText(page,'ESTIMATED TOTAL',348,tableBottom-34,7.2,PDF_COLORS.gold,true);
      drawText(page,`Rs.${total.toLocaleString('en-IN')}${pending?' + PENDING':''}`,348,tableBottom-55,13.5,PDF_COLORS.white,true);
      if(pending)drawText(page,'Final rate will be confirmed by our team.',348,tableBottom-76,6.2,PDF_COLORS.muted);

      // Notes/address blocks.
      let infoY=tableBottom-16;
      if(c.notes){
        drawBox(page,28,infoY,285,48,PDF_COLORS.goldSoft,[0.91,0.78,0.48]);
        drawText(page,'CUSTOMER NOTES',40,infoY-15,6.5,PDF_COLORS.gold,true);
        const nl=wrapText(c.notes,54);drawText(page,nl[0],40,infoY-30,6.9,PDF_COLORS.ink);if(nl[1])drawText(page,nl[1],40,infoY-40,6.9,PDF_COLORS.ink);
        infoY-=60;
      }
      if(c.address){
        drawBox(page,28,infoY,285,48,PDF_COLORS.pale);
        drawText(page,'DELIVERY / ADDRESS',40,infoY-15,6.5,PDF_COLORS.muted,true);
        const al=wrapText(c.address,54);drawText(page,al[0],40,infoY-30,6.9,PDF_COLORS.ink);if(al[1])drawText(page,al[1],40,infoY-40,6.9,PDF_COLORS.ink);
      }
    }
    // Footer branding.
    page.push({type:'line',x1:28,x2:567,y:36,stroke:PDF_COLORS.line,lineWidth:0.6});
    drawText(page,'Please confirm final stock, rates and delivery before payment.',28,23,6.5,PDF_COLORS.muted);
    drawText(page,`${BUSINESS_CONFIG.name||'YUVARAJ AGENCIES'} • ${ref}`,392,23,6.2,PDF_COLORS.muted,true);
    pages.push(page);if(index>=rows.length)break;
  }
  return {pages,c,ref};
}
async function downloadEnquiryPDF(){
  if(!validateCustomer())return false;
  try{
    const {pages,c,ref}=buildPdfPages(),blob=makePdfBlob(pages),filename=`${BUSINESS_CONFIG.pdfFilePrefix}-${ref}.pdf`,url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
    localStorage.setItem('yuvaraj_last_enquiry',JSON.stringify({reference:ref,customer:c,items:cart,createdAt:new Date().toISOString()}));
    showToast('Premium Material List PDF downloaded successfully.');return {blob,filename,ref,c};
  }catch(e){console.error(e);showToast('PDF generation failed. Please try again.');return false;}
}
async function generatePDF(){return await downloadEnquiryPDF();}
function buildEnquiryWhatsAppMessage(c=getCustomerForm(),ref=''){
  let m=`Hello ${BUSINESS_CONFIG.name}, I would like to make an enquiry.\n\nPDF Ref: ${ref}\nCustomer: ${c.name}\nMobile: ${c.phone}\n`;
  if(c.email)m+=`Email: ${c.email}\n`;if(c.address)m+=`Address: ${c.address}\n`;if(c.notes)m+=`Notes: ${c.notes}\n`;m+='\nSelected Products:\n';let total=0;
  cart.forEach((item,i)=>{const p=products.find(x=>x.id===item.id);if(!p)return;const price=getFinalPrice(p);m+=`${i+1}. ${p.name} - Qty ${item.qty} - Rs.${price}\n`;if(getStock(p)!=='pending')total+=price*item.qty;});
  return m+`\nEstimated Total: Rs.${total.toLocaleString('en-IN')}\nPlease confirm final stock, rates and delivery.`;
}
function openWhatsAppText(message){
  const number=String(BUSINESS_CONFIG.whatsapp||'').replace(/\D/g,'');if(!number){showToast('Please set WhatsApp number in config.js');return false;}
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`,'_blank','noopener');return true;
}
async function generateAndWhatsApp(){
  if(!validateCustomer())return false;const c=getCustomerForm();
  try{const result=await downloadEnquiryPDF();if(!result)return false;setTimeout(()=>openWhatsAppText(buildEnquiryWhatsAppMessage(c,result.ref)),500);return true;}
  catch(e){console.error(e);showToast('Could not prepare WhatsApp enquiry.');return false;}
}

/* ===== app initialization ===== */
function initializeApp(){
  normalizeCartToCurrentProducts();
  if(localStorage.getItem("yuvaraj_dark")==="1")document.body.classList.add("dark-mode");
  if(tamilMode)document.body.classList.add("tamil-mode");
  if(typeof updateThemeIcon==="function") updateThemeIcon();

  const stats=document.querySelectorAll(".hero-stats strong");
  if(stats[0])stats[0].textContent=products.length;
  if(stats[1])stats[1].textContent=new Set(products.map(p=>p.category)).size;
  if(stats[2]) stats[2].textContent = "₹0";

  renderCategories();
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  if (requestedCategory && [...new Set(products.map(p => p.category))].includes(requestedCategory)) {
    const btn = [...document.querySelectorAll("#categoryButtons .category-btn")].find(b => b.textContent === requestedCategory);
    filterProducts(requestedCategory, btn);
  } else {
    renderProducts(products);
  }
  updateCartUI();
  setupReveal();
  attachRippleEffects();

  console.log(`Yuvaraj Agencies loaded: ${products.length} products`);
}
document.addEventListener("DOMContentLoaded",initializeApp);

/* ===== feature-patch.js ===== */
/*
  YUVARAJ AGENCIES — FEATURE-ONLY PATCH
  V12: preserves the existing visual design/layout and only restores/adds interaction features.
*/
(function(){
  const $ = id => document.getElementById(id);

  function applySavedTheme(){
    const dark = localStorage.getItem('yuvaraj_dark') === '1';
    document.body.classList.toggle('dark-mode', dark);
    if(typeof updateThemeIcon === 'function') updateThemeIcon();
  }

  function updateFavoriteButton(){
    const btn = document.querySelector('.favorite-filter-btn');
    if(!btn) return;
    const count = (typeof wishlist !== 'undefined' && Array.isArray(wishlist)) ? wishlist.length : 0;
    const b = btn.querySelector('b');
    if(b) b.textContent = count;
    const active = btn.dataset.favoritesMode === '1';
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    btn.title = active ? 'Show all products' : 'Show favourites only';
    if(active) btn.classList.add('is-active'); else btn.classList.remove('is-active');
  }

  // Toggle instead of permanently switching into favourites-only mode.
  window.showFavoritesOnly = function(){
    const btn = document.querySelector('.favorite-filter-btn');
    const active = btn?.dataset.favoritesMode === '1';
    if(active){
      if(btn) btn.dataset.favoritesMode = '0';
      if(typeof resetFilters === 'function') resetFilters();
      updateFavoriteButton();
      return;
    }
    if(btn) btn.dataset.favoritesMode = '1';
    if(typeof renderProducts === 'function' && typeof products !== 'undefined' && typeof wishlist !== 'undefined'){
      const list = products.filter(p => wishlist.includes(p.id));
      renderProducts(list);
      if(typeof scrollToProducts === 'function') scrollToProducts();
      if(typeof showToast === 'function') showToast(list.length ? `${list.length} favourite product(s) shown` : 'No favourite products yet.');
    }
    updateFavoriteButton();
  };

  function setupProductCardNavigation(){
    const grid = $('productGrid');
    if(!grid || grid.dataset.cardNavReady) return;
    grid.dataset.cardNavReady = '1';
    grid.addEventListener('click', function(e){
      const card = e.target.closest('.product-card');
      if(!card) return;
      if(e.target.closest('button,a,input,select,textarea')) return;
      const title = card.querySelector('.product-title-link');
      if(title && typeof openProduct === 'function') title.click();
    });
  }

  function setupMobileNav(){
    const nav = document.querySelector('.payment-nav');
    const toggle = document.querySelector('.nav-mobile-toggle');
    if(!nav) return;
    nav.querySelectorAll('a').forEach(a => {
      if(a.dataset.navCloseReady) return;
      a.dataset.navCloseReady='1';
      a.addEventListener('click',()=>nav.classList.remove('mobile-open'));
    });
    if(toggle) toggle.setAttribute('aria-expanded', nav.classList.contains('mobile-open') ? 'true' : 'false');
  }

  function setupHeaderCartFallback(){
    const cart = document.querySelector('.cart-button');
    if(!cart) return;
    cart.href = 'enquiry.html';
    if(typeof updateCartUI === 'function') updateCartUI();
  }

  function setupWhatsAppLinks(){
    if(typeof BUSINESS_CONFIG === 'undefined') return;
    const n = String(BUSINESS_CONFIG.whatsapp || '').replace(/\D/g,'');
    if(!n) return;
    const generic = `https://wa.me/${n}?text=${encodeURIComponent('Hello '+BUSINESS_CONFIG.name+', I have an enquiry.')}`;
    document.querySelectorAll('#headerWhatsApp,#enquiryHeaderWA,#footerWA,#headerWA').forEach(a=>{
      if(a && a.tagName==='A') a.href = generic;
    });
    const payment = document.querySelector('#paymentHeaderWA');
    if(payment) payment.href = `https://wa.me/${n}?text=${encodeURIComponent('Hello '+BUSINESS_CONFIG.name+', I have a payment enquiry.')}`;
    const confirm = document.querySelector('#paymentConfirmWA');
    if(confirm) confirm.href = `https://wa.me/${n}?text=${encodeURIComponent('Hello '+BUSINESS_CONFIG.name+', I have completed my payment. I will share the payment screenshot / UTR here.')}`;
  }

  function setupProductDetail(){
    const detail = $('productDetail');
    if(!detail || detail.dataset.featureReady) return;
    detail.dataset.featureReady='1';
    // Existing product page remains the source of truth; this only adds a clear browse-back affordance when needed.
    if(!detail.querySelector('.detail-actions')) return;
    const actions = detail.querySelector('.detail-actions');
    if(!actions.querySelector('[data-feature-enquiry]')){
      const a=document.createElement('a');
      a.href='enquiry.html'; a.className='ghost-btn'; a.dataset.featureEnquiry='1';
      a.textContent='Open Enquiry';
      actions.appendChild(a);
    }
  }

  function init(){
    applySavedTheme();
    updateFavoriteButton();
    setupMobileNav();
    setupProductCardNavigation();
    setupHeaderCartFallback();
    setupWhatsAppLinks();
    setupProductDetail();

    const fc=$('favoriteCount');
    if(fc && typeof wishlist !== 'undefined') fc.textContent=wishlist.length;

    // Re-attach card navigation after catalogue filtering/rerendering.
    if($('productGrid')){
      const observer=new MutationObserver(()=>setupProductCardNavigation());
      observer.observe($('productGrid'),{childList:true});
    }
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('storage', function(e){
    if(e.key==='yuvaraj_dark') applySavedTheme();
    if(e.key==='yuvaraj_wishlist') updateFavoriteButton();
  });
})();

/* ===== advanced-home-v3.js ===== */

/* HOME PRODUCT SHOWCASE — show only products with a real rate, using the catalogue card template. */
(function(){
  function enhanceHome(){
    const grid=document.getElementById("homeFeaturedGrid");
    if(!grid || typeof products==="undefined") return;
    const list=products.filter(p=>Number(typeof getFinalPrice==="function"?getFinalPrice(p):p.price)>0).slice(0,8);
    if(!list.length){grid.innerHTML='<div class="empty-products"><h3>No priced products available</h3><p>Products will appear here when a rate is added.</p></div>';return;}
    grid.classList.add("product-grid");
    grid.innerHTML=list.map((product,index)=>{
      const stock=typeof getStock==="function"?getStock(product):"available";
      const finalPrice=typeof getFinalPrice==="function"?getFinalPrice(product):Number(product.price)||0;
      const discount=product.discount||0;
      const isOut=stock==="out";
      const ribbon=product.newArrival?'<span class="ribbon new">NEW</span>':product.popular?'<span class="ribbon best">BEST</span>':'';
      const priceHTML=discount>0?`<div class="price-stack"><strong>${formatPrice(finalPrice)}</strong><del>${formatPrice(product.price)}</del><em>${discount}% OFF</em></div>`:`<strong>${formatPrice(finalPrice)}</strong>`;
      return `<article class="product-card ${isOut?"is-out":""}" style="--delay:${Math.min(index*.035,.5)}s">
        <div class="product-image-wrap">${ribbon}<span class="product-number">#${product.number}</span><span class="status">${typeof stockLabel==="function"?stockLabel(stock):"Available"}</span>${getProductImage(product)}</div>
        <div class="product-info"><div class="category-label">${product.category}</div><h3 onclick="openProduct(${product.id})" class="product-title-link">${product.name}</h3>
        <div class="product-bottom"><div>${priceHTML}</div><div class="qty-control"><button onclick="changeProductQty(${product.id},-1)">−</button><input id="qty-${product.id}" type="number" min="1" value="1"><button onclick="changeProductQty(${product.id},1)">+</button></div></div>
        <span class="qty-rule">Quantity can be changed before enquiry</span>
        ${isOut?'<button class="add-btn" disabled>Out of Stock</button>':`<button class="add-btn" onclick="addToCart(${product.id})">Add to Enquiry</button>`}
        </div></article>`;
    }).join("");
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded",enhanceHome); else enhanceHome();
})();

/* ===== cart-count-patch.js ===== */

/* CART COUNT PATCH — keeps enquiry badge synchronized everywhere */
(function(){
  function syncEnquiryBadge(){
    try{
      const saved=JSON.parse(localStorage.getItem("yuvaraj_cart")||"[]");
      const count=saved.reduce((n,i)=>n+Number(i.qty||0),0);
      document.querySelectorAll("#cartCount").forEach(el=>el.textContent=count);
    }catch(e){}
  }
  document.addEventListener("DOMContentLoaded",syncEnquiryBadge);
  window.addEventListener("storage",function(e){
    if(e.key==="yuvaraj_cart") syncEnquiryBadge();
  });
})();

/* ===== GLOBAL SHELL PATCH: shared header, WhatsApp and cart synchronization ===== */
function setupGlobalShell(){
  const c=BUSINESS_CONFIG;
  const n=String(c.whatsapp||"").replace(/\D/g,"");
  const wa=n ? "https://wa.me/"+n+"?text="+encodeURIComponent("Hello "+c.name+", I have an enquiry.") : "#";
  document.querySelectorAll("#headerWhatsApp").forEach(el=>el.href=wa);
  document.querySelectorAll("#footerWA").forEach(el=>el.href=wa);
  const fp=$("footerPhone"); if(fp){fp.textContent="📞 "+c.phone;fp.href="tel:"+c.phone.replace(/\D/g,"");}
  const fe=$("footerEmail"); if(fe){fe.textContent="✉️ "+c.email;fe.href="mailto:"+c.email;}
  const fa=$("footerAddress"); if(fa)fa.textContent="📍 "+c.address;
  const fb=$("footerBrandName"); if(fb)fb.textContent=c.name;
  const fbb=$("footerBottomBrand"); if(fbb)fbb.textContent=c.name;
  const fy=$("footerYear"); if(fy)fy.textContent=new Date().getFullYear();
  updateCartUI();
}
document.addEventListener("DOMContentLoaded",setupGlobalShell);
