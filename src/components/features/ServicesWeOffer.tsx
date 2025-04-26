
import { motion } from "framer-motion";
import { CardSpotlight } from "../pricing/CardSpotlight";
import { Brain, Smartphone, Globe } from "lucide-react";

const ServiceCard = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <CardSpotlight className="h-full border-white/10 border-2">
    <div className="p-6 flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
    </div>
  </CardSpotlight>
);

export const ServicesWeOffer = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          We Are Also <span className="text-gradient font-medium">Offering</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={Brain}
          title="AI/ML Solutions"
        />
        <ServiceCard
          icon={Smartphone}
          title="App Development"
        />
        <ServiceCard
          icon={Globe}
          title="Website Development"
        />
      </div>
    </section>
  );
};
