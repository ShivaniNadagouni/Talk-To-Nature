import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The Monstera arrived in perfect condition. It's completely transformed my living room. I catch myself just staring at it while having my morning coffee.",
    role: "Plant Parent of 3"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "I used to kill every plant I owned. The care guide that came with my Snake Plant was a game changer. It's thriving 6 months later!",
    role: "Newbie Plant Parent"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    text: "The packaging is incredible. Zero plastic, beautiful unboxing experience, and not a single damaged leaf. Will absolutely be ordering again.",
    role: "Sustainability Advocate"
  },
  {
    id: 4,
    name: "David Smith",
    text: "Their customer support is unmatched. Sent a photo of a yellowing leaf and they diagnosed the watering issue within an hour.",
    role: "Indoor Jungle Owner"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Plant Parents Love Us</h2>
          <div className="w-16 h-1 bg-secondary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-sm border border-card-border flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              </div>
              <div>
                <p className="font-serif font-medium text-lg text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
