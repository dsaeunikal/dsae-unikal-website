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

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type TeacherGroup = {
  rank: string;
  members: TeamMember[];
};

const categories: AboutCategory[] = [
  "Qui sommes-nous ?",
  "Notre histoire",
  "Notre expertise",
  "Gouvernance et équipe",
];

const filieres = [
  {
    title: "Production végétale",
    image: "/assets/dsae/field.jpg",
    paragraphs: [
      "La production végétale constitue l’un des piliers majeurs des sciences agronomiques, car elle concerne directement la sécurité alimentaire, l’amélioration des cultures, la qualité des semences, la fertilité des sols, la protection des plantes et l’optimisation des systèmes de production. Au sein de la DSAE-UNIKAL, cette filière permet aux étudiants d’acquérir une compréhension solide des mécanismes qui soutiennent la productivité agricole, depuis l’analyse du sol jusqu’à la récolte, en passant par les itinéraires techniques adaptés aux réalités locales.",
      "Nous maîtrisons ce domaine parce qu’il est au cœur des besoins agricoles de la Province du Tanganyika et de la République Démocratique du Congo. Les communautés ont besoin de professionnels capables d’améliorer les rendements, de réduire les pertes, d’accompagner les producteurs et de proposer des solutions durables face aux contraintes climatiques, économiques et environnementales. La production végétale prépare donc les étudiants à intervenir sur le terrain avec des compétences scientifiques, techniques et pratiques.",
      "À travers les enseignements, les travaux pratiques, les stages, les expérimentations et les projets académiques, la DSAE-UNIKAL ambitionne de former des spécialistes capables de contribuer à la transformation agricole. Les étudiants sont encouragés à observer, analyser, comparer, expérimenter et proposer des solutions adaptées aux cultures locales, aux systèmes de production existants et aux défis du développement rural.",
    ],
  },
  {
    title: "Production animale",
    image: "/assets/dsae/fermes-experimentales.jpg",
    paragraphs: [
      "La production animale occupe une place essentielle dans la formation agronomique, car elle contribue à l’alimentation, à l’économie familiale, à la création de revenus et au développement des systèmes agricoles intégrés. Cette filière permet d’étudier l’élevage, l’alimentation animale, la reproduction, la santé animale, la conduite des exploitations, la gestion des fermes et les techniques permettant d’améliorer les performances des productions animales.",
      "La DSAE-UNIKAL valorise cette filière parce qu’elle répond aux besoins des territoires ruraux où l’élevage constitue une ressource importante pour les ménages et les producteurs. Former des spécialistes en production animale, c’est préparer des cadres capables d’accompagner les éleveurs, d’améliorer les pratiques, de prévenir certaines pertes, de structurer les unités de production et de renforcer la contribution de l’élevage au développement local.",
      "Les fermes expérimentales, les travaux pratiques et les projets étudiants sont appelés à jouer un rôle important dans cette formation. Ils permettent aux étudiants de relier les connaissances théoriques à l’observation concrète des animaux, des systèmes d’alimentation, des conditions d’élevage et des réalités économiques des exploitations. Cette approche prépare des diplômés plus compétents, plus autonomes et plus proches des besoins du terrain.",
    ],
  },
  {
    title: "Agroéconomie",
    image: "/assets/dsae/territory.jpg",
    paragraphs: [
      "L’agroéconomie permet de comprendre l’agriculture sous son angle économique, social, territorial et entrepreneurial. Elle étudie les marchés agricoles, les coûts de production, les revenus des producteurs, les chaînes de valeur, les politiques agricoles, la transformation locale, l’entrepreneuriat rural et les mécanismes qui influencent la performance des filières agricoles.",
      "Cette filière est essentielle parce que l’agriculture ne se limite pas à produire. Il faut aussi comprendre comment organiser la production, comment vendre, comment transformer, comment financer les activités, comment analyser les marchés et comment créer de la valeur. La DSAE-UNIKAL veut former des étudiants capables de devenir analystes, gestionnaires de projets, entrepreneurs agricoles, conseillers techniques ou acteurs du développement territorial.",
      "L’agroéconomie aide les étudiants à développer une vision stratégique. Ils apprennent à identifier les contraintes économiques, à analyser les opportunités, à comprendre les besoins des producteurs et à proposer des solutions capables de renforcer la compétitivité des filières. Cette compétence est indispensable pour une agriculture moderne, productive et capable de contribuer réellement au développement.",
    ],
  },
  {
    title: "Gestion des ressources naturelles",
    image: "/assets/dsae/geomatique.jpg",
    paragraphs: [
      "La gestion des ressources naturelles concerne la protection, l’utilisation rationnelle et la valorisation des sols, de l’eau, des forêts, de la biodiversité, des paysages et des territoires agricoles. Cette filière est indispensable dans un contexte où les pressions environnementales, les changements climatiques et les besoins croissants en production agricole exigent une gestion plus responsable des ressources.",
      "La DSAE-UNIKAL accorde une grande importance à cette expertise parce que le développement agricole doit être pensé avec une vision durable. Il ne suffit pas de produire davantage ; il faut également préserver les ressources qui permettent cette production. Les étudiants sont donc formés à comprendre les interactions entre agriculture, environnement, territoire, climat et communautés.",
      "Les outils modernes comme la cartographie, la géomatique, la télédétection, les systèmes d’information géographique et l’analyse territoriale peuvent accompagner cette formation. Ils permettent de mieux comprendre l’occupation des sols, les risques environnementaux, les potentialités agricoles et les décisions à prendre pour une gestion durable du territoire.",
    ],
  },
];

