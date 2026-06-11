"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type ResearchCategory =
  | "Axes de recherche"
  | "Laboratoires"
  | "Projets scientifiques"
  | "Géomatique"
  | "IA et Data Science"
  | "Fermes expérimentales";

type ResearchItem = {
  title: string;
  category: ResearchCategory;
  image: string;
  excerpt: string;
};

const categories: ResearchCategory[] = [
  "Axes de recherche",
  "Laboratoires",
  "Projets scientifiques",
  "Géomatique",
  "IA et Data Science",
  "Fermes expérimentales",
];

const items: ResearchItem[] = [
  {
    title: "Agriculture durable",
    category: "Axes de recherche",
    image: "/assets/dsae/field.jpg",
    excerpt:
      "Recherche appliquée sur les cultures, les sols, les systèmes agricoles, la sécurité alimentaire et la productivité durable.",
  },
  {
    title: "Laboratoires multidisciplinaires",
    category: "Laboratoires",
    image: "/assets/dsae/recherche-scientifique.jpg",
    excerpt:
      "Développement d’espaces scientifiques pour l’analyse, l’expérimentation, l’encadrement des étudiants et la production de connaissances utiles.",
  },
  {
    title: "Projets scientifiques appliqués",
    category: "Projets scientifiques",
    image: "/assets/dsae/partenariats.jpg",
    excerpt:
      "Projets orientés vers les besoins des communautés, la transformation agricole, les innovations locales et le développement territorial.",
  },
  {
    title: "Géomatique et territoires",
    category: "Géomatique",
    image: "/assets/dsae/geomatique.jpg",
    excerpt:
      "Utilisation des SIG, de la cartographie, de la télédétection et de l’analyse spatiale pour comprendre les territoires agricoles.",
  },
  {
    title: "IA et Data Science agricole",
    category: "IA et Data Science",
    image: "/assets/dsae/ia-data-science.jpg",
    excerpt:
      "Analyse des données agricoles, modèles prédictifs, outils numériques et intelligence artificielle au service de la décision.",
  },
  {
    title: "Fermes expérimentales",
    category: "Fermes expérimentales",
    image: "/assets/dsae/fermes-experimentales.jpg",
    excerpt:
      "Espaces de formation pratique, de démonstration, d’expérimentation et de transfert technologique vers les communautés.",
  },
];

export default function RecherchesPage() {
  const [activeCategory, setActiveCategory] =
    useState<ResearchCategory>("Axes de recherche");

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="directory-page">
        <section className="directory-hero">
          <Image
            src="/assets/dsae/recherche-scientifique.jpg"
            alt="Recherche DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Recherche appliquée</span>
            <h1>Laboratoires, innovation et projets scientifiques</h1>
            <p>
              La DSAE-UNIKAL développe une recherche orientée vers les besoins
              agricoles, environnementaux, économiques et territoriaux.
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

            <div className="directory-grid">
              {filteredItems.map((item) => (
                <article className="directory-card" key={item.title}>
                  <div className="directory-card-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>

                  <div className="directory-card-content">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
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
