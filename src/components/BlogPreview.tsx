import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import blogWater from "../assets/blog-water.jpg";
import blogLowlight from "../assets/blog-lowlight.jpg";
import blogRepot from "../assets/blog-repot.jpg";

const posts = [
  {
    id: 1,
    title: "How to Water Your Monstera",
    category: "Watering",
    image: blogWater,
    excerpt: "The secret to a thriving Monstera isn't just how much water you use, but when and how you deliver it."
  },
  {
    id: 2,
    title: "Best Plants for Low Light",
    category: "Lighting",
    image: blogLowlight,
    excerpt: "No sun? No problem. Discover resilient varieties that thrive in those cozy, dim corners of your home."
  },
  {
    id: 3,
    title: "Repotting 101",
    category: "Maintenance",
    image: blogRepot,
    excerpt: "Signs your plant needs a new home and a step-by-step guide to repotting without causing root shock."
  }
];

export default function BlogPreview() {
  return (
    <section id="care" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">Plant Care</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Learn to Speak Plant</h2>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary pb-1 self-start md:self-auto flex items-center gap-2">
            Read Journal <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3] bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full text-foreground">
                  {post.category}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
