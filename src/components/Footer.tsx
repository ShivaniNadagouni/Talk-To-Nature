import {Leaf} from "lucide-react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-serif font-semibold text-xl tracking-wide">
                Talk to Nature
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Bringing the calm, tactile joy of living with plants into your home. Let your space breathe.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Plant Care Guides</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Customer Care</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li>hello@talktonature.com</li>
              <li>+1 800 PLANTS</li>
              <li className="pt-2">
                123 Green Street<br />
                Portland, OR 97204
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-background/50 text-sm">
          <p>&copy; 2026 Talk to Nature. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
