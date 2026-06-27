import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./story.css";

const SECTIONS = [
  {
    id: "origine",
    eyebrow: "Notre Origine",
    title: "Né à Berkane, au cœur de l'Est marocain",
    body: [
      "Nichée entre les orangeraies de la Moulouya et les contreforts des Beni Snassen, Berkane jouit d'un microclimat exceptionnel. Les hivers doux et les étés secs créent des conditions idéales pour une flore mellifère d'une richesse rare — thym sauvage, romarin, jujubier, oranger en fleurs.",
      "Nos ruches sont posées à même ces terres, loin des routes et des cultures intensives. Les abeilles butinent librement sur des kilomètres de végétation spontanée, produisant un miel dont le terroir se lit dans chaque note.",
    ],
    img: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=800&q=80",
    imgAlt: "Paysage de Berkane, Est marocain",
    reverse: false,
  },
  {
    id: "apiculteurs",
    eyebrow: "Nos Apiculteurs",
    title: "Un savoir-faire transmis de génération en génération",
    body: [
      "Chaque pot de miel The Beehive est l'œuvre d'apiculteurs berkani qui pratiquent leur métier depuis l'enfance. Pas de hâte, pas de compromis : les ruches sont inspectées à la main, les hausses récoltées uniquement à pleine maturité.",
      "Nous travaillons en direct avec trois familles d'apiculteurs de la région. Ce lien court — du producteur à votre table — est la garantie d'un miel frais, tracé, et équitable.",
    ],
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    imgAlt: "Apiculteur en tenue de protection",
    reverse: true,
  },
  {
    id: "miels",
    eyebrow: "Nos Miels",
    title: "Chaque variété, une saison, un terroir",
    body: [
      "Miel de jujubier (Sidr), miel d'oranger, miel de thym sauvage, miel toutes fleurs des Beni Snassen — notre collection reflète les cycles naturels de l'Est marocain. Chaque variété est récoltée à son pic aromatique, sans mélange et sans ajout.",
      "Nos miels ne sont ni chauffés ni ultrafiltrés. Ils conservent leurs enzymes, leur pollen, leur cristallisation naturelle — signes d'un miel vivant et intact.",
    ],
    img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
    imgAlt: "Pots de miel artisanal",
    reverse: false,
  },
];

const STATS = [
  { value: "3",     label: "Familles d'apiculteurs" },
  { value: "100%",  label: "Non chauffé & non filtré" },
  { value: "Berkane", label: "Est du Maroc" },
  { value: "0",     label: "Intermédiaires" },
];

export default function Story() {
  return (
    <>
      <Navbar />
      <div className="st-page">

        {/* ── Hero texte ── */}
        <header className="st-hero">
          <span className="st-hero-eyebrow">Notre Histoire</span>
          <h1 className="st-hero-title">
            De la ruche <em>à votre table</em>
          </h1>
          <p className="st-hero-desc">
            The Beehive est né d'une conviction simple : le meilleur miel
            vient d'un territoire précis, de mains précises, et d'un respect
            absolu du temps naturel.
          </p>
        </header>

        {/* ── Stats ── */}
        <div className="st-stats">
          {STATS.map((s) => (
            <div key={s.label} className="st-stat">
              <span className="st-stat-value">{s.value}</span>
              <span className="st-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Sections alternées ── */}
        {SECTIONS.map((sec) => (
          <section
            key={sec.id}
            className={`st-section${sec.reverse ? " st-section--reverse" : ""}`}
          >
            {/* Image */}
            <div className="st-img-col">
              <div className="st-img-wrap">
                <img src={sec.img} alt={sec.imgAlt} />
              </div>
              <div className="st-img-accent" aria-hidden="true" />
            </div>

            {/* Texte */}
            <div className="st-text-col">
              <span className="st-eyebrow">{sec.eyebrow}</span>
              <h2 className="st-title">{sec.title}</h2>
              {sec.body.map((p, i) => (
                <p key={i} className="st-body">{p}</p>
              ))}
              <a href="/shop" className="st-link">
                Découvrir nos miels
                <span className="st-link-line" aria-hidden="true" />
              </a>
            </div>
          </section>
        ))}

        {/* ── CTA final ── */}
        <div className="st-cta">
          <span className="st-cta-eyebrow">Prêt à goûter ?</span>
          <h2 className="st-cta-title">Commandez directement depuis Berkane</h2>
          <a href="/shop" className="st-cta-btn">Explorer notre collection</a>
        </div>

      </div>
    </>
  );
}