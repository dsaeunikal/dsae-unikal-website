export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contacts">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block">
            <div className="footer-logo-row">
              <div className="footer-logo-mark">D</div>

              <div>
                <strong>DSAE</strong>
                <span>UNIKAL</span>
              </div>
            </div>

            <p>
              Une plateforme institutionnelle dédiée à la formation, à la
              recherche appliquée, à l’innovation scientifique et au
              développement durable.
            </p>

            <div className="footer-contact-list">
              <a href="mailto:contact@dsae-unikal.cd">
                contact@dsae-unikal.cd
              </a>
              <a href="tel:+243000000000">+243 000 000 000</a>
              <span>Kalemie, Tanganyika, RDC</span>
            </div>
          </div>

          <div className="footer-column">
            <span>Navigation</span>
            <a href="#actualites">Actualités</a>
            <a href="#a-propos">À propos</a>
            <a href="#publications">Publications</a>
            <a href="#recherche">Recherches</a>
            <a href="#partenaires">Partenaires</a>
          </div>

          <div className="footer-column">
            <span>Communauté</span>
            <a href="#partenaires">Partenaires</a>
            <a href="#alumni">Alumni</a>
            <a href="#contacts">Contacts</a>
            <a href="#newsletter">Newsletter</a>
          </div>

          <div className="footer-column">
            <span>Institution</span>
            <a
  href="https://unikal.ac.cd/"
  target="_blank"
  rel="noopener noreferrer"
>
  Université de Kalemie
</a>
            <a href="#">Faculté des Sciences Agronomiques</a>
            <a href="#recherche">Recherche scientifique</a>
            <a href="#filieres">Formation académique</a>
          </div>

          <div className="footer-newsletter" id="newsletter">
            <span>Newsletter</span>

            <h3>Recevoir les actualités DSAE-UNIKAL</h3>

            <p>
              Restez informé des publications, activités scientifiques,
              opportunités académiques et annonces institutionnelles.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Votre adresse email"
                aria-label="Adresse email"
              />
              <button type="submit">S’inscrire</button>
            </form>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.45-4.92 8.45-9.94Z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>

              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2h3.3l-7.2 8.23L23.5 22h-6.66l-5.22-6.82L5.65 22H2.33l7.7-8.8L1.88 2h6.83l4.71 6.23L18.9 2Zm-1.16 17.93h1.83L7.72 3.96H5.76l11.98 15.97Z" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2s-.23-1.63-.94-2.35c-.9-.94-1.9-.95-2.36-1C16.9 2.6 12 2.6 12 2.6h-.01s-4.9 0-8.2.25c-.46.05-1.47.06-2.36 1C.72 4.57.5 6.2.5 6.2S.25 8.12.25 10.05v1.8c0 1.93.24 3.85.24 3.85s.23 1.63.94 2.35c.9.94 2.08.91 2.61 1.01 1.9.18 7.96.24 7.96.24s4.9-.01 8.2-.26c.46-.05 1.47-.06 2.36-1 .71-.72.94-2.35.94-2.35s.25-1.92.25-3.85v-1.8c0-1.93-.25-3.85-.25-3.85ZM9.7 14.2V7.52l6.3 3.36-6.3 3.32Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} DSAE-UNIKAL. Tous droits réservés.</p>

          <div className="footer-legal-links">
            <a href="/confidentialite">Confidentialité</a>
            <a href="#">Sécurité</a>
            <a href="#">Cookies</a>
            <a href="#">Conditions Générales d’Utilisation</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}