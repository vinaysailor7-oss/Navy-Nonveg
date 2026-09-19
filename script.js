"use strict";

// Replace this value with the restaurant's real Google review link.
const GOOGLE_REVIEW_URL = "ADD_GOOGLE_REVIEW_LINK_HERE";

const categories = [
  { id: "all", label: "All", gu: "બધું" },
  { id: "quick", label: "Quick", gu: "ઝડપી" },
  { id: "seafood", label: "Seafood", gu: "સી ફૂડ" },
  { id: "fish", label: "Fish", gu: "મચ્છી" },
  { id: "prawn", label: "Prawn", gu: "ઝીંગા" },
  { id: "egg", label: "Egg", gu: "ઈંડા" },
  { id: "chicken", label: "Chicken", gu: "ચિકન" },
  { id: "mutton", label: "Mutton", gu: "મટન" },
  { id: "rice", label: "Rice", gu: "રાઇસ" },
  { id: "side", label: "Side Dish", gu: "સાઇડ ડિશ" }
];

const sectionMeta = {
  quick: { title: "Quick Menu", gu: "ઝડપી મેનુ", note: "House favourites, ready without the wait" },
  egg: { title: "Egg Dish", gu: "ઈંડાની વાનગી", note: "All dishes are prepared with 2 eggs" },
  chicken: { title: "Chicken Dish", gu: "ચિકન વાનગી", note: "Available with bone or boneless" },
  mutton: { title: "Mutton Dish", gu: "મટન વાનગી", note: "By advance order" },
  prawn: { title: "Prawn", gu: "ઝીંગા", note: "150 gram portion" },
  daro: { title: "Daro", gu: "દારો", note: "200 gram portion", mustTry: true },
  crab: { title: "Karchla / Crab", gu: "કરચલા", note: "Price as per size" },
  pomfret: { title: "Paplet / Pomfret", gu: "પાપલેટ", note: "Price as per size", mustTry: true },
  sotiya: { title: "Sotiya", gu: "સોટીયા", note: "Price as per size" },
  seasonal: { title: "Seasonal Fish", gu: "સીઝનલ મચ્છી", note: "Subject to availability · By advance order" },
  side: { title: "Side Dish", gu: "સાઇડ ડિશ", note: "The perfect finishing touch" }
};

const item = (id, category, gujaratiName, englishName, price, options = {}) => ({
  id, category, gujaratiName, englishName, price,
  priceType: options.priceType || "fixed",
  mustTry: Boolean(options.mustTry), seasonal: Boolean(options.seasonal),
  advanceOrder: Boolean(options.advanceOrder), note: options.note || "",
  tags: options.tags || []
});

