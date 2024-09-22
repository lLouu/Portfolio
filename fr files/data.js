const see_more_str = "Voir plus →"
const roles = ["Admin Systèmes", "DevSecOps", "Ingénieur CI/CD", "Auditeur Cyber"]
const popup_const = {
   "board": "Points clés",
   "objective": "Objectif",
   "stakes": "Enjeux",
   "team": "Equipe",
   "deliverables": "Livrables",
   "contribution": "Ma Contribution",
   "results": "Resultats"
}

const content = [
   {
      "title": "Architecte Junior",
      "type": "travail - stage",
      "img": "onepoint.png",
      "desc": "Création d'une démarche pour la migration des Authorization Servers",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "board": {
            "objective": "Créer une méthode de migration des serveurs d'autorisation API, que ce soit pour changer de plateforme (ex. passage au cloud), de logiciel ou de méthode d'authentification (ex. SAML, OAuth, OIDC).",
            "stakes": "Cette méthode servira de base aux missions avec un enjeu d'intégration ou de migration de serveurs d'autorisation pour les clients Onepoint.",
            "team": ["Un consultant senior en architecture de solutions", "Moi-même, architecte junior"],
            "deliverables": ["Le manuel de la méthode", "Un environnement virtuel bac à sable", "Un support PowerPoint et Excel pour les différentes étapes de la méthode"]
         },
         "contribution": `
            <div class="titleC">Cadrage</div>
            Dans un premier temps, il a été nécessaire de cadrer le sujet. Cela s'est traduit par la compréhension des enjeux, et ainsi :<br>
            - Rechercher des documents sur Google Scholar<br>
            - Rechercher les recommandations d'organismes spécialisés gouvernementaux, comme l'ANSSI<br>
            - Analyser les différentes solutions existantes sur le marché, leur part de marché et la satisfaction des utilisateurs pour déduire les solutions susceptibles d'être rencontrées<br>
            <br>
            <div class="titleC">Conception de la méthode</div>
            La méthode est basée sur la volonté de répondre aux enjeux principaux : préserver au mieux la disponibilité, l'intégrité, la confidentialité et la non-répudiation ; apporter un retour sur investissement rationnel ; permettre une exécution rapide.<br>
            De ce fait, elle se veut axée sur les besoins du client et se décompose en quatre étapes :<br>
            - Déduire les enjeux spécifiques du client, et les évaluer<br>
            - Identifier quelles migrations peuvent être réalisées, et en déduire leur retour sur investissement pour choisir lesquelles appliquer<br>
            - Définir les politiques de migration, les SLO à maintenir durant la migration, et créer un protocole de migration basé sur un modèle facilitant la traçabilité, les vérifications et les retours en arrière (rollback)<br>
            - Communiquer, appliquer et vérifier la migration<br>
            <br>
            <div class="titleC">Mise en place de l'environnement bac à sable</div>
            Pour éprouver la méthode, il a été nécessaire de créer un environnement bac à sable. Ce dernier est constitué de 8 machines virtuelles, dont un Keycloak d'une version non maintenue, et un OpenLDAP. Cet environnement dispose de 2 flux d'authentification :<br>
            - une authentification OAuth d'un Wordpress vers le Keycloak<br>
            - une authentification LDAP d'un proxy Squid vers l'OpenLDAP<br>
            <br></div>
            Il est alors possible de tester la méthode dans le cadre de différentes migrations, telles que :<br>
            - Mettre à niveau la version majeure de Keycloak<br>
            - Effectuer un passage au cloud de Keycloak vers Okta<br>
            - Changer le flux LDAP en un flux OAuth<br>
         `,
         "skills": {
            "comp": ["Migration", "Automatisation", "IAM", "Gouvernance"],
            "dev": ["Bash"],
            "tools": ["PlantUML", "VirtualBox"],
            "softwares": ["Linux", "Keycloak", "Okta", "OpenLDAP", "Squid Proxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["IAM", "Automatisation"],
            "sysadmin": ["Migration", "Linux"],
            "ci/cd": ["Automatisation", "Bash"],
            "audit": ["Gouvernance", "IAM"]
         }
      }
   },
   {
      "title": "Analyste Junior",
      "type": "travail - stage",
      "img": "editis.png",
      "desc": "Diagnostique technique et Rationnalisation financière de la Direction des Infrastructures",
      "filters": ["audit"],
      "content": {
         "board": {
            "objective": "Fournir un rapport d'étonnement et une rationalisation sur le fonctionnement de la DSI d'EDITIS.",
            "stakes": "Ce rapport aura un impact important sur les décisions stratégiques d'EDITIS concernant l'orientation financière de l'IT, ainsi que sur la méthode de gouvernance employée.",
            "team": ["Un architecte d'entreprise senior", "Un consultant senior en IT pour les médias", "Moi-même, analyste junior"],
            "deliverables": ["10 ateliers d'échanges avec le client", "Une entrevue entre la DSI d'EDITIS et la DSIT de Onepoint", "Une analyse de maturité", "Des recommandations sur 4 axes (Technologique, Humain, Financier et Contractuel)"]
         },
         "contribution": `
            <div class="titleC">Indexation et traitement des données</div>
            L'une de mes tâches principales était de :<br>
            - Récolter les différentes données échangées pendant les ateliers<br>
            - Indexer ces données pour les retrouver facilement<br>
            - Classifier les données parmi les 4 grands axes de l'analyse et les regrouper en thématiques<br>
            <br>
            <div class="titleC">Analyse de maturité</div>
            Avec l'aide de l'architecte d'entreprise senior, j'ai pu :<br>
            - Définir une échelle de maturité permettant de positionner une situation sur une échelle de 0 (immature) à 5 (complètement auto-géré)<br>
            - Comparer les données du client avec l'état de l'art<br>
            - Appliquer l'échelle de maturité à chacune des thématiques abordées<br>
         `,
         "skills": {
            "comp": ["Audit", "FinOps", "Analyse de Maturité"]
         },
         "vignette_skills": {
            "all": ["Audit", "FinOps"]
         }
      }
   },
   {
      "title": "DevSecOps Junior",
      "type": "travail - stage",
      "img": "alstom.png",
      "desc": "Création d'un framework d'automatisation de déploiement",
      "filters": ["devsecops", "ci/cd", "sysadmin"],
      "content": {
         "board": {
            "objective": "Automatiser l'intégration de la CyberSecurity Platform (CSP).",
            "stakes": "L'automatisation permet de réduire le temps d'intégration de la CSP, élevé d'une part car il faut le faire au moins une fois pour chaque client, mais aussi dans un cadre de développement du produit afin de pouvoir le tester.",
            "team": ["Un DevOps senior", "Moi-même, DevSecOps junior"],
            "deliverables": ["Scripts d'automatisation", "Framework de création de scripts normés sans connaissances en code"]
         },
         "contribution": `
            Durant ce stage, j'ai pu :<br>
            - Transformer des protocoles manuels en scripts Python et PowerShell<br>
            - Analyser les enjeux et les mettre en valeur auprès des managers<br>
            - Proposer un outil répondant à ces enjeux, facilitant la maintenance des scripts, mutualisant les fonctions d'automatisation, et standardisant l'utilisation des scripts
         `,
         "results": `
            Le plus gros chantier a été le développement du framework de création de scripts. L'objectif était d'une part de pouvoir transformer un texte en anglais, suivant quelques règles de syntaxe, en un script fonctionnel et conforme aux exigences de l'entreprise, telles que les politiques de logs ou la capacité d'effectuer uniquement certaines étapes du script dans l'ordre souhaité.<br>
            <br>
            Quelques fonctionnalités additionnelles ont également été développées, notamment un stockage sécurisé des options, en particulier des mots de passe, géré de sorte que le script n'exige aucune intervention utilisateur en cours d'exécution, afin de se rapprocher d'un fonctionnement "on double-clique et on attend".<br>
            <br>
            Ainsi, cet outil permet de faire le lien entre les développeurs, qui créent les fonctions d'automatisation, les créateurs de protocoles, qui peuvent générer un script à partir d'un texte en anglais lisible utilisant ces fonctions, et les opérateurs, qui exécutent le script, entrent les options spécifiques à leur utilisation, puis attendent.
         `,
         "skills": {
            "comp": ["Intégration", "Migration", "Automatisation"],
            "dev": ["Python", "Powershell", "Bash"],
            "tools": [],
            "softwares": ["Microsoft Server", "Linux"]
         },
         "vignette_skills": {
            "all": ["Intégration", "Python"],
            "sysadmin": ["Linux", "Powershell"],
            "ci/cd": ["Automatisation", "Python"],
            "devsecops": ["Python", "Powershell"]
         }
      }
   },
   {
      "title": "Créer un Système d'Information",
      "type": "projet",
      "img": "master_project.png",
      "desc": "Design, Déploiement et Audit d'un Système d'Information d'entreprise sur un ESX",
      "filters": ["devsecops", "ci/cd", "sysadmin", "audit"],
      "content": {
         "board": {
            "objective": "Réaliser un projet étudiant mettant à l'épreuve nos compétences en conception, intégration et audit d'un système d'information d'entreprise.",
            "stakes": "Ce projet est fondamental pour la validation de mon master à l'EFREI.",
            "team": ["2 autres étudiants en Cybersécurité des Systèmes d'Information et Gouvernance", "2 étudiants en Cybersécurité Infrastructures et Logiciels", "1 étudiant en Cybersécurité Cloud", "Moi-même, étudiant en Cybersécurité des Systèmes d'Information et Gouvernance"],
            "deliverables": ["Architecture réseau du SI", "SI déployé sur un ESX", "Analyse de risque du SI"]
         },
         "contribution": `
            <div class="titleC">Conception du Système d'Information</div>
            Dans un premier temps, j'ai activement participé à la conception de l'architecture du système d'information, incluant :<br>
            - La segmentation en zones, comprenant des DMZ, des zones serveurs et des zones utilisateurs selon les criticités et les utilisations<br>
            - La définition exhaustive de la matrice de flux<br>
            <br>
            <div class="titleC">Déploiement des services</div>
            Ensuite, il a fallu déployer les différents services, dont :<br>
            - Les PfSense, en appliquant les filtres pour n'autoriser que les flux définis dans la matrice de flux, ainsi que la mise en place d'un VPN et d'un IDS<br>
            - Le système DNS, comprenant deux domaines (un interne et un externe), avec l'interne répliqué en DMZ OUT (provenant du système) et l'externe répliqué en DMZ IN (provenant d'internet)<br>
            <br>
            <div class="titleC">Analyse de risque</div>
            Enfin, il a fallu réaliser une analyse de risque. Avec les deux autres étudiants de ma majeure, nous avons utilisé la méthode EBIOS pour mener à bien cette tâche.
         `,
         "skills": {
            "comp": ["Architecture", "Intégration", "Analyse de risque"],
            "dev": [],
            "tools": ["Visual Paradigm", "ESX", "EBIOS"],
            "softwares": ["Microsoft Active Directory", "Bind9 (DNS)", "PKI", "Squid Proxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["Architecture", "ESX"],
            "audit": ["RiskAnalysis", "EBIOS"]
         }
      }
   },
   {
      "title": "PenEnv - scripts Bash de Pentesting ",
      "type": "projet",
      "img": "penenv.png",
      "desc": "Outil d'installation automatique d'un environnement de Pentesting Linux",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "content": {
         "board": {
            "objective": "Créer un outil d'installation pour harmoniser les environnements virtuels pour le pentesting.",
            "stakes": "Faciliter la création de nouveaux environnements virtuels de pentest en limitant les bugs d'installation et de configuration.",
            "deliverables": ["Repository GitHub", "Installeur en une ligne", "Un script permettant de stocker les stdin et stdout d'un processus en arrière-plan dans des fichiers, facilitant l'interaction avec les scripts", "D'autres scripts facilitant le pentesting"]
         },
         "contribution": `
            <div class="titleC">Script d'installation</div>
            L'objectif est d'harmoniser les différents outils pour éviter des bugs de compatibilité ou d'installation. Toutes ces installations sont faites en parallèle. De cette manière, un ensemble de plus de 100 outils, qu'il s'agisse de logiciels, de scripts ou de langages de programmation, sont installés en 40 minutes en utilisant les configurations par défaut. Ces outils prenant entre 10 minutes et 2 heures à installer, le temps gagné est considérable.<br>
            <br>
            <div class="titleC">Permettre l'interaction entre les processus en arrière-plan et les scripts</div>
            L'une des principales problématiques dans l'automatisation en bash est l'incapacité à interagir avec un service en arrière-plan, comme un serveur ou un outil de scan tournant en continu. Pour remédier à cela, il a été nécessaire de trouver un moyen de rediriger les entrées (stdin) et les sorties (stdout) vers des fichiers en direct.<br>
            D'une part, pour les entrées, il a fallu trouver un moyen de placer dans un pipeline un processus qui lit continuellement des entrées. Comme on souhaite que le processus reste actif, l'entrée doit être un flux constant et ne pas s'arrêter. Heureusement, avec la commande tail, il est possible de récupérer les nouvelles lignes dans un fichier.<br>
            D'autre part, il est nécessaire d'avoir un fichier de sortie. À première vue, la tâche semble simple, car il est facile de rediriger la sortie d'une commande dans un fichier en bash. Cependant, cette sortie est placée dans un buffer, et tant que ce buffer n'est pas plein ou que la commande n'est pas terminée, le fichier de sortie n'est pas mis à jour. Pour cette raison, il a été nécessaire d'utiliser une commande difficile à trouver : "unbuffer".<br>
            De cette manière, après de longues recherches pour trouver cette méthode, il est désormais possible de lancer un processus en arrière-plan tout en interagissant avec lui en direct via la lecture et l'écriture de fichiers.
         `,
         "skills": {
            "comp": ["Intégration", "Automatisation", "Parallélisation", "Ingénierie"],
            "dev": ["Bash"],
            "tools": [],
            "softwares": ["Linux"]
         },
         "vignette_skills": {
            "all": ["Automatisation", "Bash"]
         }
      }
   },
   {
      "title": "Portfolio",
      "type": "projet",
      "img": "portfolio.png",
      "desc": "Création d'un site client-side sans utiliser de frameworks",
      "filters": ["devsecops", "ci/cd"],
      "content": {
         "board": {
            "objective": "Créer un portfolio from scratch sans framework et statique, tout en permettant de modifier facilement le contenu.",
            "stakes": "Avoir un portfolio hébergé sur un serveur n'acceptant qu'une connexion FTP, c'est-à-dire un portfolio statique, tout en disposant de capacités de filtrage et d'adaptation avancées du contenu.",
            "deliverables": ["Repository Github", "Versions anglaise et française"]
         },
         "contribution": `
             <div class="titleC">Design du site</div>
             Pour être honnête, le design n'est pas mon point fort. Cependant, je me suis inspiré de designs d'autres portfolios, et j'ai réalisé l'intégralité du front en HTML+CSS.<br>
             J'ai également ajouté un système de thème clair et sombre assez simple : les couleurs utilisent des variables CSS, ce qui permet de changer de thème en modifiant simplement la source CSS des variables.<br>
             Enfin, j'ai utilisé les animations CSS, que ce soit pour la phrase de la landing page qui change en boucle, ou pour les transitions, comme le filtre des vignettes ou le changement de thème.<br>
             <br>
             <div class="titleC">Système de vignettes</div>
             L'objectif est évidemment de répertorier mes différents projets et de rendre le site adaptable à mes futures expériences. Pour ce faire, les vignettes sont créées et ajoutées via JavaScript à partir d'un fichier JSON.<br>
             Modifier le JSON modifie ainsi directement le contenu du portfolio, facilitant une modification rapide.<br>
             Il est possible de filtrer ces vignettes, ce qui permet d'adapter les tags associés à la recherche.<br>
             <br>
             <div class="titleC">Responsivité</div>
             Enfin, il a fallu rendre le site responsive. J'ai utilisé les flexbox, mais j'ai aussi dû réfléchir à une solution pour les vignettes et les popups. Ainsi, avec JavaScript, le site ajuste le nombre de vignettes par ligne (entre 1 et 5) et réadapte la position des popups en cas de redimensionnement de la fenêtre.<br>
             <br>
             <div class="titleC">Session</div>
             Un système de session a été mis en place pour conserver le filtre et le thème choisis par l'utilisateur. Pour ce faire, les local et session storage sont utilisés.
             `,
         "skills": {
            "comp": ["Web", "Design"],
            "dev": ["js", "css", "html"],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Web", "js"]
         }
      }
   },
   {
      "title": "EFREI Paris",
      "type": "études",
      "img": "efrei.jpg",
      "desc": "Etude en Cybersécurité des Système d'Information et en Gouvernance",
      "filters": ["sysadmin", "devsecops", "audit"],
      "content": {
         "board": {
            "objective": "Apprendre et se former dans le but de devenir un ingénieur en cybersécurité capable de répondre aux attentes techniques et de gouvernance.",
            "stakes": "Le marché informatique, en particulier en cybersécurité, est très changeant. Il est donc essentiel d'apprendre à s'informer, à s'adapter rapidement, et à connaître les bases non pas par cœur mais dans leur fonctionnement, afin d'avoir une idée des failles et de leurs remédiations."
         },
         "results": `
            <div class="titleC">Cybersécurité des Systèmes d'Information et Gouvernance</div>
            Ma majeure tourne autour de la cybersécurité des systèmes d'information et de la gouvernance. Cela se divise en deux catégories.<br>
            D'une part, la sécurité des SI implique de connaître :<br>
            - La sécurité des flux de communication et la cryptographie associée.<br>
            - Le contrôle des flux réseau.<br>
            - La détection de failles ou d'intrusions, et leur remédiation automatisée.<br>
            - Les bonnes pratiques de sécurité pour l'architecture des SI.<br>
            - La sécurisation des systèmes virtualisés.<br>
            - L'Identity Access Management.<br>
            <br>
            D'autre part, la gouvernance implique :<br>
            - La classification des données pour un stockage et un traitement sécurisés, conformes aux législations.<br>
            - Les normes ISO 27001, 27003 et 27005.<br>
            - L'analyse de risque avec EBIOS.<br>
            - La gestion de risque avec les PCA et PRA.<br>
            <br>
            <div class="titleC">Projets de Master</div>
            Pendant mon master, trois projets ont été réalisés, tous en équipe de 6 :<br>
            - Le premier a été réalisé à la fin de la 3e année dans le cadre d'un "mastercamp", afin de donner un aperçu de notre future majeure. Le thème de ce projet pour mon équipe était de créer un outil de partage de documents confidentiels, avec un système cryptographique permettant de garantir que seules les personnes autorisées puissent consulter les données en clair.<br>
            - Le deuxième a été réalisé pendant tout le 2e semestre de la 4e année sous le nom de "master project", et c'est le projet le plus challengeant des trois. Il s'agissait de créer un système d'information, de le déployer sur ESX, et de l'auditer. Une autre vignette de mon portfolio entre plus en détail.<br>
            - Le dernier a été réalisé pendant le premier semestre de la dernière année, et consiste à produire un outil utilitaire. Dans mon cas, ce projet consistait à créer une application cliente pour gérer les authentifications multi-facteurs utilisant du TOTP.<br>
            <br>
            <div class="titleC">Stages et International</div>
            Au cours des 5 années, 4 stages ont été effectués, ainsi qu'un séjour international d'un semestre. Les stages aident à appréhender le monde du travail :<br>
            - En 1ère année, un stage ouvrier servant à découvrir des métiers généralement éloignés des bureaux où travaillent les ingénieurs, mais impactés par les décisions prises dans ces bureaux.<br>
            - En 2e année, un stage commercial pour apprendre les démarches de vente et comprendre comment la valeur est apportée.<br>
            - En 4e année, un stage technique afin de challenger nos compétences techniques en environnement professionnel.<br>
            - En 5e année, un stage ingénieur pour nous challenger tant sur le plan des compétences techniques que sur les capacités d'innovation et d'application de notre expertise de majeure.<br>
            <br>
            <div class="titleC">De l'atome au logiciel</div>
            Les deux premières années de prépa intégrée à l'EFREI portent sur la compréhension du fonctionnement d'un ordinateur, en partant de l'atome jusqu'au fonctionnement algorithmique. Cela inclut donc les semi-conducteurs, l'électricité, les portes logiques, la conception d'électronique simple en VHDL, la compréhension mathématique du binaire et les optimisations de calculs binaires.<br>
            <br>
            <div class="titleC">Communication</div>
            L'EFREI est une école où 20 % à 25 % du programme est consacré à la communication. Cela inclut plusieurs aspects :<br>
            - La capacité à exprimer et développer une idée, en utilisant à bon escient le storytelling.<br>
            - La capacité à présenter à l'oral.<br>
            - Les compétences en anglais.<br>
            - La compréhension des cultures d'entreprise, la notion de soft skills et des démarches RSE.
            `,
         "skills": {
            "comp": ["Sécurité Réseaux", "Détection & Protection", "Architecture", "IAM", "Classification des données", "ISO 2700X", "Analyse de risque", "Cryptographie", "Protocoles sécurisés", "Communication"],
            "dev": ["Python", "C", "C++", "SQL", "VHDL"],
            "tools": ["EBIOS", "PCA", "PRA"],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Architecture", "EBIOS"],
            "sysadmin": ["Architecture", "IAM"],
            "audit": ["EBIOS", "PCA"],
            "devsecops": ["Python", "C++", "SQL"]
         }
      }
   },
   {
      "title": "GCP Digital Leader",
      "type": "certification",
      "img": "gcp.png",
      "desc": "Certification Google Cloud Platform sur les produits GCP et leur cas d'utilisation",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "board": {
            "objective": "Apprendre les bases des outils et des bonnes pratiques Cloud, ainsi que les outils GCP qui existent à cet effet",
            "stakes": "GCP Google Cloud Digital Leader"
         },
         "results": `
            Après avoir passé l'examen, j'ai obtenu la certification (<a href="https://www.credly.com/badges/a31235b9-4be0-4093-8b6b-09dc0653fcc1/public_url" target="_blank"> preuve ici </a>). Dans cette certification, j'ai appris à propos de :<br>
            - L'utilité du cloud en entreprise<br>
            - La façon dont les données sont traitées et utilisées<br>
            - La façon dont l'IA est implémentée<br>
            - Les méthodes de migration vers le cloud<br>
            - La sécurisation du cloud<br>
            - Le scaling et le FinOps
         `,
         "skills": {
            "comp": ["Stockage de données", "Cloud IA", "Move to Cloud", "Sécurité Cloud", "FinOps"],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Move to Cloud", "FinOps"],
            "sysadmin": ["Stockage de données"]
         }
      }

   },
   {
      "title": "AWS Solution Architect Associate",
      "type": "études",
      "img": "aws.png",
      "desc": "Certification AWS sur l'Architecture solution utilisant les services AWS (95% du score requis)",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "board": {
            "objective": "Apprendre à utiliser AWS pour créer des solutions fonctionnelles, sécurisées et optimisées en termes de coûts",
            "stakes": "AWS Solution Architect Associate"
         },
         "results": `
            Malheureusement, j'ai obtenu 690/1000 à l'examen, alors que la note de passage était de 720. Cependant, cela signifie aussi que je suis proche du niveau requis pour la certification. J'ai appris ce qui suit :<br>
            - Comment utiliser AWS Compute<br>
            - Gérer les données sur AWS<br>
            - Organiser les réseaux et la sécurité réseau<br>
            - Gérer les bases de données<br>
            - Faire du serverless<br>
            - Utiliser AWS pour IAM<br>
            - Surveiller le système d'information<br>
            - Optimiser les coûts
         `,
         "skills": {
            "comp": ["AWS Compute", "Gestion des données", "Sécurité réseau", "IAM", "Surveillance"],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["AWS Compute", "IAM"]
         }
      }
   },
   // {
   //    "title": "AZ-104",
   //    "type": "études",
   //    "img": "azure.png",
   //    "desc": "Certification Microsoft sur l'utilisation technique d'Azure (96% du score requis)",
   //    "filters": ["sysadmin", "cloud"],
   //    "content": {
   //       "board": {
   //          "objective": "O",
   //          "stakes": "S"
   //       },
   //       "results": `
   //          Malheureusement, j'ai obtenu 674/1000 à l'examen, alors que la note de passage était de 700. Cependant, cela signifie aussi que je suis proche du niveau requis pour la certification. J'ai appris ce qui suit :<br>
   //          - L'IAM avec Microsoft Entra<br>
   //          - Gérer les données sur Azure<br>
   //          - Organiser les réseaux et la sécurité réseau<br>
   //          - Faire du serverless<br>
   //          - Surveiller le système d'information
   //       `,
   //       "skills": {
   //          "comp": ["IAM", "Gestion des données", "Sécurité réseau", "Serverless"],
   //          "dev": [],
   //          "tools": [],
   //          "softwares": []
   //       },
   //       "vignette_skills": {
   //          "all": []
   //       }
   //    }
   // },
   // {
   //    "title": "PNPT",
   //    "type": "study",
   //    "img": "tcm.jpg",
   //    "filters": ["pentesting"],
   //    "content": {
   //       "all": `
   //       <div class="titleA">Summary</div><br>
   //       `
   //    }
   // },
   // {
   //    "title": "ISO 27005/27001",
   //    "type": "study",
   //    "img": "iso.png",
   //    "filters": ["audit"],
   //    "content": {
   //       "all": `
   //       <div class="titleA">Summary</div><br>
   //       `
   //    }
   // },
   {
      "title": "Mon Github",
      "type": "compte",
      "img": "github.png",
      "desc": "Repértoire de mes différents projets",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "links": "https://github.com/lLouu"
   },
   {
      "title": "Mon Hackthebox",
      "type": "compte",
      "img": "hackthebox.png",
      "desc": "Site d'entrainement au pentesting",
      "filters": ["pentesting"],
      "links": "https://app.hackthebox.com/profile/1426168"
   },
   {
      "title": "Mon CodingGame",
      "type": "compte",
      "img": "codinggame.jpg",
      "desc": "Site d'entrainement pour coder",
      "filters": ["devsecops"],
      "links": "https://www.codingame.com/profile/98c9da903a5b276d4cbc503fbe5680da6636135"
   }
]