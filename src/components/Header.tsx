"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const translations = {
  fr: {
    news: "Actualités",
    about: "À propos",
    publications: "Publications",
    research: "Recherches",
    partners: "Partenaires",
    alumni: "Alumni",
    contacts: "Contacts",
    search: "Rechercher",
    searchTitle: "Recherche rapide",
    searchPlaceholder: "Rechercher une page, une filière, une publication...",
    noResult: "Aucun résultat trouvé.",
    close: "Fermer",
  },
  en: {
    news: "News",
    about: "About",
    publications: "Publications",
    research: "Research",
    partners: "Partners",
    alumni: "Alumni",
    contacts: "Contacts",
    search: "Search",
    searchTitle: "Quick search",
    searchPlaceholder: "Search for a page, program, publication...",
    noResult: "No result found.",
    close: "Close",
  },
};

const searchItems = [
  {
    title: "Actualités",
    titleEn: "News",
    href: "#actualites",
    keywords: "actualité actualités news une informations relance recherche scientifique",
  },
  {
    title: "À propos",
    titleEn: "About",
    href: "#a-propos",
    keywords: "à propos qui sommes nous vision mission valeurs slogan about",
  },
  {
    title: "Publications",
    titleEn: "Publications",
    href: "#publications",
    keywords: "publications documents articles auteurs télécharger recherche",
  },
  {
    title: "Recherches",
    titleEn: "Research",
    href: "#recherche",
    keywords: "recherche axes agriculture durable géomatique ia data science fermes expérimentales",
  },
  {
    title: "Partenaires",
    titleEn: "Partners",
    href: "#partenaires",
    keywords: "partenaires coopération universités institutions organisations partenaires",
  },
  {
    title: "Production végétale",
    titleEn: "Crop production",
    href: "#filieres",
    keywords: "production végétale cultures sols agriculture semences",
  },
  {
    title: "Production animale",
    titleEn: "Animal production",
    href: "#filieres",
    keywords: "production animale élevage animaux ferme expérimental",
  },
  {
    title: "Agroéconomie",
    titleEn: "Agricultural economics",
    href: "#filieres",
    keywords: "agroéconomie économie agricole marchés chaînes de valeur",
  },
  {
    title: "Gestion des ressources humaines",
    titleEn: "Human resources management",
    href: "#filieres",
    keywords: "gestion ressources humaines management leadership",
  },
];

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const t = translations[language];

  const navItems = [
    { label: t.news, href: "#actualites" },
    { label: t.about, href: "#a-propos" },
    { label: t.publications, href: "#publications" },
    { label: t.research, href: "#recherche" },
    { label: t.partners, href: "#partenaires" },
    { label: t.alumni, href: "#alumni" },
    { label: t.contacts, href: "#contacts" },
  ];

  const filteredResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) return searchItems;

    return searchItems.filter((item) => {
      const title = `${item.title} ${item.titleEn} ${item.keywords}`.toLowerCase();
      return title.includes(cleanQuery);
    });
  }, [query]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!searchIsOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchIsOpen]);

  const goToSection = (href: string) => {
    setSearchIsOpen(false);
    setMenuIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const changeLanguage = (newLanguage: "fr" | "en") => {
    setLanguage(newLanguage);
    setMenuIsOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link
            href="/"
            className="site-logo"
            aria-label="Retour à l’accueil DSAE-UNIKAL"
            onClick={() => setMenuIsOpen(false)}
          >
            <span className="logo-mark">D</span>
            <span className="logo-text">
              <strong>DSAE</strong>
              <small>UNIKAL</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => goToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="search-button"
              aria-label={t.search}
              onClick={() => setSearchIsOpen(true)}
            >
              <span>⌕</span>
            </button>

            <div className="language-switcher" aria-label="Sélecteur de langue">
              <button
                className={language === "fr" ? "is-active" : ""}
                onClick={() => changeLanguage("fr")}
                type="button"
              >
                FR
              </button>
              <button
                className={language === "en" ? "is-active" : ""}
                onClick={() => changeLanguage("en")}
                type="button"
              >
                EN
              </button>
            </div>

            <button
              className={`menu-button ${menuIsOpen ? "is-open" : ""}`}
              aria-label="Ouvrir le menu"
              onClick={() => setMenuIsOpen((current) => !current)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuIsOpen ? "is-visible" : ""}`}>
          <nav aria-label="Navigation mobile">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => goToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <button type="button" onClick={() => setSearchIsOpen(true)}>
              {t.search}
            </button>

            <div>
              <button
                type="button"
                className={language === "fr" ? "is-active" : ""}
                onClick={() => changeLanguage("fr")}
              >
                Français
              </button>
              <button
                type="button"
                className={language === "en" ? "is-active" : ""}
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-modal ${searchIsOpen ? "is-visible" : ""}`}>
        <div
          className="search-backdrop"
          onClick={() => setSearchIsOpen(false)}
        />

        <div className="search-panel" role="dialog" aria-modal="true">
          <div className="search-panel-top">
            <div>
              <span>DSAE-UNIKAL</span>
              <h2>{t.searchTitle}</h2>
            </div>

            <button type="button" onClick={() => setSearchIsOpen(false)}>
              {t.close}
            </button>
          </div>

          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
          />

          <div className="search-results">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => goToSection(item.href)}
                >
                  <strong>{language === "fr" ? item.title : item.titleEn}</strong>
                  <span>{item.href}</span>
                </button>
              ))
            ) : (
              <p>{t.noResult}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}