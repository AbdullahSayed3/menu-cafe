import { MenuCategory } from "./types";


const menu:MenuCategory[] = [
  {
    category: { ar: "ميلك شيك", en: "Milkshake" },
    items: [
      { name: { ar: "ميلك شيك أوريو", en: "Oreo Milkshake" }, price: 100, image: "/images/oreo_milkshake.png", description: "Milkshake with Oreo cookies" },
      { name: { ar: "ميلك شيك كراميل", en: "Caramel Milkshake" }, price: 100, image: "/images/caramel_milkshake.jpg" },
      { name: { ar: "ميلك شيك فانيلا", en: "Vanilla Milkshake" }, price: 90, image: "/images/vanilla_milkshake.png" },
      { name: { ar: "ميلك شيك لوتس", en: "Lotus Milkshake" }, price: 110, image: "/images/lotus_milkshake.png", description: "Creamy milkshake with Lotus biscuit spread" },
      { name: { ar: "ميلك شيك شوكلت", en: "Chocolate Milkshake" }, price: 100, image: "/images/chocolate_milkshake.png",description: "Milkshake with rich chocolate flavor" },
      { name: { ar: "ميلك شيك فواكه", en: "Fruit Milkshake" }, price: 110, image: "/images/fruit_milkshake.png" },
      { name: { ar: "ميلك شيك فستق", en: "Pistachio Milkshake" }, price: 110, image: "/images/pistachio_milkshake.png" },
      { name: { ar: "ميلك شيك فراولة", en: "Strawberry Milkshake" }, price: 100, image: "/images/strawberry_milkshake.png" },
      { name: { ar: "ميلك شيك كيوي", en: "Kiwi Milkshake" }, price: 90, image: "/images/kiwi_milkshake.png" },
      { name: { ar: "ميلك شيك خوخ", en: "Peach Milkshake" }, price: 90, image: "/images/peach_milkshake.png" },
      { name: { ar: "ميلك شيك بلوبيري", en: "Blueberry Milkshake" }, price: 100, image: "/images/blueberry_milkshake.png" },
      { name: { ar: "ميلك شيك راسبيري", en: "Raspberry Milkshake" }, price: 90, image: "/images/raspberry_milkshake.png" },
      { name: { ar: "ميلك شيك مانجو", en: "Mango Milkshake" }, price: 100, image: "/images/mango_milkshake.png" },
    ],
  },
  {
    category: { ar: "عصائر فريش", en: "Fresh Juices" },
    items: [
      { name: { ar: "فريش مانجو", en: "Fresh Mango" }, price: 70, image: "/images/Fresh/fresh_mango.png" },
      { name: { ar: "فريش فراولة", en: "Fresh Strawberry" }, price: 70, image: "/images/Fresh/fresh_strawberry.png" },
      { name: { ar: "فريش كيوي", en: "Fresh Kiwi" }, price: 70, image: "/images/Fresh/fresh_kiwi.png" },
      { name: { ar: "فريش برتقال", en: "Fresh Orange" }, price: 70, image: "/images/Fresh/fresh_orange.png" },
      { name: { ar: "فريش بطيخ", en: "Fresh Watermelon" }, price: 75, image: "/images/Fresh/fresh_watermelon.png" },
      { name: { ar: "فريش كنتالوب", en: "Fresh Cantaloupe" }, price: 70, image: "/images/Fresh/fresh_cantaloupe.png" },
      { name: { ar: "فريش كوكتيل", en: "Fresh Cocktail" }, price: 80, image: "/images/Fresh/fresh_cocktail.png" },
      { name: { ar: "فريش موز", en: "Fresh Banana" }, price: 70, image: "/images/Fresh/fresh_banana.png" },
      { name: { ar: "فريش أفوكادو", en: "Fresh Avocado" }, price: 90, image: "/images/Fresh/fresh_avocado.png" },
      { name: { ar: "فريش ليمون نعناع", en: "Fresh Lemon Mint" }, price: 70, image: "/images/Fresh/fresh_lemon_mint.png" },
      { name: { ar: "فريش ليمون", en: "Fresh Lemon" }, price: 60, image: "/images/Fresh/fresh_lemon.png" },
      { name: { ar: "فريش جوافة", en: "Fresh Guava" }, price: 70, image: "/images/Fresh/fresh_guava.png" },
      { name: { ar: "سلطة فواكه", en: "Fruit Salad" }, price: 85, image: "/images/Fresh/fruit_salad.png" },
    ],
  },
  {
    category: { ar: "اسموزي", en: "Smoothies" },
    items: [
      { name: { ar: "اسموزي خوخ", en: "Peach Smoothie" }, price: 75, image: "/images/peach_smoothie.jpg" },
      { name: { ar: "اسموزي راسبيري", en: "Raspberry Smoothie" }, price: 80, image: "/images/raspberry_smoothie.jpg" },
      { name: { ar: "اسموزي باشون", en: "Passion Smoothie" }, price: 80, image: "/images/passion_smoothie.jpg" },
      { name: { ar: "اسموزي ليمون نعناع", en: "Lemon Mint Smoothie" }, price: 75, image: "/images/lemon_mint_smoothie.jpg" },
      { name: { ar: "اسموزي كيوي", en: "Kiwi Smoothie" }, price: 80, image: "/images/kiwi_smoothie.jpg" },
      { name: { ar: "اسموزي مانجو", en: "Mango Smoothie" }, price: 75, image: "/images/mango_smoothie.jpg" },
      { name: { ar: "اسموزي فراولة", en: "Strawberry Smoothie" }, price: 75, image: "/images/strawberry_smoothie.jpg" },
      { name: { ar: "اسموزي بطيخ", en: "Watermelon Smoothie" }, price: 75, image: "/images/watermelon_smoothie.jpg" },
      { name: { ar: "اسموزي رد بيري", en: "Red Berry Smoothie" }, price: 75, image: "/images/red_berry_smoothie.jpg" },
      { name: { ar: "اسموزي بلوبيري", en: "Blueberry Smoothie" }, price: 75, image: "/images/blueberry_smoothie.jpg" },
      { name: { ar: "اسموزي ميكس", en: "Mix Smoothie" }, price: 80, image: "/images/mix_smoothie.jpg",description:"" },
    ],
  },
{
  category: { ar: "زبادي", en: "Yoghurt" },
  items: [
    { name: { ar: "زبادي سادة", en: "Plain Yoghurt" }, price: 80, image: "/images/plain_yoghurt.jpg" },
    { name: { ar: "زبادي مانجا", en: "Mango Yoghurt" }, price: 85, image: "/images/mango_smoothie.jpg" },
    { name: { ar: "زبادي فراولة", en: "Strawberry Yoghurt" }, price: 85, image: "/images/strawberry_smoothie.jpg" },
    { name: { ar: "زبادي بطيخ", en: "Watermelon Yoghurt" }, price: 85, image: "/images/watermelon_smoothie.jpg" },
    { name: { ar: "زبادي خوخ", en: "Peach Yoghurt" }, price: 85, image: "/images/peach_smoothie.jpg" },
    { name: { ar: "زبادي كيوي", en: "Kiwi Yoghurt" }, price: 85, image: "/images/kiwi_smoothie.jpg" },
    { name: { ar: "زبادي فانيليا", en: "Vanilla Yoghurt" }, price: 85, image: "/images/vanilla_yoghurt.jpg" },
    { name: { ar: "زبادي باشون", en: "Passion Yoghurt" }, price: 85, image: "/images/passion_smoothie.jpg" },
    { name: { ar: "زبادي راسبيري", en: "Raspberry Yoghurt" }, price: 85, image: "/images/raspberry_smoothie.jpg" },
    { name: { ar: "زبادي دبل بيري", en: "Double Berry Yoghurt" }, price: 85, image: "/images/red_berry_smoothie.jpg" },
    { name: { ar: "زبادي بلوبري", en: "Blueberry Yoghurt" }, price: 85, image: "/images/blueberry_smoothie.jpg" },
    { name: { ar: "زبادي ميكس", en: "Mix Yoghurt" }, price: 95, image: "/images/mix_smoothie.jpg" },
  ]
},

  {
    category: { ar: "حلويات", en: "Desserts" },
    items: [
      { name: { ar: "وافل شوكولاتة", en: "Chocolate Waffle" }, price: 80, image: "/images/chocolate_waffle.jpg" },
      { name: { ar: "وافل نوتيلا", en: "Nutella Waffle" }, price: 100, image: "/images/nutella_waffle.jpg" },
      { name: { ar: "وافل فستق", en: "Pistachio Waffle" }, price: 100, image: "/images/pistachio_waffle.jpg" },
      { name: { ar: "وافل لوتس", en: "Lotus Waffle" }, price: 100, image: "/images/lotus_waffle.jpg" },
      { name: { ar: "وافل ميكس", en: "Mix Waffle" }, price: 140, image: "/images/mix_waffle.jpg" },
      { name: { ar: "وافل كراميل", en: "Caramel Waffle" }, price: 80, image: "/images/caramel_waffle.jpg" },
      { name: { ar: "وافل تشيز كيك", en: "Cheesecake Waffle" }, price: 80, image: "/images/cheesecake_waffle.jpg" },
      { name: { ar: "أم علي كبيرة", en: "Large Om Ali" }, price: 110, image: "/images/om_ali_large.jpg" },
      { name: { ar: "أم علي صغيرة", en: "Small Om Ali" }, price: 80, image: "/images/om_ali_small.jpg" },
      { name: { ar: "بليلة", en: "Belila" }, price: 60, image: "/images/belila.jpg" },
      { name: { ar: "مولتن كيك", en: "Molten Cake" }, price: 110, image: "/images/molten_cake.jpg" },
    ],
  },
  {
  category: { ar: "إضافات", en: "Extras" },
  items: [
    { name: { ar: "فانيلا", en: "Vanilla Extra" }, price: 25, image: "/images/vanilla_extra.jpg" },
    { name: { ar: "كراميل", en: "Caramel Extra" }, price: 25, image: "/images/caramel_extra.jpg" },
    { name: { ar: "اكسترا بندق", en: "Hazelnut Extra" }, price: 25, image: "/images/pine_nut_extra.jpg" },
    { name: { ar: "اكسترا شوكولاتة", en: "Chocolate Extra" }, price: 25, image: "/images/companies_extra.jpg" },
    { name: { ar: "اكسترا عسل", en: "Honey Extra" }, price: 20, image: "/images/special_extra.jpg" },
    { name: { ar: "اكسترا لبن", en: "Milk Extra" }, price: 20, image: "/images/light_extra.jpg" },
    { name: { ar: "شاي", en: "Tea Extra" }, price: 15, image: "/images/tea_extra.jpg" },
    { name: { ar: "توينج", en: "Twinge" }, price: 25, image: "/images/twinge.jpg" },
    { name: { ar: "شوت إسبريسو", en: "Espresso Shot" }, price: 30, image: "/images/espresso_shot.jpg" },
    { name: { ar: "فواكه", en: "Fruit" }, price: 30, image: "/images/fruit_mix.jpg" },
  ],
},
  {
  category: { ar: "مشروبات ساخنة", en: "Hot Drinks" },
  items: [
  // ✅ الشاي والمشروبات العشبية
  { name: { ar: "شاي أحمر", en: "Red Tea" }, price: 30, image: "/images/red_tea.jpg" },
  { name: { ar: "يانسون", en: "Yanson" }, price: 35, image: "/images/yanson.jpg" },
  { name: { ar: "شاي نعناع", en: "Mint Tea" }, price: 35, image: "/images/mint_tea.jpg" },
  { name: { ar: "شاي أخضر", en: "Green Tea" }, price: 35, image: "/images/green_tea.jpg" },
  { name: { ar: "كوفي ميكس", en: "Coffee Mix" }, price: 40, image: "/images/coffee_mix.jpg" },
  { name: { ar: "شاي بنكهة", en: "Flavored Tea" }, price: 50, image: "/images/flavored_tea.jpg" },
  { name: { ar: "حمص الشام", en: "Hummus El Sham" }, price: 55, image: "/images/hummus_el_sham.jpg" },
  { name: { ar: "كورتادو", en: "Cortado" }, price: 50, image: "/images/cortado.jpg" },
  { name: { ar: "شاي بحليب", en: "Milk Tea" }, price: 55, image: "/images/milk_tea.jpg" },  // جديد
  { name: { ar: "ميكس أعشاب", en: "Herbal Mix" }, price: 55, image: "/images/herbal_mix.jpg" },

  // ✅ مشروبات ساخنة متنوعة
  { name: { ar: "سيدر ساخن", en: "Hot Cider" }, price: 60, image: "/images/hot_cider.jpg" },
  { name: { ar: "ليمون ساخن", en: "Hot Lemon" }, price: 40, image: "/images/hot_lemon.jpg" },
  { name: { ar: "جنزبيل", en: "Ginger Tea" }, price: 45, image: "/images/ginger_tea.jpg" },
  { name: { ar: "نسكافيه", en: "Nescafe" }, price: 60, image: "/images/nescafe.jpg" },
  { name: { ar: "سحلب", en: "Sahlab" }, price: 60, image: "/images/sahlab.jpg" },

  // ✅ قهوة تركي و إسبريسو
  { name: { ar: "قهوة تركي (سنجل)", en: "Turkish Coffee (Single)" }, price: 45, image: "/images/turkish_coffee_single.jpg" },
  { name: { ar: "قهوة تركي (دابل)", en: "Turkish Coffee (Double)" }, price: 55, image: "/images/turkish_coffee_double.jpg" },
  { name: { ar: "إسبريسو (سنجل)", en: "Espresso (Single)" }, price: 50, image: "/images/espresso_single.jpg" },
  { name: { ar: "إسبريسو (دابل)", en: "Espresso (Double)" }, price: 60, image: "/images/espresso_double.jpg" },
  { name: { ar: "ميكاتو (سنجل)", en: "Macchiato (Single)" }, price: 60, image: "/images/macchiato_single.jpg" },  // جديد
  { name: { ar: "ميكاتو (دابل)", en: "Macchiato (Double)" }, price: 65, image: "/images/macchiato_double.jpg" },  // جديد

  // ✅ أنواع القهوة المميزة
  { name: { ar: "قهوة فرنسية", en: "French Coffee" }, price: 55, image: "/images/french_coffee.jpg" },
  { name: { ar: "قهوة بندق", en: "Hazelnut Coffee" }, price: 55, image: "/images/hazelnut_coffee.jpg" }, // جديد
  { name: { ar: "هيزنَت كوفي", en: "Hazelnut Latte" }, price: 60, image: "/images/hazelnut_latte.jpg" }, // جديد، اسم بديل
  { name: { ar: "سبانيش لاتيه", en: "Spanish Latte" }, price: 75, image: "/images/spanish_latte.jpg" }, // جديد
  { name: { ar: "فلات وايت", en: "Flat White" }, price: 80, image: "/images/flat_white.jpg" },
  { name: { ar: "أمريكان كوفي", en: "American Coffee" }, price: 60, image: "/images/american_coffee.jpg" },
  { name: { ar: "موكا", en: "Mocha" }, price: 70, image: "/images/mocha.jpg" },
  { name: { ar: "هوت شوكليت", en: "Hot Chocolate" }, price: 70, image: "/images/hot_chocolate.jpg" },
  { name: { ar: "كاراميل ميكاتو", en: "Caramel Macchiato" }, price: 70, image: "/images/caramel_macchiato.jpg" },
  { name: { ar: "لاتيه لوتس", en: "Lotus Latte" }, price: 70, image: "/images/lotus_latte.jpg" }, // جديد

  // ✅ كابتشينو
  { name: { ar: "كابتشينو (ميديام)", en: "Cappuccino (Medium)" }, price: 75, image: "/images/cappuccino_medium.jpg" }, // جديد
  { name: { ar: "كابتشينو (لارج)", en: "Cappuccino (Large)" }, price: 85, image: "/images/cappuccino.jpg" }
],
},

{
  category: { ar: "مشروبات غازية", en: "Soft Drinks" },
  items: [

    { name: { ar: "كولا", en: "Cola" }, price: 45, image: "/images/cola.jpg" },
    { name: { ar: "كولا زيرو", en: "Zero Cola" }, price: 45, image: "/images/zero_cola.jpg" },
    { name: { ar: "بيبسي", en: "Pepsi" }, price: 45, image: "/images/pepsi.jpg" },
    { name: { ar: "بيبسي زيرو", en: "Pepsi Zero" }, price: 45, image: "/images/pepsi_zero.jpg" },
    { name: { ar: "فانتا", en: "Fanta" }, price: 45, image: "/images/fanta.jpg" },
    { name: { ar: "سبرايت", en: "Sprite" }, price: 45, image: "/images/sprite.jpg" },
    { name: { ar: "ميريندا", en: "Mirinda" }, price: 45, image: "/images/mirinda.jpg" },
    { name: { ar: "سيفن أب", en: "7 Up" }, price: 45, image: "/images/7up.jpg" },           
    { name: { ar: "V كولا", en: "V Cola" }, price: 50, image: "/images/v_cola.jpg" },       
    { name: { ar: "فيوري", en: "Fury" }, price: 45, image: "/images/fury.jpg" },           
    { name: { ar: "فيروز", en: "Fayrouz" }, price: 60, image: "/images/fayrouz.jpg" },
    { name: { ar: "شويبس", en: "Schweppes" }, price: 60, image: "/images/schweppes.jpg" },
    { name: { ar: "تويست", en: "Twist" }, price: 65, image: "/images/twist.jpg" },   
    { name: { ar: "بيريل", en: "Birell" }, price: 50, image: "/images/birell.jpg" },
    { name: { ar: "ريد بول", en: "Red Bull" }, price: 85, image: "/images/red_bull.jpg" },
    { name: { ar: "مياه", en: "Water" }, price: 15, image: "/images/water.jpg" },
  ],
},
{
  category: { ar: "مهيتو", en: "Mojitos" },
  items: [
    { name: { ar: "مهيتو كلاسيك", en: "Classic Mojito" }, price: 80, image: "/images/classic_mojito.jpg" },
    { name: { ar: "مهيتو ريد بول", en: "Red Bull Mojito" }, price: 110, image: "/images/red_bull_mojito.jpg" },
    { name: { ar: "مهيتو راسبيري", en: "Raspberry Mojito" }, price: 80, image: "/images/raspberry_mojito.jpg" },
    { name: { ar: "مهيتو بلوبيري", en: "Blueberry Mojito" }, price: 80, image: "/images/blueberry_mojito.jpg" },
    { name: { ar: "مهيتو خوخ", en: "Peach Mojito" }, price: 80, image: "/images/peach_mojito.jpg" },
    { name: { ar: "مهيتو باشون", en: "Passion Mojito" }, price: 85, image: "/images/passion_mojito.jpg" },
    { name: { ar: "مهيتو فراولة", en: "Strawberry Mojito" }, price: 80, image: "/images/strawberry_mojito.jpg" },
    { name: { ar: "مهيتو كيوي", en: "Kiwi Mojito" }, price: 80, image: "/images/kiwi_mojito.jpg" },
    { name: { ar: "مهيتو شيري", en: "Cherry Mojito" }, price: 80, image: "/images/cherry_mojito.jpg" },
    { name: { ar: "مهيتو بطيخ", en: "Watermelon Mojito" }, price: 80, image: "/images/watermelon_mojito.jpg" }, // جديد
    { name: { ar: "مهيتو أناناس", en: "Pineapple Mojito" }, price: 80, image: "/images/pineapple_mojito.jpg" }, // جديد
    { name: { ar: "مهيتو مانجو", en: "Mango Mojito" }, price: 80, image: "/images/mango_mojito.jpg" },
    { name: { ar: "مهيتو رمان", en: "Pomegranate Mojito" }, price: 80, image: "/images/pomegranate_mojito.jpg" }
  ]
},
{
  category: { ar: "صن شاين", en: "Sunshine Drinks" },
  items: [
    { name: { ar: "صن شاين رمان", en: "Pomegranate Sunshine" }, price: 85, image: "/images/pomegranate_sunshine.jpg" },
    { name: { ar: "صن شاين بلوبري", en: "Blueberry Sunshine" }, price: 85, image: "/images/blueberry_sunshine.jpg" },
    { name: { ar: "صن شاين نعناع", en: "Mint Sunshine" }, price: 85, image: "/images/mint_sunshine.jpg" },
    { name: { ar: "صن شاين راسبيري", en: "Raspberry Sunshine" }, price: 85, image: "/images/raspberry_sunshine.jpg" }, 
    { name: { ar: "صن شاين كلاسيك", en: "Classic Sunshine" }, price: 75, image: "/images/classic_sunshine.jpg" },
    { name: { ar: "صن شاين كيوي", en: "Kiwi Sunshine" }, price: 85, image: "/images/kiwi_sunshine.jpg" },
    { name: { ar: "صن شاين فراولة", en: "Strawberry Sunshine" }, price: 85, image: "/images/strawberry_sunshine.jpg" },
    { name: { ar: "صن شاين مانجو", en: "Mango Sunshine" }, price: 85, image: "/images/mango_sunshine.jpg" },
    { name: { ar: "صن شاين ميكس", en: "Mix Sunshine" }, price: 90, image: "/images/mix_sunshine.jpg" },
    { name: { ar: "صن شاين أناناس", en: "Pineapple Sunshine" }, price: 85, image: "/images/pineapple_sunshine.jpg" }, 
    { name: { ar: "صن شاين بطيخ", en: "Watermelon Sunshine" }, price: 85, image: "/images/watermelon_sunshine.jpg" },
    { name: { ar: "صن شاين خوخ", en: "Peach Sunshine" }, price: 85, image: "/images/peach_sunshine.jpg" },
    { name: { ar: "صن شاين باشون", en: "Passion Sunshine" }, price: 85, image: "/images/passion_sunshine.jpg" }],
  },
{
  category: { ar: "فرابيه", en: "Frappes" },
  items: [
  { name: { ar: "فرابتشينو", en: "Frappuccino" }, price: 90, image: "/images/caramel_frappe.jpg" },
  { name: { ar: "كراميل كوفي فرابيه", en: "Caramel Coffee Frappe" }, price: 85, image: "/images/coffee_frappe.jpg" },
  { name: { ar: "أوريو فرابيه", en: "Oreo Frappe" }, price: 85, image: "/images/oreo_frappe.jpg" },
  { name: { ar: "فرابيه موكا", en: "Mocha Frappe" }, price: 85, image: "/images/mocha_frappe.jpg" },
  { name: { ar: "فرابيه لوتس", en: "Lotus Frappe" }, price: 90, image: "/images/lotus_frappe.jpg" },
  { name: { ar: "فرابيه شوكولاتة", en: "Chocolate Frappe" }, price: 85, image: "/images/chocolate_frappe.jpg" },
  { name: { ar: "فرابيه نوتيلا", en: "Nutella Frappe" }, price: 85, image: "/images/nutella_frappe.jpg" }
],
},
{
  category: { ar: "ايس كوفي", en: "Iced Coffee" },
  items: [
    { name: { ar: "ايس لاتيه", en: "Iced Latte" }, price: 65, image: "/images/iced_latte.jpg" },
    { name: { ar: "ايس موكا", en: "Iced Mocha" }, price: 75, image: "/images/iced_mocha.jpg" },
    { name: { ar: "ايس كوفي", en: "Iced Coffee" }, price: 70, image: "/images/iced_coffee.jpg" },
  ],
},
{
  category: { ar: "شيشة", en: "Hookah" },
  items: [
    { name: { ar: "خلطة نكهات", en: "Mix Flavors" }, price: 130, image: "/images/hookah_mix.jpg" },
    { name: { ar: "معسل", en: "Molasses" }, price: 30, image: "/images/hookah_molasses.jpg" },
  ],
}

];
export default menu;
