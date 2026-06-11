import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "../actualites-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ActualiteDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const keepReading = newsItems
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main className="article-page">
        <section className="article-hero">
          <div className="article-hero-inner">
            <div className="article-meta-top">
              <span>{article.date}</span>
              <span>{article.category}</span>
            </div>

            <h1>{article.title}</h1>

            <p>{article.excerpt}</p>
          </div>
        </section>

        <section className="article-body-section">
          <div className="article-body-inner">
            <div className="article-share-line">
              <Link href="/actualites">← Retour aux actualités</Link>
            </div>

            <article className="article-content">
              {article.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index}>
                      {block.text}{" "}
                      {block.linkLabel && block.linkHref && (
                        <Link href={block.linkHref}>{block.linkLabel}</Link>
                      )}
                    </p>
                  );
                }

                if (block.type === "image") {
                  return (
                    <figure className="article-media-block" key={index}>
                      <div className="article-media-image">
                        <Image
                          src={block.image}
                          alt={block.imageAlt}
                          fill
                          sizes="(max-width: 900px) 100vw, 1200px"
                        />
                      </div>

                      {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                  );
                }

                if (block.type === "video") {
                  return (
                    <figure className="article-media-block" key={index}>
                      <video
                        className="article-video"
                        controls
                        preload="metadata"
                        poster={block.poster}
                      >
                        <source src={block.video} type="video/mp4" />
                      </video>

                      {block.caption && <figcaption>{block.caption}</figcaption>}
                    </figure>
                  );
                }

                if (block.type === "imageText") {
                  return (
                    <div className="article-image-text" key={index}>
                      <div className="article-image-box">
                        <Image
                          src={block.image}
                          alt={block.imageAlt}
                          fill
                          sizes="(max-width: 900px) 100vw, 1200px"
                        />
                      </div>

                      <div className="article-image-columns">
                        <div>
                          <h2>{block.title}</h2>
                          <p>{block.leftText}</p>
                        </div>

                        <div>
                          <p>{block.rightText}</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (block.type === "gallery") {
                  return (
                    <div className="article-gallery" key={index}>
                      {block.images.map((image) => (
                        <div className="article-gallery-image" key={image.src}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 720px) 100vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                if (block.type === "quote") {
                  return <blockquote key={index}>{block.text}</blockquote>;
                }

                return null;
              })}
            </article>

            <div className="article-author-card">
              <div>
                <span>Année</span>
                <strong>2026</strong>
              </div>

              <div>
                <span>Auteur</span>
                <strong>{article.author}</strong>
              </div>

              <div>
                <span>Institution</span>
                <strong>{article.institution}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="article-keep-reading">
          <div className="article-keep-reading-inner">
            <div className="article-keep-reading-top">
              <h2>Continuer la lecture</h2>
              <Link href="/actualites">Voir tout</Link>
            </div>

            <div className="article-keep-reading-grid">
              {keepReading.map((item) => (
                <Link
                  href={`/actualites/${item.slug}`}
                  className="article-related-card"
                  key={item.slug}
                >
                  <div className="article-related-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 720px) 100vw, 33vw"
                    />
                  </div>

                  <h3>{item.title}</h3>

                  <div>
                    <span>{item.category}</span>
                    <small>{item.date}</small>
                  </div>
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