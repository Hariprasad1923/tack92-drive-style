import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Truck, Shield, Headphones, Wrench } from "lucide-react";

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Free delivery on orders over $75" },
  { icon: Shield, title: "Quality Guaranteed", desc: "Premium materials, built to last" },
  { icon: Headphones, title: "24/7 Support", desc: "Expert help anytime you need it" },
  { icon: Wrench, title: "Easy Install", desc: "DIY-friendly with guides included" },
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PhotoPlaceholder
            label="About Us / Garage Photo"
            aspectRatio="aspect-[4/3]"
            className="rounded-2xl min-h-[300px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Built For <span className="text-gradient">Car Lovers</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Tack 92 was born from a passion for cars and the drive to make every ride look and feel extraordinary. We handpick every product to ensure top-tier quality and style.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Whether you're a weekend warrior or a daily driver, our curated collection of accessories helps you express your personality on the road.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center glow-red">
              <f.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h4 className="font-heading text-lg font-semibold mb-2">{f.title}</h4>
            <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
