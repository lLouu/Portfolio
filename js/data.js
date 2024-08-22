let content = [
   {
      "title": "Junior Architect",
      "type": "job",
      "img": "onepoint.png",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         During this internship, I conducted research on the migration of Authorization Server APIs, proposing an architectural approach and conducting a POC with Keycloak, Okta, and Apigee.
         <br><br>
         - In-depth study of authorization systems (SAML, OAuth, OIDC) and existing market solutions.<br>
         - Proposal of a migration readiness approach with governance support to ensure availability and confidentiality.<br>
         - Execution of a POC involving Keycloak, Okta, Apigee, OpenLDAP, WordPress, and Squid Proxy.
         `
      }
   },
   {
      "title": "Junior Analyst",
      "type": "job",
      "img": "editis.png",
      "filters": ["audit"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         Diagnostic for infrastructure management, covering technological, financial, and HR aspects, with a focus on VMWare, HR management savings, and IT governance improvement.
         <br><br>
         - Participated in 10 workshops with colleagues<br>
         - Developed a maturity assessment framework<br>
         - Team included an expert architect and a business strategy specialist<br>
         - Analysis of VMWare price increases and potential HR management savingsDiagnostic
         `
      }
   },
   {
      "title": "Junior DevSecOps",
      "type": "job",
      "img": "alstom.png",
      "filters": ["devsecops", "ci/cd", "sysadmin"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         Internship aiming to automate the deployment of CSP (CyberSecurity Provider) modules, involving exploration of network architecture and development of a framework for automation scripts.
         <br><br>
         - Exploration of network architecture involving CSP services like Active Directory, PKI, and Radius.<br>
         - Development of an automation script framework.<br>
         - Implementation of standards within the framework (logging, step-by-step execution).<br>
         - Generation of scripts in Python or PowerShell using the framework.
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