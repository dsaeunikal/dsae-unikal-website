"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <>
      <Header />

      <main className="directory-page">
        <section className="directory-hero">
          <Image
            src="/assets/dsae/campus-infra.jpg"
            alt="Contacts DSAE-UNIKAL"
            fill
            priority
            sizes="100vw"
            className="directory-hero-image"
          />

          <div className="directory-hero-inner">
            <span>Contact institutionnel</span>
            <h1>Entrer en contact avec la DSAE-UNIKAL</h1>
            <p>
              Pour les informations académiques, partenariats, publications,
              recherches, admissions ou collaborations institutionnelles,
              contactez la Faculté des Sciences Agronomiques.
            </p>
          </div>
        </section>

        <section className="contact-page-section">
          <div className="contact-page-inner">
            <div className="contact-info-panel">
              <span>Coordonnées</span>

              <h2>DSAE-UNIKAL</h2>

              <p>
                Faculté des Sciences Agronomiques, Université de Kalemie,
                Province du Tanganyika, République Démocratique du Congo.
              </p>

              <div className="contact-info-list">
                <a href="mailto:contact@dsae-unikal.cd">
                  contact@dsae-unikal.cd
                </a>
                <a href="tel:+243000000000">+243 000 000 000</a>
                <p>Kalemie, Tanganyika, RDC</p>
              </div>
            </div>

            <form className="contact-form">
              <div>
                <label>Nom complet</label>
                <input type="text" placeholder="Votre nom" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" placeholder="Votre adresse email" />
              </div>

              <div>
                <label>Sujet</label>
                <input type="text" placeholder="Objet du message" />
              </div>

              <div>
                <label>Message</label>
                <textarea placeholder="Votre message" rows={7} />
              </div>

              <button type="submit">Envoyer le message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
