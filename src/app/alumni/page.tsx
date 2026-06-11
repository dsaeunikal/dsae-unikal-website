"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type AlumniCategory =
  | "Présentation Alumni"
  | "Réseau des anciens"
  | "Portraits"
  | "Opportunités"
  | "Insertion professionnelle"
  | "Témoignages";

type AlumniItem = {
  title: string;
  category: AlumniCategory;
  image: string;
  excerpt: string;
};

const categories: AlumniCategory[] = [
  "Présentation Alumni",
  "Réseau des anciens",
  "Portraits",
  "Opportunités",
  "Insertion professionnelle",
  "Témoignages",
];

const items: AlumniItem[] = [
  {
    title: "Une communauté engagée",
    category: "Présentation Alumni",
    image: "/assets/dsae/students-professional.jpg",
    excerpt:
      "La communauté Alumni rassemble les anciens étudiants, diplômés et professionnels formés par la DSAE-UNIKAL.",
  },
  {
    title: "Réseau des anciens",
    category: "Réseau des anciens",
    image: "/assets/dsae/key-numbers/graduates.jpg",
    excerpt:
      "Un réseau pour connecter les diplômés, partager les opportunités et renforcer la solidarité professionnelle.",
  },
  {
    title: "Portraits de diplômés",
    category: "Portraits",
    image: "/assets/dsae/students-training.jpg",
    excerpt:
      "Mise en avant des parcours inspirants, réussites professionnelles et initiatives portées par les anciens.",
  },
  {
    title: "Opportunités académiques et professionnelles",
    category: "Opportunités",
    image: "/assets/dsae/insertion-professionnelle.jpg",
    excerpt:
      "Stages, emplois, formations, appels à candidatures et collaborations pour les étudiants et diplômés.",
  },
  {
    title: "Insertion professionnelle",
    category: "Insertion professionnelle",
    image: "/assets/dsae/students-professional.jpg",
    excerpt:
      "Accompagnement vers l’emploi, l’entrepreneuriat, le leadership et l’intégration dans les secteurs agricoles.",
  },
  {
    title: "Témoignages Alumni",
    category: "Témoignages",
    image: "/assets/dsae/formation.jpg",
    excerpt:
      "Expériences et témoignages des anciens sur la formation, la recherche et leur parcours professionnel.",
  },
];

export default function AlumniPage() {
  const [activeCategory, setActiveCategory] =
    useState<AlumniCategory>("Présentation Alumni");

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="directory-page">
        <section className="directory-hero">
          <Image
            src="/assets/dsae/insertion-professionnelle.jpg"
            alt="Alumni DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Communauté</span>
            <h1>Alumni, diplômés et réseau professionnel</h1>
            <p>
              Une communauté vivante d’anciens étudiants, de professionnels, de
              chercheurs et d’acteurs engagés dans le développement agricole.
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