const decanat: TeamMember[] = [
  {
    name: "Professeur Ordinateur BIDOC NGE OKWE Augustin",
    role: "Doyen",
    image: "/assets/dsae/students-professional.jpg",
    bio: "Responsable de l’orientation académique, scientifique et institutionnelle du domaine. Il coordonne la vision générale, représente l’entité et veille au développement de la formation, de la recherche et des partenariats.",
  },
  {
    name: "MAWAZO KATABE RAMAZANI",
    role: "Vice-Doyen",
    image: "/assets/dsae/students-training.jpg",
    bio: "Il accompagne le Doyen dans la coordination académique, le suivi pédagogique, l’organisation des enseignements et la mise en œuvre des priorités institutionnelles.",
  },
  {
    name: "Nom du Secrétaire Académique Facultaire",
    role: "Secrétaire Académique Facultaire",
    image: "/assets/dsae/formation.jpg",
    bio: "Il assure le suivi administratif académique, l’organisation des dossiers étudiants, la coordination des procédures pédagogiques et la documentation institutionnelle.",
  },
  {
    name: "Nom du Secrétaire chargé de la Recherche Scientifique",
    role: "Secrétaire chargé de la Recherche Scientifique",
    image: "/assets/dsae/recherche-scientifique.jpg",
    bio: "Il accompagne la structuration des activités scientifiques, le suivi des projets de recherche, la valorisation des publications et le développement des collaborations académiques.",
  },
];