const menuData = [
  item("quick-chicken-gravy", "quick", "ચિકન ગ્રેવી રેડ", "Chicken Gravy Red", 250, { tags:["chicken"] }),
  item("quick-chicken-fry", "quick", "ચિકન ફ્રાય રેડ બોનલેસ", "Chicken Fry Red Boneless", 250, { tags:["chicken"] }),
  item("quick-prawn-gravy", "quick", "ઝીંગા ગ્રેવી રેડ", "Prawn Gravy Red", 300, { tags:["seafood","prawn"] }),
  item("quick-prawn-fry", "quick", "ઝીંગા ફ્રાય રેડ", "Prawn Fry Red", 300, { tags:["seafood","prawn"] }),
  item("quick-fish-fry", "quick", "મચ્છી ફ્રાય બોનલેસ", "Fish Fry Boneless", 300, { tags:["seafood","fish"] }),
  item("quick-boil-egg", "quick", "બોઇલ એગ", "Boil Egg", 20, { tags:["egg"] }),
  item("quick-roasted-papad", "quick", "રોસ્ટેડ પાપડ", "Roasted Papad", 20, { tags:["side"] }),
  item("quick-masala-papad", "quick", "મસાલા પાપડ", "Masala Papad", 60, { tags:["side"] }),

  item("egg-omlet", "egg", "ઈંડા ઓમલેટ", "Egg Omlet", 80),
  item("egg-stuff-omlet", "egg", "ઈંડા સ્ટફ ઓમલેટ", "Egg Stuff Omlet", 170),
  item("egg-boil", "egg", "ઈંડા બોઇલ", "Egg Boil", 20),
  item("egg-boil-fry", "egg", "ઈંડા બોઇલ ફ્રાય", "Egg Boil Fry", 80),
  item("egg-kachu", "egg", "ઈંડા કાચું", "Egg Kachu", 150),
  item("egg-cutlet", "egg", "ઈંડા કટલેટ", "Egg Cutlet", 99),
  item("egg-fry", "egg", "ઈંડા ફ્રાય", "Egg Fry (Red/Green)", 150),
  item("egg-khima", "egg", "ઈંડા ખીમો", "Egg Khima", 120),
  item("egg-kari", "egg", "ઈંડા કરી", "Egg Kari", 130),
  item("egg-rice", "egg", "ઈંડા રાઇસ", "Egg Rice", 199, { tags:["rice"] }),
  item("egg-khichdi", "egg", "ઈંડા ખીચડી", "Egg Khichdi", 199, { tags:["rice"] }),

  item("chicken-fry", "chicken", "ચિકન ફ્રાય", "Chicken Fry", 250),
  item("chicken-gravy", "chicken", "ચિકન ગ્રેવી", "Chicken Gravy", 250),
  item("chicken-salt-paper", "chicken", "ચિકન (સોલ્ટ & પેપર)", "Chicken Salt & Paper", 200),
  item("butter-chicken", "chicken", "બટર ચિકન", "Butter Chicken", 350),
  item("black-paper-chicken", "chicken", "બ્લેક પેપર ચિકન", "Black Paper Chicken", 350),
  item("lemon-chicken", "chicken", "લેમન ચિકન", "Lemon Chicken", 350),

  item("mutton-gravy", "mutton", "મટન ગ્રેવી", "Mutton Gravy", null, { priceType:"advance", advanceOrder:true }),
  item("mutton-fry", "mutton", "મટન ફ્રાય", "Mutton Fry", null, { priceType:"advance", advanceOrder:true }),
  item("paya-soup", "mutton", "પાયા સૂપ", "Paya Soup", null, { priceType:"advance", advanceOrder:true }),
  item("kaleji", "mutton", "કલેજું", "Kaleji", null, { priceType:"advance", advanceOrder:true }),
  item("mutton-khima", "mutton", "મટન ખીમો", "Mutton Khima", null, { priceType:"advance", advanceOrder:true }),
  item("bheja", "mutton", "ભેજું", "Bheja", null, { priceType:"advance", advanceOrder:true }),

  item("prawn-fry-regular", "prawn", "ઝીંગા ફ્રાય (રેગ્યુલર)", "Fry (Regular)", 300, { tags:["seafood"] }),
  item("prawn-fry-garlic", "prawn", "ઝીંગા ફ્રાય (ગાર્લિક બટર)", "Fry (Garlic Butter)", 350, { tags:["seafood"] }),
  item("prawn-gravy", "prawn", "ઝીંગા ગ્રેવી", "Gravy", 300, { tags:["seafood"] }),
  item("prawn-khimo", "prawn", "ઝીંગા ખીમો", "Khimo", 350, { tags:["seafood"] }),
  item("prawn-biryani", "prawn", "ઝીંગા બિરયાની", "Biryani", 400, { tags:["seafood","rice"] }),

  item("daro-fry-regular", "daro", "દારો ફ્રાય (રેગ્યુલર)", "Fry (Regular)", 600, { tags:["seafood","fish"] }),
  item("daro-fry-chatni", "daro", "દારો ફ્રાય (ચટણી મસાલા)", "Fry (Chatni Masala)", 650, { tags:["seafood","fish"] }),
  item("daro-fry-safed", "daro", "દારો ફ્રાય (સફેદ મસાલા)", "Fry (Safed Masala)", 600, { tags:["seafood","fish"] }),
  item("daro-gravy", "daro", "દારો ગ્રેવી", "Gravy", 600, { tags:["seafood","fish"] }),
  item("daro-safedo", "daro", "દારો સફેદો (પાતરા)", "Safedo (Patra)", 650, { tags:["seafood","fish"] }),
  item("daro-biryani", "daro", "દારો બિરયાની", "Biryani (100 gram)", 500, { tags:["seafood","fish","rice"] }),

  item("crab-fry", "crab", "કરચલા ફ્રાય", "Fry", null, { priceType:"size", tags:["seafood","fish"] }),
  item("crab-gravy", "crab", "કરચલા ગ્રેવી", "Gravy", null, { priceType:"size", tags:["seafood","fish"] }),
  item("crab-soup", "crab", "કરચલા સૂપ", "Soup", null, { priceType:"size", tags:["seafood","fish"], advanceOrder:true }),
  item("crab-khimo", "crab", "કરચલા ખીમો", "Khimo", null, { priceType:"size", tags:["seafood","fish"], advanceOrder:true }),

  item("pomfret-fry", "pomfret", "પાપલેટ ફ્રાય (રેગ્યુલર)", "Fry (Regular)", null, { priceType:"size", tags:["seafood","fish"] }),
  item("pomfret-safed", "pomfret", "પાપલેટ ફ્રાય (સફેદ મસાલા)", "Fry (Safed Masala)", null, { priceType:"size", tags:["seafood","fish"] }),
  item("pomfret-chatni", "pomfret", "પાપલેટ ફ્રાય (ચટણી મસાલા)", "Fry (Chatni Masala)", null, { priceType:"size", tags:["seafood","fish"] }),
  item("pomfret-gravy", "pomfret", "પાપલેટ ગ્રેવી", "Gravy", null, { priceType:"size", tags:["seafood","fish"] }),

  item("sotiya-fry", "sotiya", "સોટીયા ફ્રાય (રેગ્યુલર)", "Fry (Regular)", null, { priceType:"size", tags:["seafood","fish"] }),
  item("sotiya-garlic", "sotiya", "સોટીયા ફ્રાય (ગાર્લિક બટર)", "Fry (Garlic Butter)", null, { priceType:"size", tags:["seafood","fish"] }),
  item("sotiya-gravy", "sotiya", "સોટીયા ગ્રેવી", "Gravy", null, { priceType:"size", tags:["seafood","fish"] }),
  item("sotiya-khimo", "sotiya", "સોટીયા ખીમો", "Khimo", null, { priceType:"size", tags:["seafood","fish"] }),
  item("sotiya-biryani", "sotiya", "સોટીયા બિરયાની", "Biryani", null, { priceType:"size", tags:["seafood","fish","rice"] }),

  item("seasonal-modar", "seasonal", "મોદાર", "Modar", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-jiplo", "seasonal", "જીપલો", "Jiplo", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-morva", "seasonal", "મોરવા", "Morva", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-alvo", "seasonal", "અલવો", "Alvo", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-bagra", "seasonal", "બાગરા", "Bagra", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-boomla", "seasonal", "બૂમલા", "Boomla", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-levta", "seasonal", "લેવટા", "Levta", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-surmai", "seasonal", "સુરમાય", "Surmai", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-chelyu", "seasonal", "ચેલ્યુ", "Chelyu", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-gariyu", "seasonal", "ગરીયું", "Gariyu", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-kaska", "seasonal", "કાસકા", "Kaska", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-raja", "seasonal", "રાજા", "Raja", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-varkhada", "seasonal", "વરખદા", "Varkhada", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),
  item("seasonal-magre", "seasonal", "મગરે", "Magre", null, { priceType:"seasonal", seasonal:true, advanceOrder:true, tags:["seafood","fish"] }),

  item("roti", "side", "રોટલી", "Roti", 10),
  item("butter-roti", "side", "રોટલી (બટર)", "Roti - Butter", 20),
  item("rotla", "side", "રોટલા (ઓર્ડર થી)", "Rotla (By Order)", 25, { advanceOrder:true }),
  item("plain-rice", "side", "પ્લેન રાઇસ", "Plain Rice", 100, { tags:["rice"] }),
  item("jeera-rice", "side", "જીરા રાઇસ", "Jeera Rice", 130, { tags:["rice"] }),
  item("khichdi", "side", "ખિચડી", "Khichdi", 150, { tags:["rice"] }),
  item("onion-salad", "side", "સલાડ (ઓનિયન)", "Salad (Onion)", 10),
  item("tomato-salad", "side", "સલાડ (ટામેટા)", "Salad (Tomato)", 20),
  item("green-chatni", "side", "ગ્રીન ચટણી", "Green Chatni", 20),
  item("masala-papad", "side", "મસાલા પાપડ", "Masala Papad", 50)
];

