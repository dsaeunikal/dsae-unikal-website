"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type PartnerCategory =
  | "Tous les partenaires"
  | "Universités"
  | "Institutions internationales"
  | "ONG et organisations"
  | "Recherche et innovation"
  | "Partenaires techniques";

type PartnerItem = {
  name: string;
  category: PartnerCategory;
  logo: string;
  excerpt: string;
};

const categories: PartnerCategory[] = [
  "Tous les partenaires",
  "Universités",
  "Institutions internationales",
  "ONG et organisations",
  "Recherche et innovation",
  "Partenaires techniques",
];

const items: PartnerItem[] = [
  {
    name: "Université de Kalemie",
    category: "Universités",
    logo: "/assets/dsae/partners/universite-marien-ngouabi.jpg",
    excerpt:
      "Ancrage institutionnel et académique de la Faculté des Sciences Agronomiques.",
  },
  {
    name: "Université de Lubumbashi",
    category: "Universités",
    logo: "/assets/dsae/partners/unilu.png",
    excerpt:
      "Coopération universitaire, échange scientifique et appui académique.",
  },
  {
    name: "UCLouvain",
    category: "Universités",
    logo: "/assets/dsae/partners/uclouvain.png",
    excerpt:
      "Partenariat académique international et ouverture scientifique.",
  },
  {
    name: "Université de Montpellier",
    category: "Universités",
    logo: "/assets/dsae/partners/universite-montpellier.png",
    excerpt:
      "Coopération dans les domaines de l’agronomie, de la recherche et de la formation.",
  },
  {
    name: "CGIAR",
    category: "Recherche et innovation",
    logo: "/assets/dsae/partners/cgiar.jpg",
    excerpt:
      "Recherche agricole internationale, innovation et développement durable.",
  },
  {
    name: "CIFOR",
    category: "Recherche et innovation",
    logo: "/assets/dsae/partners/cifor.png",
    excerpt:
      "Recherche forestière, environnementale et gestion durable des ressources naturelles.",
  },
  {
    name: "IITA",
    category: "Recherche et innovation",
    logo: "/assets/dsae/partners/iita.jpg",
    excerpt:
      "Transformation agricole africaine, innovation et systèmes de production.",
  },
  {
    name: "PNUD",
    category: "Institutions internationales",
    logo: "/assets/dsae/partners/pnud.jpg",
    excerpt:
      "Appui au développement durable, gouvernance et projets communautaires.",
  },
  {
    name: "FAO",
    category: "Institutions internationales",
    logo: "/assets/dsae/partners/fao.png",
    excerpt:
      "Sécurité alimentaire, agriculture durable et accompagnement technique.",
  },
  {
    name: "CIRAD",
    category: "Partenaires techniques",
    logo: "/assets/dsae/partners/cirad.jpg",
    excerpt:
      "Recherche agronomique, expertise technique et innovation agricole.",
  },
];

export default function PartenairesPage() {
  const [activeCategory, setActiveCategory] =
    useState<PartnerCategory>("Tous les partenaires");

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tous les partenaires") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="directory-page">
        <section className="directory-hero">
          <Image
            src="/assets/dsae/partenariats.jpg"
            alt="Partenaires DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Coopération</span>
            <h1>Partenaires académiques, scientifiques et techniques</h1>
            <p>
              La DSAE-UNIKAL construit un réseau de partenaires pour renforcer
              la formation, la recherche appliquée, l’innovation et le
              développement durable.
            </p>
          </div>
        </section>

        <section className="directory-content-section">
          <div className="directory-content-inner">
            <div className="directory-filter-top">
              <h2>{activeCategory}</h2>
            </div>

            <div className="directory-categories">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={category === activeCategory ? "is-active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="partner-page-grid">
              {filteredItems.map((item) => (
                <article className="partner-page-card" key={item.name}>
                  <div className="partner-page-logo">
                    <img src={item.logo} alt={item.name} />
                  </div>

                  <div>
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