const teacherGroups: TeacherGroup[] = [
  {
    rank: "Professeur émérite",
    members: [
      {
        name: "Nom du professeur émérite",
        role: "Professeur émérite",
        image: "/assets/dsae/students-professional.jpg",
        bio: "Enseignant de haut rang reconnu pour sa contribution exceptionnelle à la formation universitaire, à la recherche scientifique, à l’encadrement académique et au rayonnement institutionnel du domaine.",
      },
    ],
  },
  {
    rank: "Professeur ordinaire",
    members: [
      {
        name: "Nom du professeur ordinaire",
        role: "Professeur ordinaire",
        image: "/assets/dsae/recherche-scientifique.jpg",
        bio: "Professeur engagé dans l’enseignement supérieur, la direction scientifique, la recherche appliquée et l’encadrement des étudiants dans les domaines agronomiques et environnementaux.",
      },
    ],
  },
  {
    rank: "Professeur associé",
    members: [
      {
        name: "Nom du professeur associé",
        role: "Professeur associé",
        image: "/assets/dsae/formation.jpg",
        bio: "Membre du corps académique participant à la formation, à la recherche, aux travaux scientifiques et à l’accompagnement des étudiants dans les filières du domaine.",
      },
    ],
  },
  {
    rank: "Chef de travaux",
    members: [
      {
        name: "Nom du chef de travaux",
        role: "Chef de travaux",
        image: "/assets/dsae/students-training.jpg",
        bio: "Encadreur académique contribuant aux travaux pratiques, aux activités pédagogiques, aux recherches de terrain et au suivi scientifique des étudiants.",
      },
    ],
  },
  {
    rank: "Assistant",
    members: [
      {
        name: "Nom de l’assistant",
        role: "Assistant",
        image: "/assets/dsae/students-professional.jpg",
        bio: "Assistant universitaire chargé d’accompagner les enseignements, les travaux dirigés, les travaux pratiques, les recherches étudiantes et les activités académiques quotidiennes.",
      },
    ],
  },
  {
    rank: "Chargé de cours",
    members: [
      {
        name: "Nom du chargé de cours",
        role: "Chargé de cours",
        image: "/assets/dsae/campus-infra.jpg",
        bio: "Intervenant académique participant à la transmission des connaissances, à l’encadrement pédagogique et à l’appui scientifique dans les différentes filières du domaine.",
      },
    ],
  },
];

