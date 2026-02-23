import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";

const Banner = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <PhotoPlaceholder
          label="Promotional Banner — Wide Car Shot"
          aspectRatio="aspect-[21/9]"
          className="rounded-none border-0 min-h-[250px]"
        />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Season <span className="text-gradient">Sale</span> — Up to 40% Off
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Limited time offer on select accessories
            </p>
            <a
              href="#products"
              className="inline-block bg-gradient-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-3 rounded-md hover:opacity-90 transition-opacity glow-red"
            >
              Shop the Sale
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Banner;
