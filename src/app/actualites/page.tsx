"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type NewsCategory =
  | "Toutes les actualités"
  | "À la une"
  | "Production végétale"
  | "Production animale"
  | "Agroéconomie"
  | "Gestion des ressources naturelles"
  | "Communiqués de presse";

type NewsItem = {
  title: string;
  category: NewsCategory;
  date: string;
  image: string;
  excerpt: string;
};

const categories: NewsCategory[] = [
  "Toutes les actualités",
  "À la une",
  "Production végétale",
  "Production animale",
  "Agroéconomie",
  "Gestion des ressources naturelles",
  "Communiqués de presse",
];

const newsItems: NewsItem[] = [
  {
    title: "Relance de la recherche scientifique à la DSAE-UNIKAL",
    category: "À la une",
    date: "12 juin 2026",
    image: "/assets/dsae/recherche-scientifique.jpg",
    excerpt:
      "La faculté renforce ses laboratoires, ses projets appliqués et ses partenariats scientifiques pour soutenir l’innovation agricole.",
  },
  {
    title: "Nouvelles initiatives pour la production végétale durable",
    category: "Production végétale",
    date: "10 juin 2026",
    image: "/assets/dsae/field.jpg",
    excerpt:
      "Les équipes académiques développent des approches modernes pour améliorer les rendements, la qualité des semences et la résilience des cultures.",
  },
  {
    title: "Modernisation des fermes expérimentales universitaires",
    category: "Production animale",
    date: "8 juin 2026",
    image: "/assets/dsae/fermes-experimentales.jpg",
    excerpt:
      "Les fermes expérimentales deviennent des espaces de formation pratique, de recherche appliquée et de transfert technologique.",
  },
  {
    title: "Agroéconomie et développement des chaînes de valeur agricoles",
    category: "Agroéconomie",
    date: "6 juin 2026",
    image: "/assets/dsae/territory.jpg",
    excerpt:
      "La DSAE-UNIKAL met l’accent sur l’analyse économique, l’entrepreneuriat agricole et la structuration des marchés locaux.",
  },
  {
    title: "Gestion durable des ressources naturelles et territoires agricoles",
    category: "Gestion des ressources naturelles",
    date: "4 juin 2026",
    image: "/assets/dsae/geomatique.jpg",
    excerpt:
      "Les outils de cartographie, de télédétection et de SIG accompagnent la gestion durable des sols, de l’eau et des espaces agricoles.",
  },
  {
    title: "Communiqué : lancement des activités institutionnelles 2026",
    category: "Communiqués de presse",
    date: "2 juin 2026",
    image: "/assets/dsae/infrastructures.jpg",
    excerpt:
      "La Faculté des Sciences Agronomiques annonce le lancement officiel de nouvelles activités académiques, scientifiques et communautaires.",
  },
  {
    title: "Intelligence artificielle et données agricoles",
    category: "À la une",
    date: "30 mai 2026",
    image: "/assets/dsae/ia-data-science.jpg",
    excerpt:
      "L’intelligence artificielle ouvre de nouvelles perspectives pour la décision agricole, la prédiction des rendements et l’analyse territoriale.",
  },
  {
    title: "Formation pratique des étudiants en milieu agricole",
    category: "Production végétale",
    date: "27 mai 2026",
    image: "/assets/dsae/students-professional.jpg",
    excerpt:
      "Les étudiants renforcent leurs compétences à travers des travaux pratiques, des stages et des projets de terrain.",
  },
  {
    title: "Publication scientifique sur l’agriculture durable",
    category: "Communiqués de presse",
    date: "24 mai 2026",
    image: "/assets/dsae/publications/publication-agriculture-durable.jpg",
    excerpt:
      "Une nouvelle publication institutionnelle présente les orientations scientifiques liées à l’agriculture durable et au développement territorial.",
  },
];

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] =
    useState<NewsCategory>("Toutes les actualités");

  const filteredNews = useMemo(() => {
    if (activeCategory === "Toutes les actualités") {
      return newsItems;
    }

    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="news-page">
        <section className="news-hero">
          <Image
            src="/assets/dsae/news-hero.jpg"
            alt="Actualités DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="news-hero-image"
          />

          <div className="news-hero-inner">
            <span>Actualités DSAE-UNIKAL</span>

            <h1>Suivre la vie scientifique, académique et institutionnelle</h1>

            <p>
              Retrouvez les annonces importantes, les projets de recherche, les
              activités académiques, les innovations agricoles et les communiqués
              officiels de la Faculté des Sciences Agronomiques.
            </p>
          </div>
        </section>

        <section className="news-filter-section">
          <div className="news-filter-inner">
            <div className="news-filter-top">
              <h2>{activeCategory}</h2>

              <div className="news-tools">
                <button type="button">Filtrer</button>
                <button type="button">Trier</button>
              </div>
            </div>

            <div className="news-categories">
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

            <div className="news-grid">
              {filteredNews.map((item) => (
                <article className="news-card" key={item.title}>
                  <div className="news-card-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>

                  <div className="news-card-content">
                    <h3>{item.title}</h3>

                    <p>{item.excerpt}</p>

                    <div className="news-card-meta">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="news-load-more">
              <button type="button">Charger plus</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}