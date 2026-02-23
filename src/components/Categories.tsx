import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";

const categories = [
  { name: "Interior", desc: "Seat covers, dash kits, floor mats" },
  { name: "Exterior", desc: "Body kits, spoilers, decals" },
  { name: "Lighting", desc: "LED bars, headlights, fog lights" },
  { name: "Wheels & Tires", desc: "Rims, hubcaps, tire accessories" },
  { name: "Electronics", desc: "Dash cams, GPS, audio systems" },
  { name: "Performance", desc: "Air filters, exhausts, tuning" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Categories = () => (
  <section id="categories" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-2">
          Browse By
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Categories
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors cursor-pointer"
          >
            <PhotoPlaceholder
              label={`${cat.name} Photo`}
              aspectRatio="aspect-[16/10]"
              className="rounded-none border-0 border-b"
            />
            <div className="p-5">
              <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-gradient transition-colors">
                {cat.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {cat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Categories;
