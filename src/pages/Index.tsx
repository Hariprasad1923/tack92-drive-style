import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Categories />
    <Products />
    <Banner />
    <About />
    <Footer />
  </div>
);

export default Index;
