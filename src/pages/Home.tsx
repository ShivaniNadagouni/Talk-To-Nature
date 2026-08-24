import { CartProvider } from '../hooks/use-cart';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import BestSellers from '../components/BestSellers';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogPreview from '../components/BlogPreview';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
        <Header />
        <main>
          <Hero />
          <FeaturedCategories />
          <BestSellers />
          <WhyChooseUs />
          <BlogPreview />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
