export type NewsCategory =
  | "À la une"
  | "Production végétale"
  | "Production animale"
  | "Agroéconomie"
  | "Gestion des ressources naturelles"
  | "Communiqués de presse"
  | "Toutes les actualités";

export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
      linkLabel?: string;
      linkHref?: string;
    }
  | {
      type: "image";
      image: string;
      imageAlt: string;
      caption?: string;
    }
  | {
      type: "video";
      video: string;
      poster?: string;
      caption?: string;
    }
  | {
      type: "imageText";
      image: string;
      imageAlt: string;
      title: string;
      leftText: string;
      rightText: string;
    }
  | {
      type: "gallery";
      images: {
        src: string;
        alt: string;
      }[];
    }
  | {
      type: "quote";
      text: string;
    };

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  author: string;
  institution: string;
  image: string;
  excerpt: string;
  content: ArticleBlock[];
};

export const categories: NewsCategory[] = [
  "À la une",
  "Production végétale",
  "Production animale",
  "Agroéconomie",
  "Gestion des ressources naturelles",
  "Communiqués de presse",
  "Toutes les actualités",
];

export const newsItems: NewsItem[] = [
  {
    slug: "relance-recherche-scientifique",
    title: "Relance de la recherche scientifique à la DSAE-UNIKAL",
    category: "À la une",
    date: "12 juin 2026",
    author: "DSAE-UNIKAL",
    institution: "Faculté des Sciences Agronomiques",
    image: "/assets/dsae/farm2.png",
    excerpt:
      "La faculté renforce ses laboratoires, ses projets appliqués et ses partenariats scientifiques pour soutenir l’innovation agricole.",
    content: [
      {
        type: "paragraph",
        text:
          "La DSAE-UNIKAL engage une nouvelle dynamique scientifique orientée vers la recherche appliquée, l’innovation agricole et la production de connaissances utiles au développement de la Province du Tanganyika et de la République Démocratique du Congo. Cette orientation répond à une nécessité majeure : rapprocher davantage l’université des réalités du terrain, des besoins des producteurs, des défis de la sécurité alimentaire et des transformations scientifiques qui touchent aujourd’hui les systèmes agricoles.",
      },
      {
        type: "paragraph",
        text:
          "Cette relance ne concerne pas uniquement les laboratoires au sens matériel du terme. Elle concerne aussi la méthode de travail, la rigueur scientifique, la formation des étudiants, la mobilisation des enseignants, la structuration des projets et la capacité de la faculté à produire des résultats exploitables par les communautés. La recherche devient ainsi un instrument d’action, de planification, d’innovation et de développement territorial.",
        linkLabel: "Découvrir les axes de recherche",
        linkHref: "/recherches",
      },
      {
        type: "image",
        image: "/assets/dsae/recherche-scientifique.jpg",
        imageAlt: "Recherche scientifique à la DSAE-UNIKAL",
        caption:
          "La recherche appliquée permet de relier la formation universitaire aux besoins réels des territoires agricoles.",
      },
      {
        type: "paragraph",
        text:
          "Les enseignants, chercheurs et étudiants sont appelés à travailler autour de problématiques concrètes : amélioration des systèmes de production, fertilité des sols, valorisation des ressources naturelles, transformation agricole, entrepreneuriat rural, cartographie des territoires, gestion des données et accompagnement des acteurs locaux. Cette approche permet de construire une faculté plus utile, plus visible et plus connectée aux enjeux contemporains.",
      },
      {
        type: "imageText",
        image: "/assets/dsae/students-training.jpg",
        imageAlt: "Étudiants en formation pratique",
        title: "Une recherche qui forme et transforme",
        leftText:
          "La recherche scientifique constitue un cadre de formation exigeant. Elle apprend aux étudiants à observer, questionner, mesurer, comparer, analyser et proposer des solutions. Elle permet également de développer l’esprit critique, la précision méthodologique et la capacité à travailler en équipe.",
        rightText:
          "À travers cette dynamique, la DSAE-UNIKAL veut construire une culture scientifique forte. Les travaux de terrain, les projets tutorés, les stages, les mémoires et les collaborations institutionnelles doivent contribuer à produire une connaissance réellement utile à la société.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/assets/dsae/field.jpg",
            alt: "Champ expérimental",
          },
          {
            src: "/assets/dsae/geomatique.jpg",
            alt: "Géomatique agricole",
          },
          {
            src: "/assets/dsae/fermes-experimentales.jpg",
            alt: "Ferme expérimentale",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "La faculté souhaite également renforcer ses partenariats scientifiques avec les institutions nationales et internationales. Ces collaborations peuvent permettre l’échange d’expertise, l’accès à des ressources scientifiques, la participation à des projets communs, la publication de résultats et l’ouverture de nouvelles opportunités pour les étudiants et les jeunes chercheurs.",
      },
      {
        type: "video",
        video: "/assets/dsae/videos/actualite-demo.mp4",
        poster: "/assets/dsae/farm2.png",
        caption:
          "Emplacement vidéo : tu peux remplacer ce fichier par une vraie vidéo institutionnelle plus tard.",
      },
      {
        type: "paragraph",
        text:
          "Dans cette perspective, la recherche scientifique devient une responsabilité collective. Elle ne doit pas rester enfermée dans les salles de cours ou les rapports académiques. Elle doit circuler, être comprise, être valorisée et contribuer à l’amélioration des pratiques agricoles, à la protection de l’environnement et à la création d’opportunités économiques.",
      },
      {
        type: "quote",
        text:
          "Une faculté forte est une faculté capable de produire de la connaissance, de former des compétences et de transformer durablement son territoire.",
      },
    ],
  },
  {
    slug: "production-vegetale-durable",
    title: "Nouvelles initiatives pour la production végétale durable",
    category: "Production végétale",
    date: "10 juin 2026",
    author: "Département Production végétale",
    institution: "DSAE-UNIKAL",
    image: "/assets/dsae/field.jpg",
    excerpt:
      "Les équipes académiques développent des approches modernes pour améliorer les rendements, la qualité des semences et la résilience des cultures.",
    content: [
      {
        type: "paragraph",
        text:
          "La production végétale constitue l’un des domaines fondamentaux de la formation agronomique. Elle permet d’étudier les cultures, les sols, les semences, la fertilisation, la protection des plantes, les systèmes de culture et les itinéraires techniques capables d’améliorer la productivité agricole. À la DSAE-UNIKAL, cette filière occupe une place stratégique parce qu’elle répond directement aux besoins alimentaires, économiques et sociaux des communautés.",
      },
      {
        type: "paragraph",
        text:
          "Les nouvelles initiatives pour la production végétale durable visent à encourager une agriculture plus productive, mais également plus responsable. Il ne s’agit pas seulement d’augmenter les rendements ; il s’agit aussi de préserver les sols, d’utiliser rationnellement les ressources, de réduire les pertes, de renforcer la qualité des semences et de développer des pratiques adaptées aux réalités climatiques et territoriales.",
      },
      {
        type: "image",
        image: "/assets/dsae/field.jpg",
        imageAlt: "Production végétale durable",
        caption:
          "La production végétale durable associe rendement, qualité, préservation des sols et adaptation aux réalités locales.",
      },
      {
        type: "paragraph",
        text:
          "La faculté souhaite renforcer l’apprentissage par la pratique. Les étudiants doivent pouvoir observer les cultures, analyser les contraintes, comparer les pratiques agricoles, comprendre les besoins des producteurs et proposer des solutions techniques pertinentes. Cette approche permet de former des agronomes capables d’intervenir efficacement dans les exploitations, les projets agricoles, les ONG, les institutions publiques et les entreprises du secteur agroalimentaire.",
        linkLabel: "Voir les formations",
        linkHref: "/a-propos",
      },
      {
        type: "imageText",
        image: "/assets/dsae/students-training.jpg",
        imageAlt: "Formation pratique des étudiants",
        title: "Former par la pratique",
        leftText:
          "La formation pratique permet aux étudiants de développer des compétences concrètes. Elle leur apprend à observer les plantes, à comprendre les sols, à interpréter les symptômes, à suivre les cultures et à proposer des interventions techniques adaptées.",
        rightText:
          "Cette méthode favorise une meilleure insertion professionnelle, car elle prépare les étudiants aux réalités du terrain et aux exigences des métiers agricoles modernes.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/assets/dsae/field.jpg",
            alt: "Champ de culture",
          },
          {
            src: "/assets/dsae/formation.jpg",
            alt: "Formation agricole",
          },
          {
            src: "/assets/dsae/students-professional.jpg",
            alt: "Étudiants en situation professionnelle",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Ces initiatives peuvent également soutenir la vulgarisation agricole. Une faculté agronomique doit être capable de produire des connaissances, mais aussi de les transmettre aux acteurs concernés. Les producteurs, les coopératives, les services techniques, les entrepreneurs et les communautés rurales peuvent bénéficier des résultats issus des travaux académiques.",
      },
      {
        type: "video",
        video: "/assets/dsae/videos/production-vegetale.mp4",
        poster: "/assets/dsae/field.jpg",
        caption:
          "Emplacement vidéo réservé à une démonstration sur la production végétale.",
      },
      {
        type: "paragraph",
        text:
          "À long terme, l’ambition est de faire de la production végétale un levier de développement local. Cela suppose une meilleure organisation des essais, un encadrement renforcé des étudiants, des collaborations avec les producteurs, une documentation régulière des résultats et une valorisation des innovations agricoles issues du territoire.",
      },
    ],
  },
  {
    slug: "fermes-experimentales",
    title: "Modernisation des fermes expérimentales universitaires",
    category: "Production animale",
    date: "8 juin 2026",
    author: "DSAE-UNIKAL",
    institution: "Faculté des Sciences Agronomiques",
    image: "/assets/dsae/fermes-experimentales.jpg",
    excerpt:
      "Les fermes expérimentales deviennent des espaces de formation pratique, de recherche appliquée et de transfert technologique.",
    content: [
      {
        type: "paragraph",
        text:
          "La modernisation des fermes expérimentales universitaires représente une étape essentielle dans la professionnalisation des formations agronomiques. Ces espaces ne doivent pas être considérés comme de simples lieux de production, mais comme de véritables plateformes pédagogiques, scientifiques et techniques destinées à former les étudiants par la pratique.",
      },
      {
        type: "paragraph",
        text:
          "Les fermes expérimentales permettent d’aborder concrètement les questions liées à l’élevage, à l’alimentation animale, à la santé animale, à la reproduction, à la conduite des exploitations, à la gestion des ressources et à l’organisation économique des unités de production.",
      },
      {
        type: "image",
        image: "/assets/dsae/fermes-experimentales.jpg",
        imageAlt: "Fermes expérimentales universitaires",
        caption:
          "Les fermes expérimentales sont des espaces d’apprentissage, d’observation, de recherche et de démonstration.",
      },
      {
        type: "imageText",
        image: "/assets/dsae/students-training.jpg",
        imageAlt: "Étudiants en travaux pratiques",
        title: "Des espaces pédagogiques vivants",
        leftText:
          "Les étudiants peuvent y apprendre à observer les animaux, comprendre les systèmes d’élevage, analyser les contraintes de production et proposer des améliorations techniques.",
        rightText:
          "Ces espaces favorisent une formation plus complète parce qu’ils associent savoir théorique, geste technique, observation scientifique et esprit entrepreneurial.",
      },
      {
        type: "paragraph",
        text:
          "La DSAE-UNIKAL souhaite faire de ces fermes des lieux ouverts à la recherche appliquée, aux projets étudiants, aux démonstrations techniques et aux collaborations avec les acteurs du monde rural.",
      },
    ],
  },
  {
    slug: "agroeconomie-chaines-valeur",
    title: "Agroéconomie et développement des chaînes de valeur agricoles",
    category: "Agroéconomie",
    date: "6 juin 2026",
    author: "Département Agroéconomie",
    institution: "DSAE-UNIKAL",
    image: "/assets/dsae/territory.jpg",
    excerpt:
      "La DSAE-UNIKAL met l’accent sur l’analyse économique, l’entrepreneuriat agricole et la structuration des marchés locaux.",
    content: [
      {
        type: "paragraph",
        text:
          "L’agroéconomie occupe une place centrale dans la compréhension des systèmes agricoles modernes. Elle permet d’analyser les coûts de production, les revenus des producteurs, les marchés agricoles, les politiques publiques, les chaînes de valeur, l’entrepreneuriat rural et les mécanismes de transformation économique.",
      },
      {
        type: "paragraph",
        text:
          "À la DSAE-UNIKAL, l’agroéconomie est pensée comme une filière stratégique pour former des profils capables de comprendre les réalités économiques du monde agricole et de proposer des solutions capables de renforcer la compétitivité locale.",
      },
      {
        type: "image",
        image: "/assets/dsae/territory.jpg",
        imageAlt: "Agroéconomie et territoires agricoles",
        caption:
          "L’analyse économique permet de comprendre les marchés, les chaînes de valeur et les opportunités de transformation agricole.",
      },
      {
        type: "imageText",
        image: "/assets/dsae/insertion-professionnelle.jpg",
        imageAlt: "Insertion professionnelle agricole",
        title: "Créer de la valeur",
        leftText:
          "L’agroéconomie aide à identifier les opportunités économiques, les contraintes de marché, les besoins de financement et les stratégies de développement des filières.",
        rightText:
          "Elle prépare les étudiants à devenir analystes, entrepreneurs, conseillers agricoles, gestionnaires de projets ou acteurs de transformation locale.",
      },
      {
        type: "paragraph",
        text:
          "Cette orientation vise à encourager l’esprit entrepreneurial des étudiants. La faculté souhaite former des jeunes capables non seulement de comprendre les problèmes agricoles, mais aussi de créer des entreprises, structurer des initiatives et accompagner les producteurs vers une meilleure valorisation de leurs activités.",
      },
    ],
  },
  {
    slug: "ressources-naturelles-territoires",
    title: "Gestion durable des ressources naturelles et territoires agricoles",
    category: "Gestion des ressources naturelles",
    date: "4 juin 2026",
    author: "DSAE-UNIKAL",
    institution: "Faculté des Sciences Agronomiques",
    image: "/assets/dsae/geomatique.jpg",
    excerpt:
      "Les outils de cartographie, de télédétection et de SIG accompagnent la gestion durable des sols, de l’eau et des espaces agricoles.",
    content: [
      {
        type: "paragraph",
        text:
          "La gestion durable des ressources naturelles constitue un enjeu majeur pour les territoires agricoles. Les sols, l’eau, les forêts, la biodiversité et les espaces productifs doivent être compris, protégés et valorisés dans une logique de développement durable.",
      },
      {
        type: "paragraph",
        text:
          "La DSAE-UNIKAL développe une approche qui combine agronomie, environnement, géomatique, analyse territoriale et innovation numérique. Cette combinaison permet de mieux comprendre les dynamiques locales et de proposer des outils d’aide à la décision.",
        linkLabel: "Explorer les recherches",
        linkHref: "/recherches",
      },
      {
        type: "image",
        image: "/assets/dsae/geomatique.jpg",
        imageAlt: "Géomatique agricole",
        caption:
          "La géomatique permet d’analyser les territoires agricoles, les ressources naturelles et les dynamiques environnementales.",
      },
      {
        type: "imageText",
        image: "/assets/dsae/geomatique.jpg",
        imageAlt: "Analyse territoriale",
        title: "Cartographier pour mieux décider",
        leftText:
          "Les systèmes d’information géographique et la télédétection permettent de comprendre l’occupation des sols, les contraintes environnementales et les potentialités agricoles.",
        rightText:
          "Ces outils peuvent accompagner la planification agricole, la conservation des ressources, la gestion des risques et l’orientation des politiques locales.",
      },
      {
        type: "paragraph",
        text:
          "Cette démarche permet aux étudiants et chercheurs de produire des analyses plus précises, plus visuelles et plus utiles pour les décideurs, les producteurs et les communautés.",
      },
    ],
  },
  {
    slug: "communique-activites-institutionnelles-2026",
    title: "Communiqué : lancement des activités institutionnelles 2026",
    category: "Communiqués de presse",
    date: "2 juin 2026",
    author: "Secrétariat académique",
    institution: "DSAE-UNIKAL",
    image: "/assets/dsae/campus-infra.jpg",
    excerpt:
      "La Faculté des Sciences Agronomiques annonce le lancement officiel de nouvelles activités académiques, scientifiques et communautaires.",
    content: [
      {
        type: "paragraph",
        text:
          "La DSAE-UNIKAL annonce le lancement officiel de ses activités institutionnelles pour l’année 2026. Cette annonce marque une nouvelle étape dans l’organisation académique, scientifique et communautaire de la faculté.",
      },
      {
        type: "paragraph",
        text:
          "Les activités prévues concernent la formation, la recherche, les partenariats, la valorisation des publications, l’amélioration de la visibilité institutionnelle et le renforcement de la participation des étudiants, enseignants, chercheurs, alumni et partenaires.",
      },
      {
        type: "image",
        image: "/assets/dsae/campus-infra.jpg",
        imageAlt: "Activités institutionnelles DSAE-UNIKAL",
        caption:
          "La faculté veut renforcer son organisation institutionnelle, sa communication et son rayonnement académique.",
      },
      {
        type: "paragraph",
        text:
          "Cette dynamique s’inscrit dans une volonté de construire une faculté plus visible, plus structurée et plus engagée dans le développement agricole et scientifique du territoire.",
      },
    ],
  },
];