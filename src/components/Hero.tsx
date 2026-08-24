import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import hero from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-muted/20">
        {/* Soft background color gradient to blend image nicely */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10"></div>
        <img 
          src={hero} 
          alt="Lush indoor plants in warm light" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl bg-background/80 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-xl border border-white/40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Bring the outside in
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
              Let your space <br/>
              <span className="italic text-primary">breathe.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Discover the calm, tactile joy of living with plants. Sustainably sourced, carefully nurtured, and delivered right to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                Shop Collection <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => document.querySelector('#care')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground font-medium px-8 py-4 rounded-full hover:bg-black/5 transition-colors"
              >
                Plant Care Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