const extrasData = [
  { name:"Green Gravy", gu:"ગ્રીન ગ્રેવી", price:50 },
  { name:"Butter Preparation", gu:"બટર પ્રિપરેશન", price:50 },
  { name:"Boneless Daro", gu:"બોનલેસ દારો", price:200 }
];

const sectionOrder = ["quick","egg","chicken","mutton","prawn","daro","crab","pomfret","sotiya","seasonal","side"];
const state = { filter:"all", query:"", language:"both" };

const els = {
  nav:document.querySelector("#categoryNav"), filters:document.querySelector("#filterBar"),
  sections:document.querySelector("#menuSections"), search:document.querySelector("#searchInput"),
  clear:document.querySelector("#clearSearch"), empty:document.querySelector("#emptyState"),
  count:document.querySelector("#resultCount"), language:document.querySelector("#languageSelect")
};

function priceLabel(dish){
  if(dish.priceType === "fixed") return `₹${dish.price}`;
  if(dish.priceType === "size") return "Price As Per Size";
  if(dish.priceType === "seasonal") return "Ask for Price";
  return "By Advance Order";
}

function matchesFilter(dish){
  if(state.filter === "all") return true;
  if(state.filter === "seafood") return ["prawn","daro","crab","pomfret","sotiya","seasonal"].includes(dish.category) || dish.tags.includes("seafood");
  if(state.filter === "fish") return ["daro","crab","pomfret","sotiya","seasonal"].includes(dish.category) || dish.tags.includes("fish");
  if(state.filter === "rice") return dish.tags.includes("rice");
  if(state.filter === "side") return dish.category === "side" || dish.tags.includes("side");
  return dish.category === state.filter || dish.tags.includes(state.filter);
}

