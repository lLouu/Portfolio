let content = [
   {
      "title": "Architect Junior",
      "type": "travail - stage",
      "img": "onepoint.png",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Au cours de ce stage chez Onepoint, j'ai réalisé des recherches sur la migration des API de Serveur d'Autorisation, proposé une approche architecturale et exécuté un POC avec Keycloak, Okta et Apigee.
         <br><br>
         - Étude approfondie des systèmes d'autorisation (SAML, OAuth, OIDC) et des solutions existantes sur le marché.<br>
         - Proposition d'une approche de préparation à la migration avec un support de gouvernance pour garantir la disponibilité et la confidentialité.<br>
         - Réalisation d'un POC impliquant Keycloak, Okta, Apigee, OpenLDAP, WordPress et Squid Proxy.
         <br><br>
         <div class="titleA">Ce que j'ai fait</div><br>
         <div class="titleB">Création d'une Méthode de Migration</div><br>
         La migration d'un serveur d'autorisation implique un risque pour la confidentialité de chaque application dépendante et leur disponibilité. Il est important d'établir un framework de gouvernance pour minimiser les risques associés à ce type de migration. À cette fin, j'ai créé un document de directives incluant des méthodes pour rationaliser des choix de migration, la sélection des meilleures choix, la définition d'une politique de migration selon les SLO, et le moyen de produire d'un bon modèle pour la protocolisation afin de faciliter l'automatisation et une migration fluide étape par étape.
         <br><br>
         <div class="titleC">Caractéristiques</div>
         - Méthode pour identifier les biais des clients et comprendre les enjeux<br>
         - Méthode pour prioriser les enjeux en fonction du coût objectif pour le client et des biais<br>
         - Méthode pour identifier l'architecture impliquée par les enjeux<br>
         - Méthode pour attribuer un score à chaque modification proposée en fonction de son coût et des résultats projetés, et les filtrer en conséquence<br>
         - Méthode pour produire un protocole robuste, l'automatiser et l'exécuter
         <br><br><br>
         <div class="titleB">Création d'un Sandbox pour un PoC</div><br>
         Pour démontrer le fonctionnement de la méthode de migration, j'ai créé un bac à sable de 7 VM simulant un système d'information simple. Ce système comprend deux instances de pfSense, une station de travail utilisateur, un serveur OpenLDAP, un serveur Keycloak, une instance WordPress, un serveur Nginx utilisé comme reverse proxy, et un squid proxy. J'ai mis en place divers scénarios d'autorisation, allant d'une simple autorisation LDAP utilisant Squid Proxy, la synchronisation LDAP entre OpenLDAP et Keycloak, jusqu'aux connexions OAuth sur WordPress en utilisant Keycloak et un plugin WordPress.
         <br><br><br>
         <div class="titleB">Étude de la Technologie et Analyse des Solutions Existantes sur le Marché</div><br>
         Pour compléter la mission, j'ai dû recueillir des données diverses. La première étape a été d'obtenir des documents sur les serveurs d'autorisation. J'ai collecté de nombreuses sources externes à partir de blogs, de l'ANSSI et d'autres institutions publiques, et de Google Scholar. À partir de ces données, j'ai appris les bases du fonctionnement et des différences entre SAML, OAuth et OIDC. J'ai également exploré des recommandations gouvernementales, ainsi que des pratiques plus atypiques pour atténuer les problèmes, telles que la réduction de la dépendance d'un service à son fournisseur d'identité.
         <br><br>
         Un autre type de données concernait les solutions existantes pour les Gestionnaires d'API, les Serveurs d'Autorisation, et les Plateformes d'Intégration en tant que Service (iPaaS). J'ai d'abord compilé une liste de solutions en utilisant le Magic Quadrant de Gartner et quelques recommandations de blogs populaires sur Internet. Ensuite, j'ai vérifié leur popularité pour déterminer lesquelles étaient les plus susceptibles d'être rencontrées en pratique avec les clients.
         `
      }
   },
   {
      "title": "Analyst Junior",
      "type": "travail - stage",
      "img": "editis.png",
      "filters": ["audit"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         La mission de Onepoint chez Editis a consisté à réaliser un diagnostic pour la gestion des infrastructures, couvrant les aspects technologiques, financiers et RH, avec un accent sur VMWare, les économies de gestion des ressources humaines et l'amélioration de la gouvernance informatique.
         <br><br>
         - Participation à 10 ateliers avec des collègues<br>
         - Utilisation d'un framework d'évaluation de la maturité<br>
         - L'équipe comprenait un architecte expert et un spécialiste de la stratégie d'entreprise<br>
         - Analyse des augmentations de prix de VMWare et des économies potentielles en gestion des ressources humaines
         <br><br>
         <div class="titleA">Ce que j'ai fait</div><br>
         <div class="titleB">Ateliers & Rapports</div><br>
         En tant qu'équipe de trois, nous avons collaboré avec EDITIS pour analyser leur structure et déterminer si ses coûts étaient rationnels par rapport à son utilisation. Nous avons concentré notre attention sur quatre domaines clés : la Technologie, les Ressources Humaines, les Finances et le Contratctuel. Pour couvrir tous les sujets en profondeur, nous avons organisé au total dix ateliers, impliquant divers parties prenantes de l'interne et de l'externe du département informatique.
         <br><br>
         En utilisant les notes des ateliers, nous avons créé des rapports pour garantir une compréhension précise et documenter nos discussions. Cela a été utile pour une analyse ultérieure et pour suivre ce que nous avions convenu de faire dans un avenir proche. Nous avons également créé une feuille Excel pour suivre les actions à accomplir et indexer les documents reçus, facilitant ainsi la récupération des informations.
         <br><br><br>
         <div class="titleB">Évaluation de la Maturité</div><br>
         Sur la base des données collectées, nous avons réalisé une évaluation de la maturité. Nous avons organisé les informations en thèmes, et pour chaque thème, nous avons évalué les forces et les faiblesses. En utilisant une échelle, nous avons attribué des scores à chaque thème, ce qui nous a permis de générer des graphiques et des visuels de maturité.
         <br><br><br>
         <div class="titleB">Recommandations</div><br>
         En utilisant l'évaluation de la maturité, nous avons fourni des recommandations sur la manière dont nous, en tant que Onepoint, pourrions aborder les domaines à améliorer si nécessaire (maintenir ce qui fonctionne déjà bien est également une bonne pratique). À partir de cela, nous avons défini les gains potentiels pour chaque recommandation et fourni un calendrier estimé pour la mise en œuvre si les recommandations étaient appliquées au plus tôt.
         `
      }
   },
   {
      "title": "DevSecOps Junior",
      "type": "travail - stage",
      "img": "alstom.png",
      "filters": ["devsecops", "ci/cd", "sysadmin"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Le stage chez Alstom a été axé sur l'automatisation du déploiement des modules CSP (CyberSecurity Provider), impliquant l'exploration de l'architecture réseau et le développement d'un framework pour les scripts d'automatisation.
         <br><br>
         - Exploration de l'architecture réseau impliquant des services CSP tels qu'Active Directory, PKI et Radius.<br>
         - Développement d'un framework pour les scripts d'automatisation.<br>
         - Mise en œuvre de normes au sein du framework (journalisation, exécution pas à pas).<br>
         - Génération de scripts en Python ou PowerShell en utilisant le framework.
         <br><br>
         <div class="titleA">Ce que j'ai fait</div><br>
         <div class="titleB">Automatisation du Déploiement</div><br>
         La première tâche a été d'automatiser le déploiement. CSP fournit un manuel, long de centaines de pages, détaillant comment déployer ses modules, que ce soit AD, Radius, PKI ou d'autres composants. Sur la base de ce manuel, qui spécifie toutes les actions explicitement, j'ai créé des scripts Bash et PowerShell pour automatiser le processus. Cette automatisation couvrait l'exécution de commandes CLI simples et les actions au sein des interfaces graphiques. Parfois, l'interface graphique avait un CLI, et quand ce n'était pas le cas, nous devions contacter le développeur ou effectuer un reverse engineer du logiciel pour déterminer comment l'automatiser.
         <br><br><br>
         <div class="titleB">Développement du Framework d'Automatisation</div><br>
         Lors de l'automatisation du déploiement, nous avons identifié trois principaux défis :<br>
         - Les modules CSP changent tous les mois environ, nécessitant des mises à jour régulières de l'automatisation.<br>
         - Tous les administrateurs système n'ont pas les compétences nécessaires pour lire et modifier du code.<br>
         - Les scripts manquaient de bibliothèques communes pour les actions régulières, telles que la journalisation.
         <br><br>
         Pour répondre à ces problèmes, j'ai développé un framework en Python qui convertit un langage proche de l'anglais en scripts PowerShell et Python. Ce framework fonctionne comme un compilateur. Il utilise des verbes comme appelants de fonctions ; par exemple, "in some_file.txt write Hello World" serait converti en File.append("some_file.txt", "Hello World") dans les scripts. En général, il suit la syntaxe "<verbe> <param> <verbe2> <param2> [...]". Le framework comprend des fonctionnalités pour les conditions, les boucles et les variables. Il dispose également d'une bibliothèque de commandes dynamique stockée dans un fichier JSON, pouvant être modifiée par d'autres développeurs pour ajouter de nouvelles fonctions.
         <br><br>
         En résumé, le framework comprend un système de normalisation, ce qui signifie que le script gère les journaux de la console et des fichiers, et fonctionne avec un CLI commun qui gère les étapes pour une exécution partielle ou spécifique. Les variables peuvent être modifiées à l'aide d'une interface graphique construite avec Tkinter. Ainsi, un script compilé génère ses versions Python et PowerShell, ainsi que des fichiers data.csv et data.json pour la configuration des variables du script. Si une variable n'est pas fournie, le script demande cette variable au début de son exécution.<br>
         Deux ensembles de documentation ont été créés : l'un expliquant le framework lui-même, et l'autre guidant les utilisateurs sur la manière de créer et de compiler des scripts, avec un répertoire de toutes les commandes disponibles.
         <br><br>
         <div class="titleC">Fonctionnalités</div>
         - Framework de script POO permettant un CLI commun entre les scripts<br>
         - Bibliothèque de système de journalisation et syntaxe de code de journalisation commune<br>
         - Compilation en langage naturel en scripts Python et PowerShell avec des feuilles de données CSV et JSON<br>
         - Dictionnaire JSON dynamique pour ajouter de nouvelles commandes en langage naturel<br>
         - Interface graphique pour gérer les feuilles de données (conversions CSV-JSON, cryptage des feuilles, remplissage des feuilles, avec des fonctionnalités simples telles que l'intégration des raccourcis Ctrl)
         `
      }
   },
   {
      "title": "Créer un Système d'Information",
      "type": "projet",
      "img": "master_project.png",
      "filters": ["devsecops", "ci/cd", "sysadmin", "audit"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Le "Master Project" est un projet collaboratif avec 8 étudiants au cours de la première année du programme de Master à l'EFREI Paris. Le projet, axé sur la cybersécurité, était particulièrement exigeant, nécessitant de solides compétences en systèmes d'information. Nous avons été chargés de livrer un système d'information entièrement intégré, comprenant des composants tels que DNS, serveur Web, proxy, Active Directory et Mail. De plus, nous devions respecter les protocoles d'audit et les processus de cybersécurité.
         <br><br>
         <div class="titleA">Ce que j'ai fait</div><br>
         <div class="titleB">Conception d'un Système d'Information</div><br>
         La première tâche a été la conception du système d'information. Il comprenait de nombreuses fonctionnalités, telles que des DNS public et privé, un AD avec son RODC, une PKI, un site web, un serveur de mail local, un proxy et un reverse proxy, un serveur de fichiers privé, un EDR et un ERP. Nous avons créé trois zones principales : une DMZ, une zone Serveur et une zone Utilisateur. Chaque zone était subdivisée : DMZ-IN (reverse proxy et DNS public), DMZ-OUT (proxy et DNS privé), DMZ-INOUT (MDA), DMZ-Technique (RODC) ; Serveur-services (serveur web, MDA), Serveur-monitor (ERP, EDR), Serveur-données (serveur de fichiers, serveur de logs et serveur de backup), et Serveur-Critique (AD, root CA).
         <br><br><br>
         <div class="titleB">Déploiement dans un ESX</div><br>
         J'ai personnellement configuré le proxy et le reverse proxy, les pare-feu avec IPS, l'ensemble du système DNS avec ses enregistrements pour les actions non liées à l'AD et le root CA. En raison des contraintes de temps, nous n'avons pas pu déployer tout ce qui était demandé (et nous n'étions pas censés tout faire). En conséquence, l'ERP, l'EDR et le serveur de sauvegarde n'ont pas été déployés.<br>
         Le proxy a été configuré comme un transparent proxy par Squid, ce qui signifie que chaque requête Web et DNS interne serait routée à travers lui, même si le proxy n'était pas configuré manuellement. Le pare-feu filtrait les paquets inutiles à l'aide d'une matrice réseau bien construite qui indexait chaque destination accessible par une source donnée. Des règles IPS simples ont été mises en place sur les firewalls. Le DNS gérait deux domaines : un domaine privé, géré par l'AD et répliqué dans la DMZ-OUT par un DNS cache qui transmettait également les autres requêtes au 8.8.8.8, et un autre domaine public avec des enregistrements pour accéder au site Web et au serveur de messagerie, y compris MX, SPF et DKIM. Enfin, le root CA a été ajoutée comme CA de confiance par l'AD, et a signé les certificats pour toutes les communications TLS au sein du système d'information.
         <br><br><br>
         <div class="titleB">Audit de Sécurité</div><br>
         Une partie du projet a impliqué l'audit de notre infrastructure en réalisant une analyse des risques. Nous avons utilisé un EBIOS RM à cet effet pour suivre les menaces potentielles.<br>
         De plus, comme le projet impliquait plusieurs équipes, il était possible de tenter des attaques sur d'autres équipes ou de défendre contre les attaques des autres, y compris nos enseignants (selon des règles prédéterminées). Cela a servi de test de résistance efficace pour notre système et celui des autres.
         `
      }
   },
   {
      "title": "PenEnv - scripts Bash de Pentesting ",
      "type": "projet",
      "img": "penenv.png",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         PenEnv est un projet personnel que j'ai créé pour me préparer aux certifications en tests de pénétration que je vise à obtenir. Son objectif est de standardiser l'installation d'un environnement de tests de pénétration sur Linux, principalement par le biais de l'automatisation. De plus, il vise à automatiser certaines étapes du processus de tests de pénétration.
         <br><br>
         Il est open-source et disponible sur mon GitHub : <a href="https://github.com/lLouu/Penenv" target="_blank">https://github.com/lLouu/Penenv</a>
         <br><br>
         <div class="titleA">Fonctionnalités</div><br>
         - Installateur one-liner<br>
         - Installation de 112 outils de tests de pénétration, incluant des langages de développement, des outils de scan web, des outils de brute-force, des outils réseau, des bibliothèques d'exploits, des outils de reverse shell, et des scripts d'analyse et d'exploit<br>
         - Outil Bash personnalisé pour exécuter des serveurs en mettant leurs flux d'entrée et de sortie en temps réel et non mis en cache dans des fichiers lisibles et modifiables, permettant une gestion facile des interactions automatisées avec les tâches en arrière-plan<br>
         - Outils Bash personnalisés pour faciliter les tâches de base pour les shells inversés avec accès limité
         `
      }
   },
   {
      "title": "Portfolio",
      "type": "projet",
      "img": "portfolio.png",
      "filters": ["devsecops", "ci/cd"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Mon portfolio est le projet personnel que vous consultez actuellement. L'idée était de créer un portfolio d'une seule page pouvant être hébergé sur OVH en niveau gratuit, avec un nom de domaine inclus. Cela est réalisé en utilisant uniquement des technologies côté client, c'est-à-dire HTML, CSS et JavaScript. J'ai mis en œuvre plusieurs fonctionnalités, telles qu'un gestionnaire de thèmes, un système de contenu dynamique pour ajouter et supprimer facilement du contenu, un filtre, la gestion du stockage local pour maintenir des choix de thème et de filtrage cohérents, et bien sûr, un design frontend.
         <br><br>
         Il est open-source et disponible sur mon GitHub : <a href="https://github.com/lLouu/Portfolio" target="_blank">https://github.com/lLouu/Portfolio</a>
         <br><br>
         <div class="titleA">Fonctionnalités</div><br>
         - Site web entièrement côté client (HTML, CSS et JS) sans utilisation de frameworks<br>
         - Thèmes clair et sombre<br>
         - Contenu de vignettes dynamique<br>
         - Filtrage côté client<br>
         - Popups personnalisés
         `
      }
   },
   {
      "title": "EFREI Paris",
      "type": "études",
      "img": "efrei.jpg",
      "filters": ["sysadmin", "devsecops", "audit"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         J'ai étudié à l'EFREI Paris, une école française spécialisée en informatique, et j'ai réalisé un master en cybersécurité des systèmes d'information et en gouvernance.
         Cela signifie que j'ai acquis de nombreuses compétences, allant du scripting et de l'administration système à la réalisation d'audits basés sur des méthodes ISO telles qu'EBIOS RM.
         `
      }
   },
   {
      "title": "GCP Digital Leader",
      "type": "certification",
      "img": "gcp.png",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Un Digital Leader peut mettre en avant les caractéristiques des principaux produits et services Google Cloud,
         ainsi que leurs avantages pour les entreprises. Il est également capable de décrire des cas d'utilisation courants et d'expliquer comment les solutions cloud aident les entreprises.
         `
      }
   },
   {
      "title": "AWS Solution Architect Associate",
      "type": "études",
      "img": "aws.png",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Un architecte de solutions AWS développe, met en œuvre et maintient l'infrastructure numérique et les applications métier au sein de la plateforme cloud AWS. Il collabore avec les dirigeants d'entreprise pour mieux comprendre les objectifs de l'entreprise et concevoir des solutions et des stratégies basées sur le cloud pour atteindre ces objectifs. En fonction des besoins de l'entreprise, un architecte de solutions AWS peut recommander à la fois des produits logiciels et matériels à mettre en œuvre dans l'organisation.
         <br><br>
         Malheureusement, j'ai obtenu 690/1000 à l'examen alors que la validation était à 720, ce qui signifie que je suis proche du niveau requis de la certification.
         `
      }
   },
   {
      "title": "AZ-104",
      "type": "études",
      "img": "azure.png",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Résumé</div><br>
         Un administrateur Azure AZ-104 fait souvent partie d'une équipe plus large dédiée à la mise en œuvre de l'infrastructure cloud d'une organisation.
         Il coordonne également avec d'autres rôles pour fournir des solutions en réseau, en sécurité, en base de données, en développement d'applications et en Azure DevOps.
         <br><br>
         Malheureusement, j'ai obtenu 674/1000 à l'examen alors que la validation était à 700, ce qui signifie que je suis proche du niveau requis de la certification.
         `
      }
   },
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
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "links": "https://github.com/lLouu"
   },
   {
      "title": "Mon Hackthebox",
      "type": "compte",
      "img": "hackthebox.png",
      "filters": ["pentesting"],
      "links": "https://app.hackthebox.com/profile/1426168"
   },
   {
      "title": "Mon CodingGame",
      "type": "compte",
      "img": "codinggame.jpg",
      "filters": ["devsecops"],
      "links": "https://www.codingame.com/profile/98c9da903a5b276d4cbc503fbe5680da6636135"
   }
]