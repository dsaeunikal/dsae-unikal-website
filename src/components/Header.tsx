"use client";

import { useMemo, useState } from "react";

type Language = "fr" | "en";

type NavItem = {
  label: string;
  href: string;
};

type SearchItem = {
  label: string;
  href: string;
  keywords: string;
};

export default function Header() {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems: NavItem[] =
    language === "fr"
      ? [
          { label: "Actualités", href: "/actualites" },
{ label: "À propos", href: "/a-propos" },
{ label: "Publications", href: "/publications" },
{ label: "Recherches", href: "/recherches" },
{ label: "Partenaires", href: "/partenaires" },
{ label: "Alumni", href: "/alumni" },
{ label: "Contacts", href: "/contacts" },
        ]
      : [
          { label: "News", href: "/actualites" },
{ label: "About", href: "/a-propos" },
{ label: "Publications", href: "/publications" },
{ label: "Research", href: "/recherches" },
{ label: "Partners", href: "/partenaires" },
{ label: "Alumni", href: "/alumni" },
{ label: "Contacts", href: "/contacts" },
        ];

  const searchItems: SearchItem[] =
    language === "fr"
      ? [
          {
            label: "Actualités",
            href: "/actualites",
            keywords: "actualites news informations communiques une",
          },
          {
            label: "À propos",
            href: "#a-propos",
            keywords: "a propos vision mission valeurs institution",
          },
          {
            label: "Publications",
            href: "#publications",
            keywords: "publications rapports documents scientifiques",
          },
          {
            label: "Recherches",
            href: "#recherche",
            keywords: "recherche axes scientifiques innovation",
          },
          {
            label: "Partenaires",
            href: "#partenaires",
            keywords: "partenaires cooperation universites institutions",
          },
          {
            label: "Production végétale",
            href: "#filieres",
            keywords: "production vegetale cultures sols semences agriculture",
          },
          {
            label: "Production animale",
            href: "#filieres",
            keywords: "production animale elevage sante animale ferme",
          },
          {
            label: "Agroéconomie",
            href: "#filieres",
            keywords: "agroeconomie economie agricole marches chaines valeur",
          },
          {
            label: "Gestion des ressources humaines",
            href: "#filieres",
            keywords: "ressources humaines gestion leadership management",
          },
          {
            label: "Contacts",
            href: "#contacts",
            keywords: "contact email telephone adresse kalemie",
          },
        ]
      : [
          {
            label: "News",
            href: "/actualites",
            keywords: "news updates press featured information",
          },
          {
            label: "About",
            href: "#a-propos",
            keywords: "about vision mission values institution",
          },
          {
            label: "Publications",
            href: "#publications",
            keywords: "publications reports scientific documents",
          },
          {
            label: "Research",
            href: "#recherche",
            keywords: "research scientific innovation axes",
          },
          {
            label: "Partners",
            href: "#partenaires",
            keywords: "partners cooperation universities institutions",
          },
          {
            label: "Crop production",
            href: "#filieres",
            keywords: "crop production agriculture seeds soils",
          },
          {
            label: "Animal production",
            href: "#filieres",
            keywords: "animal production livestock farm",
          },
          {
            label: "Agricultural economics",
            href: "#filieres",
            keywords: "agricultural economics markets value chains",
          },
          {
            label: "Human resources management",
            href: "#filieres",
            keywords: "human resources leadership management",
          },
          {
            label: "Contacts",
            href: "#contacts",
            keywords: "contact email phone address kalemie",
          },
        ];

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return searchItems;
    }

    return searchItems.filter((item) => {
      const searchableText = `${item.label} ${item.keywords}`.toLowerCase();
      return searchableText.includes(query);
    });
  }, [searchItems, searchQuery]);

  const goToSection = (href: string) => {
    setMenuIsOpen(false);
    setSearchIsOpen(false);
    setSearchQuery("");

    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button
            type="button"
            className="header-brand"
            onClick={() => goToSection("/")}
            aria-label="Retour à l'accueil"
          >
            <div className="brand-mark">D</div>

            <div className="brand-text">
              <strong>DSAE</strong>
              <span>UNIKAL</span>
            </div>
          </button>

          <nav className={`header-nav ${menuIsOpen ? "is-open" : ""}`}>
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
              type="button"
              className="header-search-button"
              onClick={() => setSearchIsOpen(true)}
              aria-label={
                language === "fr" ? "Ouvrir la recherche" : "Open search"
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6Zm0-2a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Zm5.6.1 4.1 4.1-1.5 1.5-4.1-4.1 1.5-1.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="language-switcher" aria-label="Changer de langue">
              <button
                type="button"
                className={language === "fr" ? "is-active" : ""}
                onClick={() => setLanguage("fr")}
              >
                FR
              </button>

              <button
                type="button"
                className={language === "en" ? "is-active" : ""}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="header-menu-button"
              onClick={() => setMenuIsOpen((current) => !current)}
              aria-label={
                language === "fr"
                  ? "Ouvrir ou fermer le menu"
                  : "Open or close menu"
              }
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {searchIsOpen && (
        <div className="search-modal" role="dialog" aria-modal="true">
          <div className="search-box">
            <div className="search-box-header">
              <div>
                <span>{language === "fr" ? "DSAE-UNIKAL" : "DSAE-UNIKAL"}</span>
                <h3>
                  {language === "fr" ? "Recherche rapide" : "Quick search"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearchIsOpen(false);
                  setSearchQuery("");
                }}
                aria-label={
                  language === "fr" ? "Fermer la recherche" : "Close search"
                }
              >
                Fermer
              </button>
            </div>

            <input
              className="search-input"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={
                language === "fr"
                  ? "Rechercher une page, une filière, une publication..."
                  : "Search a page, program, publication..."
              }
              autoFocus
            />

            <div className="search-results">
              {filteredSearchItems.map((item) => (
                <button
                  type="button"
                  key={`${item.label}-${item.href}`}
                  onClick={() => goToSection(item.href)}
                >
                  <strong>{item.label}</strong>
                </button>
              ))}

              {filteredSearchItems.length === 0 && (
                <p className="search-empty">
                  {language === "fr"
                    ? "Aucun résultat trouvé."
                    : "No result found."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}