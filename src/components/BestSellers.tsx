import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '../hooks/use-cart';
import monstera from "../assets/prod-monstera.jpg";
import pearls from "../assets/prod-pearls.jpg";
import peacelily from "../assets/prod-peacelily.jpg";
import fiddle from "../assets/prod-fiddle.jpg";
import pothos from "../assets/prod-pothos.jpg";
import snake from "../assets/prod-snake.jpg";
import bird from "../assets/prod-bird.jpg";
import zz from "../assets/prod-zz.jpg";

const products = [
  { id: 1, name: "Monstera Deliciosa", price: 45, difficulty: "Medium", color: "bg-amber-100 text-amber-800 border-amber-200", image: monstera },
  { id: 2, name: "String of Pearls", price: 28, difficulty: "Medium", color: "bg-amber-100 text-amber-800 border-amber-200", image:pearls },
  { id: 3, name: "Peace Lily", price: 32, difficulty: "Easy", color: "bg-primary/20 text-primary-foreground border-primary/30", image: peacelily },
  { id: 4, name: "Fiddle Leaf Fig", price: 65, difficulty: "Hard", color: "bg-rose-100 text-rose-800 border-rose-200", image: fiddle },
  { id: 5, name: "Golden Pothos", price: 18, difficulty: "Easy", color: "bg-primary/20 text-primary-foreground border-primary/30", image: pothos },
  { id: 6, name: "Snake Plant", price: 24, difficulty: "Easy", color: "bg-primary/20 text-primary-foreground border-primary/30", image: snake },
  { id: 7, name: "Bird of Paradise", price: 55, difficulty: "Medium", color: "bg-amber-100 text-amber-800 border-amber-200", image: bird },
  { id: 8, name: "ZZ Plant", price: 22, difficulty: "Easy", color: "bg-primary/20 text-primary-foreground border-primary/30", image: zz },
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-card-border"
            >
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 bg-[#F5F4F0]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-darken transition-transform duration-700 group-hover:scale-105" 
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${product.color}`}>
                  {product.difficulty} Care
                </div>
                <button 
                  onClick={() => addToCart()}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90 shadow-lg hover:scale-105"
                  aria-label="Add to cart"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex justify-between items-start px-2 mb-2">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">Indoor Plant</p>
                </div>
                <span className="font-medium text-foreground text-lg">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="border border-primary/30 text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full font-medium transition-all hover:shadow-lg">
            View All Plants
          </button>
        </div>
      </div>
    </section>
  );
}
