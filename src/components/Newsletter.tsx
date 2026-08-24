import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';


export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Welcome to the community!",
      description: "Keep an eye on your inbox for green tips.",
    });
    setEmail('');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-secondary/10 z-0"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[140%] rounded-full bg-secondary/20 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center bg-card/80 backdrop-blur p-10 md:p-14 rounded-3xl shadow-lg border border-white/50"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Join our plant community</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get 10% off your first order, plus weekly plant care tips and early access to new arrivals.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
            />
            <button 
              type="submit"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We care about your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
