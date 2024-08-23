let content = [
   {
      "title": "Junior Architect",
      "type": "job - internship",
      "img": "onepoint.png",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         During this internship at Onepoint, I conducted research on the migration of Authorization Server APIs, proposing an architectural approach and conducting a POC with Keycloak, Okta, and Apigee.
         <br><br>
         - In-depth study of authorization systems (SAML, OAuth, OIDC) and existing market solutions.<br>
         - Proposal of a migration readiness approach with governance support to ensure availability and confidentiality.<br>
         - Execution of a POC involving Keycloak, Okta, Apigee, OpenLDAP, WordPress, and Squid Proxy.
         <br><br>
         <div class="titleA">What I did</div><br>
         <div class="titleB">Creation of a migration method</div><br>
         Migrating an authorization server means to put at stak confidentiality of every single dependant application and their disponibility.
         It is important to make a governance framework to reduce as much as possible risks induced by this kind of migration. For that stack,
         I made a directive's document that includes how to rationalise migration choices, choose the best options, define a migration politic
         according to the SLO, and give a good patern for protocolisation to help automation and easy step-by-step migration to use.
         <br><br>
         <div class="titleC">Features</div>
         - Method to find out client biais, and get the stakes<br>
         - Method to sort which stakes are the most important based on objective cost for the client and biais<br>
         - Method to identify the architecture implyed by the stakes<br>
         - Method to give a score for each modification propositions according to its cost and previsioned results, and filter them based on it<br>
         - Method to produce a good protocol, automate it and execute it
         <br><br><br>
         <div class="titleB">Creation of a Sandbox for a PoC</div><br>
         To prove in which ways the migration method helps, I made a sandbox of 7 VMs that simulate a simple information system. This system includes
         two pfsense, a user post, an openldap, a keycloak, a wordpress, an nginx used for reverse-proxy, and a squid proxy.
         I setted up some authorizations, from a simple ldap authorization using squid proxy, ldap synch between openldap and keycloak,
         and OAuth connexions on wordpress using keycloak and a wordpress addon.
         <br><br><br>
         <div class="titleB">Study of the technology and analyse of existing market solutions</div><br>
         To do the otherall task, I needed to collect many data. First thing was to get documents about authorization server.
         I got many external sources using blogs, cybersecurity public institutions, and google scholar. From all this data, 
         I got to learn from basic things, such as how SAML, OAuth and OIDC works and differ, I got to learn recommendations
         that may be too exigent in most cases, and I also got to learn more exotic practices to try going around issues
         such as ways to reduce the dependencies of a service to its identity provider
         <br><br>
         Another type of data was about existing solutions for API Managers, for Authorization Servers, and for integration platform as a service.
         First, I got a list of solutions using Gartners' magic quadrant, and using some tops from blog over internet.
         Once done, I checked their popularity to know which ones would be the most likely to be found in practice with the clients.
         `
      }
   },
   {
      "title": "Junior Analyst",
      "type": "job - internship",
      "img": "editis.png",
      "filters": ["audit"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         Mission of Onepoint at Editis to do a diagnostic for infrastructure management, covering technological, financial, and HR aspects, with a focus on VMWare, HR management savings, and IT governance improvement.
         <br><br>
         - Participated in 10 workshops with colleagues<br>
         - Developed a maturity assessment framework<br>
         - Team included an expert architect and a business strategy specialist<br>
         - Analysis of VMWare price increases and potential HR management savingsDiagnostic
         <br><br>
         <div class="titleA">What I did</div><br>
         <div class="titleB">Workshops & Reports</div><br>
         As a team of three, we got to work with EDITIS to analyse with them their structure, and find out if its cost is rationnal compared to its use.
         We looked at four axes : Technology, Human Ressources, Finance and Contracts. To go through all of the subjects, we made a total of ten workshops.
         We got to hear many actors from within the IT department as well as outside, working with them.
         <br><br>
         Using the notes of the workshops, we mad reports to make sure we understood well, and to remind what we sayed.
         It is usefull to keep track for further analysis, but also to remember what we said we would do or need in the near futur.
         We also made an excel to keep track of actions that needs to be done, and to index the documents we got to facilitate fetching for information.
         <br><br><br>
         <div class="titleB">Maturity assessment</div><br>
         Based on the data, we managed to do a maturity assessment. To do so, we sorted the information in themes, and for each themes we checked
         the strengh and weaknesses. Based on this, and on a scale, we can also give a notation to each of them, and end up with numbers to make graphs and visuals.
         <br><br><br>
         <div class="titleB">Recommandations</div><br>
         Using the maturity assessment, we can also provide recommandations, meaning how we, as onepoint, would handle the fact to make things
         better if needed (not doing anything more on something that is working is a good practice). From this, we could
         provide gains for each recommandations, and a estimated time of arrival if they begin to do the recommandation as soon as possible.
         `
      }
   },
   {
      "title": "Junior DevSecOps",
      "type": "job - internship",
      "img": "alstom.png",
      "filters": ["devsecops", "ci/cd", "sysadmin"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         Internship at Alstom aiming to automate the deployment of CSP (CyberSecurity Provider) modules, involving exploration of network architecture and development of a framework for automation scripts.
         <br><br>
         - Exploration of network architecture involving CSP services like Active Directory, PKI, and Radius.<br>
         - Development of an automation script framework.<br>
         - Implementation of standards within the framework (logging, step-by-step execution).<br>
         - Generation of scripts in Python or PowerShell using the framework.
         <br><br>
         <div class="titleA">What I did</div><br>
         <div class="titleB">Deployment Automation</div><br>
         First thing was to make deployment automation. CSP has a hundreds-page sized manual to deploy its module, should it be AD, Radius, PKI, or other of its components.
         Based on this manual that gives all expicit actions, I needed to make bash and powershell scripts to automate it.
         This automation was for simple cli command execution, but could also be about automating actions to do with gui. Sometimes, this gui had
         a cli, sometimes they don't and we needed to contact the developer or retro-engineered the software to get how to automate it.
         <br><br><br>
         <div class="titleB">Automation Framework Development</div><br>
         During the deployment automation, we found out three main problems :<br>
         - CSP modules changes every month or so, meaning automation needs to be edited regularly<br>
         - Sysadmins do not all have competencies to read and edit code
         - scripts did not have common libraries for regular actions, such as logging
         <br><br>
         Because of such things, I got to work on a framework in python that transform a english-like language to powershell and python.
         This could also be called a compilator looking at what it does.
         This framework works using verbs as function caller, for exemple "in some_file.txt write Hello World" would be converted
         by File.append("some_file.txt", "Hello World") in the scripts. In general, it works with the syntax "<verb> <param> <verb2> <param2> [...]"
         Features for conditions, for loop and variables were included. The framework had a dynamic command library as a json,
         that can be edited to add more callable functions by other developers, and how to call them.
         In the overall, it had a normalization system, meaning the script did the console and file logs, as well as works using a
         common cli that can manages steps to do partial execution or specific steps only.
         Variables could be edited using a GUI made with tkinter. This way, a complied script would give its python and powershell versions,
         as well as a data.csv and data.json that allows to setup the script variables. If a variable is not given, the script would ask for it
         at the begining.<br>
         Two documentation has been made : the first to explain the framework itself, and another for user to know how to create and compile a script,
         and to index all available commands.
         <br><br>
         <div class="titleC">Features</div>
         - OOP script framework that allow common cli between scripts<br>
         - Log system library and common logging codes synthax<br>
         - natural-language compilation into python and powershell scripts and csv and json data sheet to fill<br>
         - dynamic json dictionary to add new command in the natural language<br>
         - GUI to manage the data sheets (csv-json convertions, sheet encryption, filling the sheets, with simple features such as integration of ctrl shortcuts)
         `
      }
   },
   {
      "title": "Building a full Information System",
      "type": "project",
      "img": "master_project.png",
      "filters": ["devsecops", "ci/cd", "sysadmin", "audit"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         The "Master Project" is a project with 8 students during the first year of Master at EFREI Paris.
         The one about cybersecurity is especially demanding for competencies around information systems.
         We needed to deliver a fully integrated information system with components such as DNS, Web Server, Proxy,
         Active Directory, and Mail. Overall, we also had to follow audit protocols and cybersecurity processes.
         <br><br>
         <div class="titleA">What I Did</div><br>
         <div class="titleB">Design an Information System</div><br>
         First thing was designing the information system. It included many features, such as public and private DNS, an AD with its RODC, a PKI, a website,
         a local webmail server, proxy and reverse-proxy, a private file server, an EDR and an ERP. Three main zones where made : a DMZ, a Server
         zone and a user zone. Within each, it had sub-divisions, such as DMZ-IN (reverse proxy and public DNS), DMZ-OUT (proxy and private DNS),
         DMZ-INOUT (MDA) and DMZ-Technical (RODC) ; Server-services (web server, MDA, AD), Server-monitor (ERP, EDR),
         Server-data (File server, log server and backup server) and Server-Critical (AD, Root CA).
         <br><br><br>
         <div class="titleB">Deployment in an ESX</div><br>
         I personnaly got to setup the proxy and reverse proxy, the firewalls with IPS, and the whole DNS and its record for non-AD
         relative actions and the root CA. Due to timings, we could not deploy everything that has been asked (and were not meant to do everything). 
         Because of such, we did not deploy the ERP, the EDR, nor the backup server.<br>
         The proxy was a squid proxy configured as a transparent proxy, meaning every internal web and dns request would be bound to go through it
         even if the proxy is not manually setted up.
         The firewall got every unecessary packets filter thanks to a well-done network matrice
         that indexed every destination that would be reach by a given source. Simple IPS rules where setted up.
         The DNS managed two domains, one private managed by the AD and replicated on the DMZ-OUT by a cache DNS, that would also forward other
         request to 8.8.8.8, and another public that had records to reach the website and mail server with the MX, spf and DKIM.
         Finally, the rootCA has been added as trusted CA by the AD, and signed the certificate of all TLS communications from within the
         Information System.
         <br><br><br>
         <div class="titleB">Security Audit</div><br>
         A part of the project was also about auditing our structure, by doing a risk analysis. We used a simple EBIOS RM to do it
         and keep track of pottential threats.<br>
         Also, since the project had multiple teams, it was possible that we tryed to attack others, or getting attacked by others
         or by our teachers (following some predetermined rules). This was also a good stress test of our system and other's ones.
         `
      }
   },
   {
      "title": "PenEnv - Bash Pentesting scripts",
      "type": "project",
      "img": "penenv.png",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         PenEnv is a personnal project I made for the pentesting certifications I'm targeting to pass.
         Its goal is to allow an harmonisation to install the environnment for penneration testing with Linux.
         It mostly use automation to do so. It also has the goal to automatise some steps for pentesting
         <br><br>
         It is opensource and findable at my github : <a href="https://github.com/lLouu/Penenv" target="_blank">https://github.com/lLouu/Penenv</a>
         <br><br>
         <div class="titleA">Features</div><br>
         - Oneliner installer<br>
         - 112 pentesting tools installation, containing dev languages, web scanning, bruteforce tools, network tools, exploit libraries,
         revshell tools, and analysis and exploit scripts<br>
         - custom bash tool to execute server by putting their live uncached input and output stream in readable en editable files, allowing
         an easy management of automated interactions with background tasks<br>
         - custom bash tools to facilitate basic tasks for limited access rev shells
         `
      }
   },
   {
      "title": "Portfolio",
      "type": "project",
      "img": "portfolio.png",
      "filters": ["devsecops", "ci/cd"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         My portfolio is my personal project you are currently looking at. The idea is to provide
         a portfolio in a one-pager that can be hosted on free-tier OVH hosting that's offered with a domain name.
         This comes by only being able to do a client-side server with only html, css and js. I made multiple functionalities,
         such as a theme manager, a dynamic content system to make it easy to add and remove new content, a filter,
         local storage management to allow consistent theme and filtering choices, and obviously a bit of frontend design.
         <br><br>
         It is opensource and findable at my github : <a href="https://github.com/lLouu/Portfolio" target="_blank">https://github.com/lLouu/Portfolio</a>
         <br><br>
         <div class="titleA">Features</div><br>
         - Full client side website (html, css & js) without usage of frameworks<br>
         - Light & Dark theme<br>
         - Dynamic vignette content<br>
         - Client-side filtering<br>
         - Custom popups
         `
      }
   },
   {
      "title": "EFREI Paris",
      "type": "study",
      "img": "efrei.jpg",
      "filters": ["sysadmin", "devsecops", "audit"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         I studied in EFREI Paris, a french school in IT, and I did a master in cybersecurity for information system and governance.
         This means I got to learn many skills, from scripting to doing audit based on ISO methods such as EBIOS RM.
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
         <div class="titleA">Summary</div><br>
         A Digital Cloud Leader can highlight the features of key Google Cloud products and services,
         as well as their benefits for businesses. They are also capable of describing common business
         use cases and explaining how cloud solutions help businesses.
         `
      }
   },
   {
      "title": "AWS Solution Architect Associate",
      "type": "study",
      "img": "aws.png",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         An AWS solutions architect develops, implements and maintains digital infrastructure and business applications within the AWS cloud platform. They collaborate with business leaders to learn more about a company's objectives and design effective cloud-based solutions and strategies to fulfill these objectives. Depending on a business's needs, an AWS solutions architect may recommend both software and hardware products for the organization to implement.
         <br><br>
         Sadly, I got at the exam 690/1000 when validation was at 720, meaning i'm near the level of the certification.
         `
      }
   },
   {
      "title": "AZ-104",
      "type": "study",
      "img": "azure.png",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         An Azure AZ-104 administrator is often part of a larger team dedicated to implementing an organization's cloud infrastructure.
         They also coordinate with other roles to provide networking, security, database, application development, and Azure DevOps solutions.
         <br><br>
         Sadly, I got at the exam 674/1000 when validation was at 700, meaning i'm near the level of the certification.
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
      "title": "My Github",
      "type": "account",
      "img": "github.png",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "links": "https://github.com/lLouu"
   },
   {
      "title": "My Hackthebox",
      "type": "account",
      "img": "hackthebox.png",
      "filters": ["pentesting"],
      "links": "https://app.hackthebox.com/profile/1426168"
   },
   {
      "title": "My CodingGame",
      "type": "account",
      "img": "codinggame.jpg",
      "filters": ["devsecops"],
      "links": "https://www.codingame.com/profile/98c9da903a5b276d4cbc503fbe5680da6636135"
   }
]