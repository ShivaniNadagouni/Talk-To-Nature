import { motion } from 'framer-motion';
import catIndoor from "../assets/cat-indoor.jpg";
import catOutdoor from "../assets/cat-outdoor.jpg";
import catSucculents from "../assets/cat-succulents.jpg";
import catPots from "../assets/cat-pots.jpg";
import catCare from "../assets/cat-care.jpg";

const categories = [
  { id: 1, title: 'Indoor Plants', image: catIndoor, gridClass: 'md:col-span-2 md:row-span-2' },
  { id: 2, title: 'Outdoor Plants', image: catOutdoor, gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 3, title: 'Succulents', image: catSucculents, gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 4, title: 'Planters & Pots', image: catPots, gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 5, title: 'Plant Care Kits', image: catCare, gridClass: 'md:col-span-1 md:row-span-1' },
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Curated for your space</h2>
            <p className="text-muted-foreground max-w-md">
              Whether you have a sun-drenched patio or a cozy, dim corner, we have the perfect green companion for you.
            </p>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary pb-1 self-start md:self-auto">
            View all categories
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px] auto-rows-[250px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${cat.gridClass}`}
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h3 className="text-white font-serif text-2xl md:text-3xl tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
