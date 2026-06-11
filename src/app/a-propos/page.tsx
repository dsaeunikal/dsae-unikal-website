"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";

type AboutCategory =
  | "Qui sommes-nous ?"
  | "Notre histoire"
  | "Notre expertise"
  | "Gouvernance et équipe";

type AboutItem = {
  title: string;
  category: AboutCategory;
  image: string;
  excerpt: string;
};

const categories: AboutCategory[] = [
  "Qui sommes-nous ?",
  "Notre histoire",
  "Notre expertise",
  "Gouvernance et équipe",
];

const aboutItems: AboutItem[] = [
  {
    title: "Notre vision",
    category: "Qui sommes-nous ?",
    image: "/assets/dsae/vision.jpg",
    excerpt:
      "Faire de la Faculté des Sciences Agronomiques de l’Université de Kalemie un pôle d’excellence scientifique, de formation professionnelle et de recherche appliquée au service du développement agricole, environnemental et socio-économique.",
  },
  {
    title: "Notre mission",
    category: "Qui sommes-nous ?",
    image: "/assets/dsae/objectifs.jpg",
    excerpt:
      "Former, rechercher, innover et accompagner les communautés par des solutions concrètes pour l’agriculture, l’environnement, la sécurité alimentaire et le développement durable.",
  },
  {
    title: "Notre slogan",
    category: "Qui sommes-nous ?",
    image: "/assets/dsae/conclusion.jpg",
    excerpt:
      "Ensemble, pour une faculté pionnière, innovante et durable, engagée au service de la jeunesse, de la science et du développement de la République Démocratique du Congo.",
  },
  {
    title: "Une faculté tournée vers le développement",
    category: "Notre histoire",
    image: "/assets/dsae/formation.jpg",
    excerpt:
      "La DSAE-UNIKAL s’inscrit dans la dynamique de développement de l’Université de Kalemie, avec une ambition claire : répondre aux besoins agricoles, environnementaux et socio-économiques de la Province du Tanganyika et au-delà.",
  },
  {
    title: "Un ancrage territorial fort",
    category: "Notre histoire",
    image: "/assets/dsae/province-tanganyika.jpg",
    excerpt:
      "Située à Kalemie, la faculté développe une approche académique connectée aux réalités locales : production agricole, gestion des ressources naturelles, entrepreneuriat rural et accompagnement des communautés.",
  },
  {
    title: "Production végétale",
    category: "Notre expertise",
    image: "/assets/dsae/field.jpg",
    excerpt:
      "Cette filière forme des spécialistes capables d’améliorer les cultures, les sols, les semences, les itinéraires techniques et les systèmes de production agricole durable.",
  },
  {
    title: "Production animale",
    category: "Notre expertise",
    image: "/assets/dsae/fermes-experimentales.jpg",
    excerpt:
      "Cette filière prépare les étudiants aux métiers de l’élevage, de la santé animale, de l’alimentation animale, des fermes expérimentales et de l’amélioration des productions animales.",
  },
  {
    title: "Agroéconomie",
    category: "Notre expertise",
    image: "/assets/dsae/territory.jpg",
    excerpt:
      "L’agroéconomie permet d’analyser les marchés agricoles, les chaînes de valeur, l’entrepreneuriat rural, les politiques agricoles et les mécanismes économiques liés au développement agricole.",
  },
  {
    title: "Gestion des ressources humaines",
    category: "Notre expertise",
    image: "/assets/dsae/students-professional.jpg",
    excerpt:
      "Cette filière développe des compétences en leadership, organisation, gestion des talents, insertion professionnelle, management et accompagnement des institutions agricoles.",
  },
  {
    title: "Gouvernance académique",
    category: "Gouvernance et équipe",
    image: "/assets/dsae/gouvernance.jpg",
    excerpt:
      "La gouvernance de la DSAE-UNIKAL repose sur l’excellence, la responsabilité, la transparence, la collaboration scientifique et l’amélioration continue des formations.",
  },
  {
    title: "Équipe enseignante et scientifique",
    category: "Gouvernance et équipe",
    image: "/assets/dsae/students-training.jpg",
    excerpt:
      "La faculté s’appuie sur une équipe d’enseignants, chercheurs, encadreurs et partenaires engagés dans la formation des étudiants et la production de connaissances utiles.",
  },
];

export default function AProposPage() {
  const [activeCategory, setActiveCategory] =
    useState<AboutCategory>("Qui sommes-nous ?");

  const filteredItems = useMemo(() => {
    return aboutItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <Image
            src="/assets/dsae/vision.jpg"
            alt="À propos de DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="about-hero-image"
          />

          <div className="about-hero-inner">
            <span>Identité institutionnelle</span>

            <h1>Comprendre la DSAE-UNIKAL, sa mission et son ambition</h1>

            <p>
              Découvrez la vision, l’histoire, les expertises académiques, la
              gouvernance et l’équipe qui portent la Faculté des Sciences
              Agronomiques de l’Université de Kalemie.
            </p>
          </div>
        </section>

        <section className="about-content-section">
          <div className="about-content-inner">
            <div className="about-filter-top">
              <h2>{activeCategory}</h2>
            </div>

            <div className="about-categories">
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

            <div className="about-grid">
              {filteredItems.map((item) => (
                <article className="about-card" key={item.title}>
                  <div className="about-card-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>

                  <div className="about-card-content">
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