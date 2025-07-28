import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menu = [
  {
    category: "Fresh Juices",
    items: [
      { name: "Fresh Mango", price: 95, image: "/images/mango.jpg" },
      { name: "Fresh Strawberry", price: 70, image: "/images/strawberry.jpg" },
      { name: "Fresh Kiwi", price: 95, image: "/images/kiwi.jpg" },
      { name: "Fresh Orange", price: 70, image: "/images/orange.jpg" },
      { name: "Fresh Watermelon", price: 75, image: "/images/watermelon.jpg" },
      { name: "Fresh Cantaloupe", price: 70, image: "/images/cantaloupe.jpg" },
      { name: "Fresh Cocktail", price: 80, image: "/images/cocktail.jpg" },
      { name: "Fresh Banana", price: 70, image: "/images/banana.jpg" },
      { name: "Fresh Avocado", price: 110, image: "/images/avocado.jpg" },
      { name: "Fresh Lemon Mint", price: 60, image: "/images/lemon_mint.jpg" },
      { name: "Fresh Guava", price: 70, image: "/images/guava.jpg" },
      { name: "Fresh Lemon", price: 60, image: "/images/lemon.jpg" },
      { name: "Fruit Salad", price: 115, image: "/images/fruit_salad.jpg" },
    ],
  },
  {
    category: "Milkshakes",
    items: [
      { name: "Oreo Milkshake", price: 110, image: "/images/oreo_milkshake.jpg" },
      { name: "Caramel Milkshake", price: 95, image: "/images/caramel_milkshake.jpg" },
      { name: "Vanilla Milkshake", price: 95, image: "/images/vanilla_milkshake.jpg" },
      { name: "Lotus Milkshake", price: 110, image: "/images/lotus_milkshake.jpg" },
      { name: "Chocolate Milkshake", price: 95, image: "/images/chocolate_milkshake.jpg" },
      { name: "Fruit Milkshake", price: 110, image: "/images/fruit_milkshake.jpg" },
      { name: "Pistachio Milkshake", price: 110, image: "/images/pistachio_milkshake.jpg" },
      { name: "Strawberry Milkshake", price: 90, image: "/images/strawberry_milkshake.jpg" },
      { name: "Kiwi Milkshake", price: 90, image: "/images/kiwi_milkshake.jpg" },
      { name: "Peach Milkshake", price: 90, image: "/images/peach_milkshake.jpg" },
      { name: "Blueberry Milkshake", price: 90, image: "/images/blueberry_milkshake.jpg" },
      { name: "Raspberry Milkshake", price: 90, image: "/images/raspberry_milkshake.jpg" },
      { name: "Mango Milkshake", price: 90, image: "/images/mango_milkshake.jpg" },
    ],
  },
  {
    category: "Hot Drinks",
    items: [
      { name: "Red Tea", price: 35, image: "/images/red_tea.jpg" },
      { name: "Green Tea", price: 40, image: "/images/green_tea.jpg" },
      { name: "Flavored Tea", price: 50, image: "/images/flavored_tea.jpg" },
      { name: "Tea with Milk", price: 60, image: "/images/tea_milk.jpg" },
      { name: "Hot Cider", price: 60, image: "/images/hot_cider.jpg" },
      { name: "Turkish Coffee Single", price: 45, image: "/images/turkish_coffee.jpg" },
      { name: "Turkish Coffee Double", price: 55, image: "/images/turkish_coffee_double.jpg" },
      { name: "French Coffee", price: 65, image: "/images/french_coffee.jpg" },
      { name: "Hazelnut Coffee", price: 65, image: "/images/hazelnut_coffee.jpg" },
      { name: "Espresso Single", price: 50, image: "/images/espresso.jpg" },
      { name: "Espresso Double", price: 60, image: "/images/espresso_double.jpg" },
      { name: "Hot Chocolate", price: 70, image: "/images/hot_chocolate.jpg" },
      { name: "Caramel Macchiato", price: 70, image: "/images/caramel_macchiato.jpg" },
    ],
  },
];

export default function DollarCafeMenu() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Dollar Cafe Menu</h1>
      <Tabs defaultValue={menu[0].category} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {menu.map((section) => (
            <TabsTrigger key={section.category} value={section.category}>
              {section.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {menu.map((section) => (
          <TabsContent key={section.category} value={section.category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {section.items.map((item) => (
                <Card key={item.name} className="flex flex-col items-center p-4 space-y-2 shadow-md">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full" />
                  <CardContent className="text-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price} EGP</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
