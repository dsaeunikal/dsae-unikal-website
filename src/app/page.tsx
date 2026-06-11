"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type KeyNumber = {
  label: string;
  value: number;
  suffix?: string;
  image: string;
};

type Highlight = {
  title: string;
  category: string;
  text: string;
  image: string;
};

type IdentityCard = {
  title: string;
  text: string;
  image: string;
};

type Program = {
  title: string;
  image: string;
  text: string;
};

type Publication = {
  title: string;
  author: string;
  year: string;
  type: string;
  image: string;
};

type ResearchAxis = {
  title: string;
  image: string;
  text: string;
};

function useCounter(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = 90;

    const counter = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (frame >= totalFrames) {
        setCount(target);
        window.clearInterval(counter);
      }
    }, 18);

    return () => window.clearInterval(counter);
  }, [target, start]);

  return count;
}

function KeyNumberCard({ item, active }: { item: KeyNumber; active: boolean }) {
  const value = useCounter(item.value, active);

  return (
    <article className="key-card">
      <Image
        src={item.image}
        alt={item.label}
        fill
        sizes="(max-width: 1000px) 100vw, 50vw"
        className="key-card-image"
      />

      <div className="key-card-overlay" />

      <div className="key-card-content">
        <strong>
          {value.toLocaleString("fr-FR")}
          {item.suffix ?? ""}
        </strong>
        <span>{item.label}</span>
      </div>
    </article>
  );
}

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [identityIndex, setIdentityIndex] = useState(0);
  const [publicationIndex, setPublicationIndex] = useState(0);

  const statsRef = useRef<HTMLElement | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const partners = [
    {
      name: "CGIAR",
      logo: "/assets/dsae/partners/cgiar.jpg",
    },
    {
      name: "CIFOR",
      logo: "/assets/dsae/partners/cifor.png",
    },
    {
      name: "IITA",
      logo: "/assets/dsae/partners/iita.jpg",
    },
    {
      name: "UCLouvain",
      logo: "/assets/dsae/partners/uclouvain.png",
    },
    {
      name: "Université de Montpellier",
      logo: "/assets/dsae/partners/universite-montpellier.png",
    },
    {
      name: "Université de Lubumbashi",
      logo: "/assets/dsae/partners/unilu.png",
    },
    {
      name: "Banque Mondiale",
      logo: "/assets/dsae/partners/banque-mondiale.webp",
    },
    {
      name: "Université de Kisangani",
      logo: "/assets/dsae/partners/unikis.webp",
    },
    {
      name: "Université de Kinshasa",
      logo: "/assets/dsae/partners/unikin.webp",
    },
    {
      name: "PNUD",
      logo: "/assets/dsae/partners/pnud.jpg",
    },
    {
      name: "FAO",
      logo: "/assets/dsae/partners/fao.png",
    },
    {
      name: "CIRAD",
      logo: "/assets/dsae/partners/cirad.jpg",
    },
    {
      name: "Université Officielle de Bukavu",
      logo: "/assets/dsae/partners/uob.png",
    },
    {
      name: "Université Marien Ngouabi",
      logo: "/assets/dsae/partners/universite-marien-ngouabi.jpg",
    },
  ];

  const duplicatedPartners = useMemo(() => {
    return [...partners, ...partners, ...partners];
  }, []);

  const keyNumbers: KeyNumber[] = [
    {
      label: "Étudiants formés",
      value: 2400,
      suffix: "+",
      image: "/assets/dsae/key-numbers/students.jpg",
    },
    {
      label: "Enseignants et chercheurs",
      value: 85,
      suffix: "+",
      image: "/assets/dsae/key-numbers/teachers.jpg",
    },
    {
      label: "Diplômés déjà produits",
      value: 1200,
      suffix: "+",
      image: "/assets/dsae/key-numbers/graduates.jpg",
    },
    {
      label: "Solutions apportées",
      value: 60,
      suffix: "+",
      image: "/assets/dsae/key-numbers/solutions.jpg",
    },
  ];

  const highlights: Highlight[] = [
    {
      title: "Relance de la recherche scientifique",
      category: "Recherche",
      text: "Création de laboratoires multidisciplinaires, appui aux projets appliqués et valorisation des résultats scientifiques.",
      image: "/assets/dsae/recherche-scientifique.jpg",
    },
    {
      title: "Laboratoire de géomatique",
      category: "Innovation",
      text: "Cartographie, télédétection, SIG, traitement de données et observation intelligente des territoires agricoles.",
      image: "/assets/dsae/geomatique.jpg",
    },
    {
      title: "Intelligence artificielle et Data Science",
      category: "Technologie",
      text: "Exploitation des données agricoles, modèles prédictifs et solutions numériques pour l’aide à la décision.",
      image: "/assets/dsae/ia-data-science.jpg",
    },
    {
      title: "Modernisation des infrastructures",
      category: "Campus",
      text: "Renforcement des espaces pédagogiques, bibliothèques, équipements, laboratoires et outils de formation.",
      image: "/assets/dsae/infrastructures.jpg",
    },
  ];

  const identityCards: IdentityCard[] = [
    {
      title: "Notre vision",
      text: "Faire de la Faculté des Sciences Agronomiques de l’Université de Kalemie un pôle d’excellence scientifique, de formation professionnelle et de recherche appliquée au service du développement agricole, environnemental et socio-économique.",
      image: "/assets/dsae/vision.jpg",
    },
    {
      title: "Notre mission",
      text: "Former, rechercher, innover et accompagner les communautés par des solutions concrètes pour l’agriculture, l’environnement et le développement durable.",
      image: "/assets/dsae/objectifs.jpg",
    },
    {
      title: "Nos valeurs",
      text: "Excellence académique, innovation scientifique, bonne gouvernance, ouverture au monde, responsabilité sociale et développement durable.",
      image: "/assets/dsae/gouvernance.jpg",
    },
    {
      title: "Notre slogan",
      text: "Ensemble, pour une faculté pionnière, innovante et durable.",
      image: "/assets/dsae/conclusion.jpg",
    },
  ];

  const programs: Program[] = [
    {
      title: "Production végétale",
      image: "/assets/dsae/field.jpg",
      text: "Cultures, sols, systèmes agricoles, semences, itinéraires techniques et productivité durable.",
    },
    {
      title: "Production animale",
      image: "/assets/dsae/fermes-experimentales.jpg",
      text: "Élevage, santé animale, alimentation, systèmes pastoraux et amélioration des productions.",
    },
    {
      title: "Agroéconomie",
      image: "/assets/dsae/territory.jpg",
      text: "Économie agricole, chaînes de valeur, marchés, entrepreneuriat et politiques agricoles.",
    },
    {
      title: "Gestion des ressources humaines",
      image: "/assets/dsae/students-professional.jpg",
      text: "Management, organisation, insertion professionnelle, leadership et gestion des talents.",
    },
  ];

  const publications: Publication[] = [
    {
      title: "Agriculture durable et développement territorial",
      author: "DSAE-UNIKAL",
      year: "2026",
      type: "Rapport scientifique",
      image: "/assets/dsae/publications/publication-agriculture-durable.jpg",
    },
    {
      title: "Géomatique appliquée aux territoires agricoles",
      author: "Laboratoire DSAE",
      year: "2026",
      type: "Document technique",
      image: "/assets/dsae/publications/publication-geomatique.jpg",
    },
    {
      title: "Intelligence artificielle et Data Science agricole",
      author: "Équipe Recherche",
      year: "2026",
      type: "Publication de recherche",
      image: "/assets/dsae/publications/publication-ia-data.jpg",
    },
    {
      title: "Professionnalisation des formations agronomiques",
      author: "Faculté des Sciences Agronomiques",
      year: "2026",
      type: "Guide académique",
      image: "/assets/dsae/publications/publication-professionnalisation.jpg",
    },
  ];

  const researchAxes: ResearchAxis[] = [
    {
      title: "Agriculture durable",
      image: "/assets/dsae/field.jpg",
      text: "Production, sols, cultures, systèmes agricoles et sécurité alimentaire.",
    },
    {
      title: "Géomatique et territoires",
      image: "/assets/dsae/geomatique.jpg",
      text: "SIG, télédétection, cartographie et analyse spatiale.",
    },
    {
      title: "IA et Data Science",
      image: "/assets/dsae/ia-data-science.jpg",
      text: "Données, prédiction, modélisation et intelligence agricole.",
    },
    {
      title: "Fermes expérimentales",
      image: "/assets/dsae/fermes-experimentales.jpg",
      text: "Expérimentation, démonstration, transfert technologique et formation pratique.",
    },
  ];

  const activePublication = publications[publicationIndex];

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const goToPreviousHighlight = () => {
    setHighlightIndex((current) =>
      current === 0 ? highlights.length - 1 : current - 1
    );
  };

  const goToNextHighlight = () => {
    setHighlightIndex((current) =>
      current === highlights.length - 1 ? 0 : current + 1
    );
  };

  const moveHighlightRow = (direction: "left" | "right") => {
    const container = highlightRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });

    if (direction === "right") {
      goToNextHighlight();
    } else {
      goToPreviousHighlight();
    }
  };

  const nextIdentity = () => {
    setIdentityIndex((current) =>
      current === identityCards.length - 1 ? 0 : current + 1
    );
  };

  const nextPublication = () => {
    setPublicationIndex((current) =>
      current === publications.length - 1 ? 0 : current + 1
    );
  };

  const previousPublication = () => {
    setPublicationIndex((current) =>
      current === 0 ? publications.length - 1 : current - 1
    );
  };

  return (
    <>
      <Header />

      <main className="landing-page">
        <section className="hero">
          <Image
            src="/assets/dsae/farm2.png"
            alt="DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="eyebrow">Faculté des Sciences Agronomiques</span>

            <h1>Bienvenue à DSAE-UNIKAL</h1>

            <p>
              Une plateforme institutionnelle dédiée à l’excellence académique,
              à la recherche appliquée, à l’innovation scientifique et au
              développement durable.
            </p>

            <div className="hero-actions">
              <a href="#publications">Découvrir les publications</a>
              <a href="#recherche" className="ghost-link">
                Explorer la recherche
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            Défiler
          </div>
        </section>

        <section className="partners-section" id="partenaires">
          <div className="section-heading">
            <span>Coopération académique et scientifique</span>
            <h2>Nos partenaires</h2>
          </div>

          <div className="partners-marquee">
            <div className="partners-track">
              {duplicatedPartners.map((partner, index) => (
                <div className="partner-logo" key={`${partner.name}-${index}`}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="key-numbers-section" ref={statsRef}>
          <div className="section-heading">
            <span>Impact académique</span>
            <h2>Les chiffres clés</h2>
          </div>

          <div className="key-grid apple-style">
            {keyNumbers.map((item) => (
              <KeyNumberCard
                key={item.label}
                item={item}
                active={statsVisible}
              />
            ))}
          </div>
        </section>

        <section className="highlights-section" id="actualites">
          <div className="section-heading">
            <span>Informations importantes</span>
            <h2>À la une</h2>
          </div>

          <div className="highlight-controls">
            <button
              onClick={() => moveHighlightRow("left")}
              aria-label="Reculer"
            >
              ←
            </button>
            <button
              onClick={() => moveHighlightRow("right")}
              aria-label="Avancer"
            >
              →
            </button>
          </div>

          <div className="highlight-row" ref={highlightRef}>
            {highlights.map((item, index) => (
              <article
                className={`highlight-card ${
                  index === highlightIndex ? "is-active" : ""
                }`}
                key={item.title}
                onMouseEnter={() => setHighlightIndex(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 720px) 86vw, 520px"
                />

                <div className="highlight-gradient" />

                <div className="highlight-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="identity-section" id="a-propos">
          <div className="section-heading light">
            <span>Identité institutionnelle</span>
            <h2>Qui sommes-nous ?</h2>
          </div>

          <div className="identity-stage">
            {identityCards.map((card, index) => (
              <article
                className={`identity-card ${
                  index === identityIndex ? "is-visible" : ""
                }`}
                key={card.title}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1120px) 100vw, 1120px"
                  loading={index === identityIndex ? "eager" : "lazy"}
                />

                <div className="identity-overlay" />

                <div className="identity-content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}

            <button className="identity-next" onClick={nextIdentity}>
              ↓
            </button>
          </div>
        </section>

        <section className="programs-section" id="filieres">
          <div className="section-heading">
            <span>Formation académique</span>
            <h2>Nos filières</h2>
          </div>

          <div className="programs-row">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />

                <div className="program-overlay" />

                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="publications-section" id="publications">
          <div className="section-heading">
            <span>Production scientifique</span>
            <h2>Publications récentes</h2>
          </div>

          <div className="publication-showcase">
            <div className="publication-info">
              <span>{activePublication.type}</span>

              <h3>{activePublication.title}</h3>

              <div className="publication-meta">
                <p>
                  <strong>Auteur :</strong> {activePublication.author}
                </p>
                <p>
                  <strong>Année :</strong> {activePublication.year}
                </p>
                <p>
                  <strong>Institution :</strong> DSAE-UNIKAL
                </p>
              </div>

              <div className="publication-actions">
                <button>Télécharger</button>
                <button className="secondary-button">Voir le résumé</button>
              </div>

              <div className="publication-arrows">
                <button onClick={previousPublication}>←</button>
                <button onClick={nextPublication}>→</button>
              </div>
            </div>

            <div className="publication-cover">
              <Image
                src={activePublication.image}
                alt={activePublication.title}
                fill
                sizes="(max-width: 1000px) 100vw, 50vw"
              />
            </div>

            <button className="floating-next" onClick={nextPublication}>
              →
            </button>
          </div>
        </section>

        <section className="research-section" id="recherche">
          <div className="section-heading">
            <span>Recherche appliquée</span>
            <h2>Les axes de recherche</h2>
          </div>

          <div className="research-row">
            {researchAxes.map((axis) => (
              <article className="research-card" key={axis.title}>
                <Image
                  src={axis.image}
                  alt={axis.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />

                <div className="research-overlay" />

                <div className="research-content">
                  <h3>{axis.title}</h3>
                  <p>{axis.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}