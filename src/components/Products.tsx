import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { ShoppingCart } from "lucide-react";

const products = [
  { name: "Carbon Fiber Steering Wheel", price: "₹20,999", tag: "Best Seller" },
  { name: "LED Underglow Kit", price: "₹7,499", tag: "New" },
  { name: "Premium Leather Seat Covers", price: "₹14,999", tag: null },
  { name: "Sport Exhaust Tip - Dual", price: "₹5,499", tag: "Sale" },
  { name: "360° Dash Cam HD", price: "₹10,999", tag: "Popular" },
  { name: "Alloy Wheel Set 18\"", price: "₹49,999", tag: null },
  { name: "Custom Floor Mats", price: "₹3,999", tag: "New" },
  { name: "Turbo Air Intake System", price: "₹16,999", tag: "Performance" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Products = () => (
  <section id="products" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-2">
          Top Picks
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Featured Products
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.name}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="relative">
              <PhotoPlaceholder
                label="Product Photo"
                aspectRatio="aspect-square"
                className="rounded-none border-0 border-b"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-[10px] font-heading uppercase tracking-wider px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="font-heading text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-gradient">
                  {product.price}
                </span>
                <button className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Products;
