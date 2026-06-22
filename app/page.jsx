import Navbar from "../components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Strip from "@/components/Strip/Strip";
import InfoCard from "@/components/InfoCard/InfoCard";
import Testimonial from "@/components/Testimonial/Testimonial";
import Newsletter from "@/components/Newsletter/Newsletter";

import "../styles/reset.css";
import "../styles/variables.css";
import "./page.css";

export default function Home() {
  return (
    <div className="flex-column">
      <Navbar />

      <Hero />

      {/* Bandeau signature */}
      <Strip />

      {/* Section engagements */}
      <section className="cards-section">
        <div className="cards-heading">
          <p className="cards-eyebrow">Nos engagements</p>
          <h2 className="cards-section-title">Pourquoi choisir notre miel ?</h2>
        </div>

        <div className="cards-container">
          <InfoCard
            num="01"
            title="100% Naturel"
            description="Brut, non chauffé et non filtré — toutes les enzymes et antioxydants naturels préservés."
            icon={
              <span className="material-symbols-outlined">nature_people</span>
            }
          />
          <InfoCard
            num="02"
            title="Certifié Bio"
            description="Aucun produit chimique ne touche nos ruches ni nos fleurs. Pratiques biologiques certifiées."
            icon={<span className="material-symbols-outlined">eco</span>}
          />
          <InfoCard
            num="03"
            title="Ancrage Local"
            description="Nos abeilles restent au cœur de leur territoire, préservant la biodiversité locale."
            icon={
              <span className="material-symbols-outlined">location_on</span>
            }
          />
        </div>
      </section>

      {/* Témoignage */}
      <Testimonial />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
