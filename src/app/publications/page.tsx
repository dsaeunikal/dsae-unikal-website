"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type PublicationCategory =
  | "Toutes les publications"
  | "Articles scientifiques"
  | "Rapports"
  | "Mémoires et travaux"
  | "Documents techniques"
  | "Guides et manuels";

type PublicationItem = {
  title: string;
  category: PublicationCategory;
  date: string;
  image: string;
  excerpt: string;
};

const categories: PublicationCategory[] = [
  "Toutes les publications",
  "Articles scientifiques",
  "Rapports",
  "Mémoires et travaux",
  "Documents techniques",
  "Guides et manuels",
];

const items: PublicationItem[] = [
  {
    title: "Agriculture durable et développement territorial",
    category: "Rapports",
    date: "2026",
    image: "/assets/dsae/publications/publication-agriculture-durable.jpg",
    excerpt:
      "Rapport scientifique consacré aux stratégies agricoles durables, au développement territorial et à la valorisation des systèmes de production locaux.",
  },
  {
    title: "Géomatique appliquée aux territoires agricoles",
    category: "Documents techniques",
    date: "2026",
    image: "/assets/dsae/publications/publication-geomatique.jpg",
    excerpt:
      "Document technique sur l’usage des SIG, de la télédétection et des outils de cartographie pour l’analyse des territoires agricoles.",
  },
  {
    title: "Intelligence artificielle et Data Science agricole",
    category: "Articles scientifiques",
    date: "2026",
    image: "/assets/dsae/publications/publication-ia-data.jpg",
    excerpt:
      "Publication sur les données agricoles, la modélisation, la prédiction des rendements et les systèmes intelligents d’aide à la décision.",
  },
  {
    title: "Professionnalisation des formations agronomiques",
    category: "Guides et manuels",
    date: "2026",
    image: "/assets/dsae/publications/publication-professionnalisation.jpg",
    excerpt:
      "Guide académique pour renforcer les compétences pratiques, les stages, l’insertion professionnelle et les partenariats de formation.",
  },
  {
    title: "Travaux étudiants en sciences agronomiques",
    category: "Mémoires et travaux",
    date: "2026",
    image: "/assets/dsae/students-training.jpg",
    excerpt:
      "Valorisation des travaux académiques, mémoires, projets tutorés et recherches appliquées conduits par les étudiants de la faculté.",
  },
];

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] =
    useState<PublicationCategory>("Toutes les publications");

  const filteredItems = useMemo(() => {
    if (activeCategory === "Toutes les publications") {
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
            src="/assets/dsae/publications/publication-agriculture-durable.jpg"
            alt="Publications DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Production scientifique</span>
            <h1>Publications, rapports et ressources scientifiques</h1>
            <p>
              Consultez les publications académiques, rapports scientifiques,
              guides techniques, mémoires et documents institutionnels produits
              par la DSAE-UNIKAL.
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
                    <small>{item.date}</small>
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
