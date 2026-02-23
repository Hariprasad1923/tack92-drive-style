import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-80" />
    <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
          Premium Car Accessories
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[0.95] mb-6">
          Upgrade<br />
          Your <span className="text-gradient">Ride</span>
        </h1>
        <p className="font-body text-muted-foreground max-w-md mb-8 leading-relaxed">
          Discover top-quality car accessories that combine style, performance and protection. From interior upgrades to exterior enhancements — Tack 92 has it all.
        </p>

        {/* Rev line animation */}
        <div className="h-1 bg-muted rounded-full mb-8 max-w-xs overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="flex gap-4">
          <a
            href="#products"
            className="bg-gradient-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-3 rounded-md hover:opacity-90 transition-opacity glow-red"
          >
            Shop Now
          </a>
          <a
            href="#categories"
            className="border border-border text-foreground font-heading uppercase tracking-wider px-8 py-3 rounded-md hover:bg-secondary transition-colors"
          >
            Browse
          </a>
        </div>
      </motion.div>

      {/* Hero image placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <PhotoPlaceholder
          label="Hero Image — Your Best Car Shot"
          aspectRatio="aspect-[4/3]"
          className="rounded-2xl min-h-[350px] md:min-h-[450px]"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
