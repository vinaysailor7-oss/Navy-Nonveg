"use strict";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Navy+Non-Veg/@21.235343,72.768993,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04d7469ae5e3d:0xdea359fa8c6ed49a!8m2!3d21.235338!4d72.7715679!16s%2Fg%2F11w7nqjf4x?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

const categories = [
  { id: "all", label: "All" }, { id: "seafood", label: "Seafood" },
  { id: "fish", label: "Fish" }, { id: "prawn", label: "Prawns" },
  { id: "crab", label: "Crabs" }, { id: "egg", label: "Egg" },
  { id: "chicken", label: "Chicken" }, { id: "mutton", label: "Mutton" },
  { id: "extras", label: "Extras" }, { id: "drinks", label: "Drinks" }
];

const sectionMeta = {
  dara: { title: "Indian Salmon - Dara Fish", note: "Butter preparation ₹50 · Ghee preparation ₹100" },
  prawn: { title: "Prawns", note: "Butter preparation ₹50 · Approx. preparation time 15 min" },
  crab: { title: "Crabs", note: "Size prices ₹250 / ₹280 / ₹330 / ₹350 · Butter preparation ₹50" },
  pomfret: { title: "Pomfret (Paplet)", note: "Butter preparation ₹50 · Ghee preparation ₹100 · Green Paplet ₹50 extra" },
  scampi: { title: "Scampi", note: "20 min preparation · 2 pcs per dish · Size prices ₹350 / ₹450 / ₹650 · Butter preparation ₹50" },
  seasonal: { title: "Seasonal Fish", note: "Fresh catch · Subject to availability" },
  egg: { title: "Egg", note: "Butter preparation ₹30" },
  chicken: { title: "Chicken", note: "Butter preparation ₹50" },
  mutton: { title: "Mutton", note: "" },
  extras: { title: "Extras", note: "Breads, rice, chutney and accompaniments" },
  drinks: { title: "Soft Drinks", note: "" }
};

const item = (id, category, englishName, price, options = {}) => ({
  id, category, englishName, price, priceType: options.priceType || "fixed",
  seasonal: Boolean(options.seasonal), advanceOrder: Boolean(options.advanceOrder),
  group: options.group || "", note: options.note || "", tags: options.tags || []
});