export default function AProposPage() {
  const [activeCategory, setActiveCategory] =
    useState<AboutCategory>("Qui sommes-nous ?");

  const [activeTeacherRank, setActiveTeacherRank] =
    useState<string | null>(null);

  const content = useMemo(() => {
    return activeCategory;
  }, [activeCategory]);

  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <Image
            src="/assets/dsae/vision.jpg"
            alt="À propos de la DSAE-UNIKAL"
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
              gouvernance et l’équipe qui portent le Domaine des Sciences
              Agronomiques et Environnementales de l’Université de Kalemie.
            </p>
          </div>
        </section>

        <section className="about-content-section">
          <div className="about-content-inner">
            <div className="about-filter-top">
              <h2>{content}</h2>
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

            {activeCategory === "Qui sommes-nous ?" && (
              <article className="about-editorial">
                <p>
                  Nous sommes le Domaine des Sciences Agronomiques et
                  Environnementales de l’Université de Kalemie, une entité
                  académique engagée dans la formation, la recherche appliquée,
                  l’innovation scientifique et l’accompagnement du développement
                  agricole, environnemental et socio-économique. La DSAE-UNIKAL
                  s’inscrit dans une vision universitaire moderne où la science
                  doit être utile à la société, proche des réalités du terrain et
                  capable de répondre aux grands défis liés à l’agriculture, à la
                  sécurité alimentaire, à la gestion des ressources naturelles et
                  à l’insertion professionnelle des jeunes.
                </p>

                <p>
                  Nous appartenons à l’Université de Kalemie, institution
                  publique d’enseignement supérieur et universitaire située dans
                  la Province du Tanganyika. Dans cette dynamique, le Domaine des
                  Sciences Agronomiques et Environnementales contribue à la
                  mission globale de l’université en formant des cadres capables
                  de comprendre les systèmes agricoles, d’analyser les
                  territoires, de proposer des solutions techniques et de
                  participer au développement durable de la République
                  Démocratique du Congo.
                </p>

                <p>
                  Notre mission est de former des étudiants compétents,
                  responsables et ouverts aux innovations scientifiques. La
                  DSAE-UNIKAL veut faire de ses apprenants des acteurs capables
                  d’intervenir dans les exploitations agricoles, les projets de
                  développement, les organisations internationales, les services
                  publics, les entreprises agroalimentaires, les laboratoires,
                  les fermes expérimentales et les initiatives
                  entrepreneuriales. La formation ne doit donc pas rester
                  uniquement théorique ; elle doit être reliée à la pratique, au
                  terrain, à la recherche et aux besoins réels des communautés.
                </p>

                <p>
                  Notre vision est de bâtir un domaine universitaire de
                  référence, reconnu pour la qualité de son enseignement, la
                  pertinence de ses recherches, l’engagement de ses étudiants et
                  sa contribution au développement agricole et environnemental.
                  Nous voulons devenir un espace où les idées scientifiques se
                  transforment en solutions concrètes, où les étudiants
                  apprennent à penser, à expérimenter, à innover et à servir la
                  société avec rigueur, discipline et responsabilité.
                </p>

                <p>
                  Notre slogan institutionnel peut se résumer ainsi : ensemble
                  pour une science agronomique utile, durable et tournée vers le
                  développement. Cette phrase exprime notre volonté de travailler
                  collectivement pour une université plus visible, plus
                  professionnelle, plus connectée aux territoires et plus
                  ambitieuse dans la formation des générations futures.
                </p>
              </article>
            )}

            {activeCategory === "Notre histoire" && (
              <article className="about-editorial">
                <p>
                  L’histoire d’une institution universitaire se construit à
                  travers une vision, des besoins sociaux, des décisions
                  académiques et l’engagement progressif des personnes qui la
                  portent. Le Domaine des Sciences Agronomiques et
                  Environnementales de l’Université de Kalemie s’inscrit dans
                  cette logique : celle d’une entité appelée à répondre aux
                  enjeux agricoles, environnementaux et économiques d’un
                  territoire riche en potentialités, mais confronté à de nombreux
                  défis de développement.
                </p>

                <p>
                  La création et le développement de la DSAE-UNIKAL répondent à
                  une nécessité profonde : former localement des compétences
                  capables d’accompagner les producteurs, d’améliorer les
                  systèmes de production, de gérer les ressources naturelles et
                  de contribuer à la transformation agricole. Dans une région où
                  l’agriculture occupe une place importante dans la vie des
                  ménages et des communautés, la présence d’un domaine
                  universitaire spécialisé constitue un levier essentiel pour
                  l’avenir.
                </p>

                <p>
                  Depuis ses débuts, la DSAE-UNIKAL s’efforce de construire une
                  identité académique fondée sur l’utilité sociale de la science.
                  Les enseignements, les travaux pratiques, les stages, les
                  recherches et les projets étudiants doivent progressivement
                  contribuer à une meilleure compréhension des réalités locales.
                  Cette démarche permet de faire de l’université non seulement un
                  lieu de transmission des connaissances, mais aussi un espace de
                  transformation des territoires.
                </p>

                <p>
                  L’histoire du domaine est également marquée par la volonté de
                  professionnaliser les formations. Les sciences agronomiques ne
                  peuvent pas se limiter à des cours magistraux ; elles exigent
                  l’observation du terrain, l’expérimentation, l’analyse des
                  sols, la compréhension des cultures, l’étude des animaux, la
                  lecture des marchés et la gestion durable des ressources.
                  C’est pourquoi la DSAE-UNIKAL cherche à renforcer les liens
                  entre théorie, pratique et recherche appliquée.
                </p>

                <p>
                  Au fil du temps, le domaine a vocation à s’ouvrir davantage
                  aux partenariats scientifiques, aux institutions publiques, aux
                  organisations de développement, aux centres de recherche, aux
                  entreprises agricoles et aux communautés locales. Cette
                  ouverture est indispensable pour donner aux étudiants une
                  formation plus complète et pour permettre à la faculté de
                  participer activement aux débats et solutions liés au
                  développement durable.
                </p>

                <p>
                  L’histoire de la DSAE-UNIKAL doit donc être comprise comme une
                  trajectoire en construction. Elle repose sur l’ambition de
                  former, de chercher, d’innover et de servir. Chaque génération
                  d’étudiants, d’enseignants, de chercheurs et de responsables
                  administratifs contribue à écrire cette histoire, en apportant
                  son énergie, ses compétences et sa vision pour une université
                  plus forte et plus utile.
                </p>
              </article>
            )}

            {activeCategory === "Notre expertise" && (
              <div className="about-expertise">
                <article className="about-editorial">
                  <p>
                    Notre expertise repose sur une approche multidisciplinaire
                    des sciences agronomiques et environnementales. La
                    DSAE-UNIKAL forme des étudiants capables de comprendre les
                    systèmes de production, les territoires agricoles, les
                    ressources naturelles, les marchés, les communautés et les
                    politiques de développement. Cette expertise est importante
                    parce que les défis agricoles actuels exigent des profils
                    complets, capables de relier la technique, l’économie,
                    l’environnement et l’innovation.
                  </p>

                  <p>
                    La force du domaine réside dans sa capacité à articuler la
                    formation théorique, la pratique de terrain, la recherche
                    appliquée et l’ouverture aux besoins des acteurs locaux. Les
                    filières ne sont pas seulement des parcours académiques ;
                    elles représentent des réponses structurées aux besoins de
                    la société. Elles permettent de former des cadres capables
                    d’agir dans les exploitations, les projets, les entreprises,
                    les ONG, les institutions publiques et les initiatives
                    entrepreneuriales.
                  </p>
                </article>

                <div className="about-filiere-list">
                  {filieres.map((filiere) => (
                    <article className="about-filiere" key={filiere.title}>
                      <div className="about-filiere-image">
                        <Image
                          src={filiere.image}
                          alt={filiere.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 42vw"
                        />
                      </div>

                      <div className="about-filiere-content">
                        <h3>{filiere.title}</h3>

                        {filiere.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === "Gouvernance et équipe" && (
              <div className="about-governance">
                <article className="about-editorial">
                  <p>
                    La gouvernance du Domaine des Sciences Agronomiques et
                    Environnementales repose sur une organisation académique,
                    administrative et scientifique destinée à assurer la qualité
                    de la formation, le bon fonctionnement des services, la
                    coordination des enseignements, le développement de la
                    recherche et l’accompagnement des étudiants. Une institution
                    universitaire solide a besoin d’une gouvernance claire, d’un
                    personnel engagé et d’une équipe capable de travailler avec
                    méthode, responsabilité et vision.
                  </p>

                  <p>
                    L’équipe de la DSAE-UNIKAL rassemble des responsables
                    académiques, des enseignants, des chercheurs, des assistants,
                    des personnels administratifs et techniques. Chacun joue un
                    rôle important dans la construction de l’institution. Le
                    décanat assure l’orientation générale, le corps enseignant
                    porte la mission pédagogique et scientifique, tandis que le
                    personnel administratif soutient l’organisation quotidienne
                    du domaine.
                  </p>
                </article>

                <section className="about-team-section">
                  <h3>Décanat</h3>

                  <div className="about-team-grid">
                    {decanat.map((member) => (
                      <article className="about-team-card" key={member.role}>
                        <div className="about-team-photo">
                          <Image
                            src={member.image}
                            alt={member.role}
                            fill
                            sizes="(max-width: 720px) 100vw, 25vw"
                          />
                        </div>

                        <div>
                          <span>{member.role}</span>
                          <h4>{member.name}</h4>
                          <p>{member.bio}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="about-team-section">
                  <h3>Corps enseignant</h3>

                  <div className="about-rank-accordion">
                    {teacherGroups.map((group) => (
                      <div className="about-rank-panel" key={group.rank}>
                        <button
                          type="button"
                          className={
                            activeTeacherRank === group.rank
                              ? "about-rank-button is-active"
                              : "about-rank-button"
                          }
                          onClick={() =>
                            setActiveTeacherRank((currentRank) =>
                              currentRank === group.rank ? null : group.rank
                            )
                          }
                        >
                          <span>{group.rank}</span>
                        </button>

                        {activeTeacherRank === group.rank && (
                          <div className="about-rank-members">
                            {group.members.map((member) => (
                              <article
                                className="about-team-card"
                                key={member.name}
                              >
                                <div className="about-team-photo">
                                  <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 720px) 100vw, 25vw"
                                  />
                                </div>

                                <div>
                                  <span>{member.role}</span>
                                  <h4>{member.name}</h4>
                                  <p>{member.bio}</p>
                                </div>
                              </article>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}