function matchesQuery(dish){
  if(!state.query) return true;
  const meta = sectionMeta[dish.category] || {};
  const searchable = [dish.englishName,dish.gujaratiName,dish.category,meta.title,meta.gu,...dish.tags].join(" ").toLocaleLowerCase();
  return searchable.includes(state.query.toLocaleLowerCase());
}

function badges(dish){
  return `<div class="badge-row">${dish.mustTry ? '<span class="badge must">★ Must Try</span>' : ""}${dish.seasonal ? '<span class="badge seasonal">Seasonal</span>' : ""}${dish.advanceOrder ? '<span class="badge advance">Advance Order</span>' : ""}</div>`;
}

function card(dish){
  return `<article class="menu-card" data-id="${dish.id}"><div>${badges(dish)}<h4 class="dish-gu" lang="gu">${dish.gujaratiName}</h4><p class="dish-en">${dish.englishName}</p></div><div class="dish-price ${dish.priceType === "fixed" ? "" : "variable"}">${priceLabel(dish)}</div>${dish.note ? `<p class="dish-note">${dish.note}</p>` : ""}</article>`;
}

function seasonalPlaceholder(){
  if(state.query || !["all","seafood","fish"].includes(state.filter)) return "";
  const meta = sectionMeta.seasonal;
  return `<section class="menu-section" id="section-seasonal"><div class="section-head"><div><h3><span class="section-gu" lang="gu">${meta.gu}</span><span class="section-slash"> / </span><span class="section-en">${meta.title}</span></h3><p>${meta.note}</p></div><span class="count-pill">Seasonal</span></div><div class="menu-card"><div><div class="badge-row"><span class="badge seasonal">Seasonal</span></div><h4 class="dish-gu" lang="gu">સીઝનલ મચ્છી</h4><p class="dish-en">Names will be added from the original menu reference.</p></div><div class="dish-price variable">Ask for Price</div></div></section>`;
}

function renderMenu(){
  const filtered = menuData.filter(d => matchesFilter(d) && matchesQuery(d));
  els.sections.innerHTML = sectionOrder.map(section => {
    const dishes = filtered.filter(d => d.category === section);
    if(section === "seasonal" && !dishes.length) return seasonalPlaceholder();
    if(!dishes.length) return "";
    const meta = sectionMeta[section];
    const freshFishHeader = section === "prawn" && !state.query ? `<div class="category-divider"><div><h3>Fresh Fish Menu</h3><p>Fresh catch · Subject to availability</p></div><span aria-hidden="true">◉</span></div>` : "";
    return `${freshFishHeader}<section class="menu-section" id="section-${section}"><div class="section-head"><div><h3><span class="section-gu" lang="gu">${meta.gu}</span><span class="section-slash"> / </span><span class="section-en">${meta.title}</span></h3><p>${meta.note}</p></div><div class="section-meta">${meta.mustTry ? '<span class="badge must">★ Must Try</span>' : ""}<span class="count-pill">${dishes.length} ${dishes.length === 1 ? "dish" : "dishes"}</span></div></div><div class="menu-grid">${dishes.map(card).join("")}</div></section>`;
  }).join("");
  els.empty.hidden = filtered.length > 0 || Boolean(seasonalPlaceholder());
  els.count.textContent = `${filtered.length} ${filtered.length === 1 ? "dish" : "dishes"}${state.filter !== "all" ? ` in ${categories.find(c=>c.id===state.filter)?.label}` : ""}`;
  document.body.dataset.language = state.language;
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
els.language.addEventListener("change",event=>{ state.language=event.target.value; renderMenu(); });
document.querySelector("#reviewButton").addEventListener("click",()=>{
  const status=document.querySelector("#reviewStatus");
  if(!GOOGLE_REVIEW_URL || GOOGLE_REVIEW_URL === "ADD_GOOGLE_REVIEW_LINK_HERE") { status.textContent="Google review link will be available here soon."; return; }
  window.open(GOOGLE_REVIEW_URL,"_blank","noopener,noreferrer");
});
document.querySelector("#extrasGrid").innerHTML = extrasData.map(extra=>`<article class="extra-card"><div><strong>${extra.name}</strong><div lang="gu">${extra.gu}</div></div><span>+₹${extra.price}</span></article>`).join("");
document.querySelector("#year").textContent=new Date().getFullYear();
makeControls(); setFilter("all");