const menuData = [
  item("dara-regular-fry-half", "dara", "Regular Fry - Half", 400, { tags:["seafood","fish"] }),
  item("dara-regular-fry-full", "dara", "Regular Fry - Full", 650, { tags:["seafood","fish"] }),
  item("dara-green-chatni-half", "dara", "Green Chatni Masala Fry - Half", 450, { tags:["seafood","fish"] }),
  item("dara-green-chatni-full", "dara", "Green Chatni Masala Fry - Full", 700, { tags:["seafood","fish"] }),
  item("dara-semi-gravy-half", "dara", "Semi Gravy - Half", 400, { tags:["seafood","fish"] }),
  item("dara-semi-gravy-full", "dara", "Semi Gravy - Full", 650, { tags:["seafood","fish"] }),
  item("dara-full-gravy", "dara", "Full Gravy", 650, { tags:["seafood","fish"] }),
  item("dara-biryani", "dara", "Biryani", 850, { tags:["seafood","fish","rice"] }),
  item("dara-tikka", "dara", "Fish Tikka (Boneless)", 750, { tags:["seafood","fish"] }),
  item("dara-patra", "dara", "Patra Fish", 700, { tags:["seafood","fish"] }),

  item("prawn-fry", "prawn", "Fry", 330, { tags:["seafood"] }),
  item("prawn-semi-gravy-red", "prawn", "Semi Gravy - Red", 330, { tags:["seafood"] }),
  item("prawn-semi-gravy-green", "prawn", "Semi Gravy - Green", 380, { tags:["seafood"] }),
  item("prawn-full-gravy-red", "prawn", "Full Gravy - Red", 380, { tags:["seafood"] }),
  item("prawn-garlic-butter", "prawn", "Garlic Butter", 380, { tags:["seafood"] }),
  item("prawn-rice", "prawn", "Rice", 450, { tags:["seafood","rice"] }),
  item("prawn-khichdi", "prawn", "Khichdi", 480, { tags:["seafood","rice"] }),

  item("crab-fry", "crab", "Fry", null, { priceType:"size", tags:["seafood"] }),
  item("crab-gravy-red", "crab", "Gravy (Red)", null, { priceType:"size", tags:["seafood"] }),
  item("crab-semi-gravy-red", "crab", "Semi Gravy (Red)", null, { priceType:"size", tags:["seafood"] }),
  item("crab-soup", "crab", "Soup", 600, { advanceOrder:true, tags:["seafood"] }),
  item("crab-khima", "crab", "Khima", 600, { advanceOrder:true, tags:["seafood"] }),

  item("pomfret-regular-fry", "pomfret", "Regular Fry", null, { priceType:"size", tags:["seafood","fish"] }),
  item("pomfret-white-masala", "pomfret", "White Masala", null, { priceType:"size", tags:["seafood","fish"] }),
  item("pomfret-green", "pomfret", "Green Paplet", null, { priceType:"size", tags:["seafood","fish"] }),

  item("scampi-fry", "scampi", "Fry", null, { priceType:"size", tags:["seafood"] }),
  item("scampi-semi-gravy-red", "scampi", "Semi Gravy (Red)", null, { priceType:"size", tags:["seafood"] }),
  item("scampi-semi-gravy-green", "scampi", "Semi Gravy (Green)", null, { priceType:"size", tags:["seafood"] }),
  item("scampi-full-gravy", "scampi", "Full Gravy", null, { priceType:"size", tags:["seafood"] }),
  item("scampi-khima", "scampi", "Khima", 430, { tags:["seafood"] }),
  item("scampi-dal", "scampi", "Dal Scampi", 450, { tags:["seafood"] }),

  item("seasonal-modar", "seasonal", "Modar", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-bumla", "seasonal", "Bumla", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-gariyu", "seasonal", "Gariyu", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-levta", "seasonal", "Levta", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-chelyu", "seasonal", "Chelyu", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-surmay", "seasonal", "Surmay", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-alvo", "seasonal", "Alvo", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-baagro", "seasonal", "Baagro", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-morva", "seasonal", "Morva", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),
  item("seasonal-jipto", "seasonal", "Jipto", null, { priceType:"seasonal", seasonal:true, tags:["seafood","fish"] }),

  item("egg-boil", "egg", "Boil", 15), item("egg-omlet", "egg", "Omlet", 70),
  item("egg-boil-green-fry", "egg", "Boil Green Fry", 150), item("egg-fry", "egg", "Fry", 120),
  item("egg-kachu", "egg", "Kachu", 170), item("egg-khima-red", "egg", "Khima - Red", 170),
  item("egg-khima-green", "egg", "Khima - Green", 200), item("egg-fry-red", "egg", "Fry - Red", 170),
  item("egg-fry-green", "egg", "Fry - Green", 200), item("egg-curry-red", "egg", "Curry - Red", 170),
  item("egg-curry-green", "egg", "Curry - Green", 200), item("egg-rice-green", "egg", "Rice - Green", 250, { tags:["rice"] }),

  item("chicken-leg-piece", "chicken", "Leg Piece", 230, { group:"Starter - Tandoor" }),
  item("chicken-roasted-bone", "chicken", "Roasted with Bone (6 pcs)", 300, { group:"Starter - Tandoor" }),
  item("chicken-tikka", "chicken", "Tikka", 380, { group:"Starter - Tandoor" }),
  item("chicken-malai-tikka", "chicken", "Malai Tikka", 400, { group:"Starter - Tandoor" }),
  item("chicken-sikh-kabab", "chicken", "Sikh Kabab", 350, { group:"Starter - Tandoor" }),
  item("chicken-fry-boneless", "chicken", "Fry (Boneless)", 300, { group:"Starter - Fry" }),
  item("chicken-fry-bone", "chicken", "Fry (With Bone)", 300, { group:"Starter - Fry" }),
  item("chicken-drumstick", "chicken", "Drumstick (Garlic/Patra) (3 pcs)", 300, { group:"Starter - Fry" }),
  item("chicken-65", "chicken", "Chicken 65", 350, { group:"Starter - Fry" }),
  item("chicken-soup", "chicken", "Soup", 300, { group:"Gravy" }),
  item("chicken-gravy-boneless", "chicken", "Gravy (Boneless)", 350, { group:"Gravy" }),
  item("chicken-gravy-bone", "chicken", "Gravy (With Bone)", 300, { group:"Gravy" }),
  item("chicken-lemon", "chicken", "Lemon Chicken", 350, { group:"Gravy" }),
  item("chicken-butter", "chicken", "Butter Chicken", 350, { group:"Gravy" }),
  item("chicken-gauthi", "chicken", "Gauthi Chicken", 300, { group:"Gravy" }),
  item("chicken-rice-boneless", "chicken", "Rice (Boneless)", 400, { group:"Rice", tags:["rice"] }),
  item("chicken-rice-bone", "chicken", "Rice (With Bone)", 380, { group:"Rice", tags:["rice"] }),
  item("chicken-khichdi", "chicken", "Khichdi (Boneless)", 350, { group:"Rice", tags:["rice"] }),
  item("chicken-gravy-rice", "chicken", "Gravy Rice", 200, { group:"Rice", tags:["rice"] }),

  item("mutton-bheja", "mutton", "Mutton Bheja", 380), item("mutton-gravy", "mutton", "Mutton Gravy", 450),

  item("extra-pav", "extras", "Pav (2 pcs)", 10), item("extra-nan-plain", "extras", "Tandoori Nan Plain", 60),
  item("extra-nan-butter", "extras", "Tandoori Nan Butter", 80), item("extra-garlic-nan", "extras", "Garlic Nan", 100),
  item("extra-roti-plain", "extras", "Tandoori Roti Plain", 30), item("extra-roti-butter", "extras", "Tandoori Roti Butter", 40),
  item("extra-chapati", "extras", "Chapati", 15), item("extra-rotla", "extras", "Rotla", 30),
  item("extra-khichdi", "extras", "Khichdi", 180, { tags:["rice"] }), item("extra-rice-half", "extras", "Rice (Half)", 80, { tags:["rice"] }),
  item("extra-rice-full", "extras", "Rice (Full)", 100, { tags:["rice"] }), item("extra-jeera-rice", "extras", "Jeera Rice", 130, { tags:["rice"] }),
  item("extra-green-chatani-hot", "extras", "Green Chatani (Hot)", 50), item("extra-green-chatani", "extras", "Green Chatani", 10),
  item("extra-tomatto", "extras", "Tomatto Plate", 15), item("extra-roasted-papad", "extras", "Roasted Papad", 20),
  item("extra-fry-papad", "extras", "Fry Papad", 30),

  item("drink-soda", "drinks", "Thumps Up / Coke / Sprite", 20), item("drink-maza", "drinks", "Maza", 20),
  item("drink-sosyo", "drinks", "Sosyo", 20), item("drink-chhas", "drinks", "Butter Milk (Chhas)", 30)
];

