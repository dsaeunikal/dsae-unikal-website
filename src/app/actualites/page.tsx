"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, newsItems, type NewsCategory } from "./actualites-data";

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("À la une");

  const filteredItems = useMemo(() => {
    if (activeCategory === "Toutes les actualités") {
      return newsItems;
    }

    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="directory-page">
        <section className="directory-hero">
          <Image
            src="/assets/dsae/farm2.png"
            alt="Actualités DSAE-UNIKAL"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Actualités DSAE-UNIKAL</span>
            <h1>Suivre la vie scientifique, académique et institutionnelle</h1>
            <p>
              Retrouvez les annonces importantes, les projets de recherche, les
              activités académiques, les innovations agricoles et les communiqués
              officiels de la Faculté des Sciences Agronomiques.
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
                <Link
                  href={`/actualites/${item.slug}`}
                  className="directory-card-link"
                  key={item.slug}
                >
                  <article className="directory-card">
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}