const sectionOrder = ["dara","prawn","crab","pomfret","scampi","seasonal","egg","chicken","mutton","extras","drinks"];
const state = { filter:"all", query:"" };
const els = {
  nav:document.querySelector("#categoryNav"), filters:document.querySelector("#filterBar"), sections:document.querySelector("#menuSections"),
  search:document.querySelector("#searchInput"), clear:document.querySelector("#clearSearch"), empty:document.querySelector("#emptyState"),
  count:document.querySelector("#resultCount")
};

function priceLabel(dish){
  if(dish.priceType === "fixed") return `₹${dish.price}`;
  if(dish.priceType === "size") return "As Per Size";
  return "Ask for Price";
}
function matchesFilter(dish){
  if(state.filter === "all") return true;
  if(state.filter === "seafood") return ["dara","prawn","crab","pomfret","scampi","seasonal"].includes(dish.category) || dish.tags.includes("seafood");
  if(state.filter === "fish") return ["dara","pomfret","seasonal"].includes(dish.category) || dish.tags.includes("fish");
  return dish.category === state.filter || dish.tags.includes(state.filter);
}
function matchesQuery(dish){
  if(!state.query) return true;
  const meta = sectionMeta[dish.category] || {};
  return [dish.englishName,dish.category,meta.title,dish.group,dish.note,...dish.tags].join(" ").toLocaleLowerCase().includes(state.query.toLocaleLowerCase());
}
function badges(dish){
  return `<div class="badge-row">${dish.group ? `<span class="badge">${dish.group}</span>` : ""}${dish.seasonal ? '<span class="badge seasonal">Seasonal</span>' : ""}${dish.advanceOrder ? '<span class="badge advance">Pre-order Only</span>' : ""}</div>`;
}
function card(dish){
  return `<article class="menu-card" data-id="${dish.id}"><div>${badges(dish)}<h4 class="dish-title">${dish.englishName}</h4></div><div class="dish-price ${dish.priceType === "fixed" ? "" : "variable"}">${priceLabel(dish)}</div>${dish.note ? `<p class="dish-note">${dish.note}</p>` : ""}</article>`;
}
function renderMenu(){
  const filtered = menuData.filter(d => matchesFilter(d) && matchesQuery(d));
  els.sections.innerHTML = sectionOrder.map(section => {
    const dishes = filtered.filter(d => d.category === section);
    if(!dishes.length) return "";
    const meta = sectionMeta[section];
    return `<section class="menu-section" id="section-${section}"><div class="section-head"><div><h3>${meta.title}</h3>${meta.note ? `<p>${meta.note}</p>` : ""}</div><span class="count-pill">${dishes.length} ${dishes.length === 1 ? "item" : "items"}</span></div><div class="menu-grid">${dishes.map(card).join("")}</div></section>`;
  }).join("");
  els.empty.hidden = filtered.length > 0;
  els.count.textContent = `${filtered.length} ${filtered.length === 1 ? "item" : "items"}${state.filter !== "all" ? ` in ${categories.find(c=>c.id===state.filter)?.label}` : ""}`;
}
function setFilter(filter, scroll = false){
  state.filter = filter;
  document.querySelectorAll("[data-filter]").forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("active",selected);
    button.setAttribute("aria-pressed",String(selected));
  });
  renderMenu();
  if(scroll) document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
}
function makeControls(){
  const html = categories.map(cat => `<button type="button" class="nav-button" data-filter="${cat.id}" aria-pressed="false">${cat.label}</button>`).join("");
  els.nav.innerHTML = html;
  els.filters.innerHTML = categories.map(cat => `<button type="button" class="filter-button" data-filter="${cat.id}" aria-pressed="false">${cat.label}</button>`).join("");
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click",()=>setFilter(button.dataset.filter,true)));
}

els.search.addEventListener("input",event=>{ state.query = event.target.value.trim(); els.clear.classList.toggle("visible",Boolean(state.query)); renderMenu(); });
els.clear.addEventListener("click",()=>{ els.search.value=""; state.query=""; els.clear.classList.remove("visible"); renderMenu(); els.search.focus(); });
document.querySelector("#resetSearch").addEventListener("click",()=>{ els.search.value=""; state.query=""; els.clear.classList.remove("visible"); setFilter("all"); });
document.querySelector("#openSearch").addEventListener("click",()=>{ document.querySelector("#menu").scrollIntoView({behavior:"smooth"}); window.setTimeout(()=>els.search.focus(),450); });
document.querySelector("#reviewButton").addEventListener("click",()=>window.open(GOOGLE_REVIEW_URL,"_blank","noopener,noreferrer"));
document.querySelector("#year").textContent=new Date().getFullYear();
makeControls();
setFilter("all");
