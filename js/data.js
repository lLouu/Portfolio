let content = [
   {
      "title": "Junior Architect",
      "type": "job - internship",
      "img": "onepoint.png",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "all": `
         <div class="titleA">Summary</div><br>
         During this internship at Onepoint, I conducted research on the migration of Authorization Server APIs, proposed an architectural approach, and executed a POC with Keycloak, Okta, and Apigee.
         <br><br>
         - In-depth study of authorization systems (SAML, OAuth, OIDC) and existing market solutions.<br>
         - Proposed a migration readiness approach with governance support to ensure availability and confidentiality.<br>
         - Executed a POC involving Keycloak, Okta, Apigee, OpenLDAP, WordPress, and Squid Proxy.
         <br><br>
         <div class="titleA">What I Did</div><br>
         <div class="titleB">Creation of a Migration Method</div><br>
         Migrating an authorization server involves risking the confidentiality of every dependent application and their availability. It is important to establish a governance framework to minimize the risks associated with this type of migration. For this purpose, I created a directive document that includes guidelines on rationalizing migration choices, selecting the best options, defining a migration policy according to the SLO, and providing a good pattern for protocolization to facilitate automation and a smooth step-by-step migration process.
         <br><br>
         <div class="titleC">Features</div>
         - Method to identify client biases and understand the stakes<br>
         - Method to prioritize stakes based on objective cost for the client and biases<br>
         - Method to identify the architecture implicated by the stakes<br>
         - Method to assign a score to each proposed modification based on its cost and projected results, and filter them accordingly<br>
         - Method to produce a robust protocol, automate it, and execute it
         <br><br><br>
         <div class="titleB">Creation of a Sandbox for a PoC</div><br>
         To demonstrate how the migration method works, I created a sandbox of 7 VMs that simulate a simple information system. This system includes two pfSense instances, a user workstation, an OpenLDAP server, a Keycloak server, a WordPress instance, an Nginx server used as a reverse proxy, and a Squid proxy. I set up various authorization scenarios, from a simple LDAP authorization using Squid Proxy, LDAP synchronization between OpenLDAP and Keycloak, to OAuth connections on WordPress using Keycloak and a WordPress add-on.
         <br><br><br>
         <div class="titleB">Study of Technology and Analysis of Existing Market Solutions</div><br>
         To complete the overall task, I needed to gather extensive data. The first step was to obtain documents about authorization servers. I collected numerous external sources using blogs, cybersecurity public institutions, and Google Scholar. From this data, I learned the basics of how SAML, OAuth, and OIDC work and differ. I also explored recommendations that may be overly stringent in most cases, as well as more unconventional practices for mitigating issues, such as reducing a service's dependency on its identity provider.
         <br><br>
         Another type of data involved existing solutions for API Managers, Authorization Servers, and Integration Platforms as a Service (iPaaS). I first compiled a list of solutions using Gartner's Magic Quadrant and some top blog recommendations from the internet. Afterward, I checked their popularity to determine which ones were most likely to be encountered in practice with clients.
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
         Mission of Onepoint at Editis involved conducting a diagnostic for infrastructure management, covering technological, financial, and HR aspects, with a focus on VMWare, HR management savings, and IT governance improvement.
         <br><br>
         - Participated in 10 workshops with colleagues<br>
         - Developed a maturity assessment framework<br>
         - Team included an expert architect and a business strategy specialist<br>
         - Analyzed VMWare price increases and potential HR management savings
         <br><br>
         <div class="titleA">What I Did</div><br>
         <div class="titleB">Workshops & Reports</div><br>
         As a team of three, we collaborated with EDITIS to analyze their structure and determine if its costs were rational compared to its usage. We focused on four key areas: Technology, Human Resources, Finance, and Contracts. To thoroughly cover all topics, we conducted a total of ten workshops, engaging with various stakeholders from both within and outside the IT department.
         <br><br>
         Using the notes from the workshops, we created reports to ensure accurate understanding and to document our discussions. This was useful for further analysis and for keeping track of what we agreed to do or needed in the near future. We also created an Excel sheet to track actions that needed to be completed and to index the documents we received, facilitating easy retrieval of information.
         <br><br><br>
         <div class="titleB">Maturity Assessment</div><br>
         Based on the collected data, we conducted a maturity assessment. We organized the information into themes, and for each theme, we evaluated strengths and weaknesses. Using a scale, we assigned scores to each theme, which allowed us to generate graphs and visuals.
         <br><br><br>
         <div class="titleB">Recommendations</div><br>
         Using the maturity assessment, we provided recommendations on how we, as Onepoint, would address areas for improvement if needed (maintaining what is already working well is also a good practice). From this, we outlined potential gains for each recommendation and provided an estimated timeline for implementation if the recommendations were acted upon immediately.
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
         Internship at Alstom focused on automating the deployment of CSP (CyberSecurity Provider) modules, involving the exploration of network architecture and the development of a framework for automation scripts.
         <br><br>
         - Explored network architecture involving CSP services like Active Directory, PKI, and Radius.<br>
         - Developed a framework for automation scripts.<br>
         - Implemented standards within the framework (logging, step-by-step execution).<br>
         - Generated scripts in Python or PowerShell using the framework.
         <br><br>
         <div class="titleA">What I Did</div><br>
         <div class="titleB">Deployment Automation</div><br>
         The first task was to automate deployment. CSP provides a manual, hundreds of pages long, detailing how to deploy its modules, whether it's AD, Radius, PKI, or other components. Based on this manual, which specifies all explicit actions, I created Bash and PowerShell scripts to automate the process. This automation covered simple CLI command execution and actions within GUIs. Sometimes, the GUI had a CLI, and when it didn't, we had to contact the developer or reverse-engineer the software to determine how to automate it.
         <br><br><br>
         <div class="titleB">Automation Framework Development</div><br>
         During the deployment automation, we identified three main challenges:<br>
         - CSP modules change every month or so, requiring regular updates to the automation.<br>
         - Not all sysadmins have the skills to read and edit code.<br>
         - The scripts lacked common libraries for regular actions, such as logging.
         <br><br>
         To address these issues, I developed a Python framework that converts an English-like language into PowerShell and Python scripts. This framework acts as a compiler of sorts. It uses verbs as function callers; for example, "in some_file.txt write Hello World" would be converted to `File.append("some_file.txt", "Hello World")` in the scripts. Generally, it follows the syntax "<verb> <param> <verb2> <param2> [...]". The framework includes features for conditions, loops, and variables. It also has a dynamic command library stored in a JSON file, which can be edited by other developers to add more callable functions.
         <br><br>
         Overall, the framework includes a normalization system, meaning the script handles console and file logs and operates with a common CLI that manages steps for partial or specific execution. Variables can be edited using a GUI built with Tkinter. This way, a compiled script generates its Python and PowerShell versions, along with data.csv and data.json files for setting up script variables. If a variable is not provided, the script prompts for it at the beginning.<br>
         Two documentation sets were created: one explaining the framework itself, and another guiding users on how to create and compile scripts, along with an index of all available commands.
         <br><br>
         <div class="titleC">Features</div>
         - OOP script framework allowing a common CLI between scripts<br>
         - Logging system library and common logging code syntax<br>
         - Natural-language compilation into Python and PowerShell scripts with accompanying CSV and JSON data sheets<br>
         - Dynamic JSON dictionary to add new commands in the natural language<br>
         - GUI to manage data sheets (CSV-JSON conversions, sheet encryption, filling the sheets, with simple features like integration of Ctrl shortcuts)
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
         The "Master Project" is a collaborative project with 8 students during the first year of the Master's program at EFREI Paris. The cybersecurity-focused project was particularly demanding, requiring strong competencies in information systems. We were tasked with delivering a fully integrated information system, including components such as DNS, Web Server, Proxy, Active Directory, and Mail. Additionally, we had to adhere to audit protocols and cybersecurity processes.
         <br><br>
         <div class="titleA">What I Did</div><br>
         <div class="titleB">Design of an Information System</div><br>
         The first task was designing the information system. It included many features, such as public and private DNS, an AD with its RODC, a PKI, a website, a local webmail server, proxy and reverse proxy, a private file server, an EDR, and an ERP. We created three main zones: a DMZ, a Server zone, and a User zone. Each zone was further subdivided: DMZ-IN (reverse proxy and public DNS), DMZ-OUT (proxy and private DNS), DMZ-INOUT (MDA), DMZ-Technical (RODC); Server-services (web server, MDA, AD), Server-monitor (ERP, EDR), Server-data (File server, log server, and backup server), and Server-Critical (AD, Root CA).
         <br><br><br>
         <div class="titleB">Deployment in an ESX</div><br>
         I personally set up the proxy and reverse proxy, the firewalls with IPS, and the entire DNS system with its records for non-AD related actions and the root CA. Due to time constraints, we could not deploy everything that was requested (and were not expected to do everything). As a result, the ERP, EDR, and backup server were not deployed.<br>
         The proxy was configured as a Squid transparent proxy, meaning every internal web and DNS request would be routed through it, even if the proxy was not manually configured. The firewall filtered unnecessary packets using a well-constructed network matrix that indexed every destination reachable by a given source. Simple IPS rules were implemented. The DNS managed two domains: one private, managed by the AD and replicated in the DMZ-OUT by a cache DNS that also forwarded other requests to 8.8.8.8, and another public domain with records for accessing the website and mail server, including MX, SPF, and DKIM. Finally, the root CA was added as a trusted CA by the AD and signed the certificates for all TLS communications within the information system.
         <br><br><br>
         <div class="titleB">Security Audit</div><br>
         A part of the project involved auditing our infrastructure by conducting a risk analysis. We used a simple EBIOS RM for this purpose to track potential threats.<br>
         Additionally, since the project involved multiple teams, it was possible to attempt attacks on other teams or defend against attacks from them or our teachers (following predetermined rules). This served as an effective stress test for our system and others.
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
         PenEnv is a personal project I created to prepare for the penetration testing certifications I am aiming to pass. Its purpose is to standardize the installation of a penetration testing environment on Linux, primarily through automation. Additionally, it aims to automate certain steps in the penetration testing process.
         <br><br>
         It is open-source and available on my GitHub: <a href="https://github.com/lLouu/Penenv" target="_blank">https://github.com/lLouu/Penenv</a>
         <br><br>
         <div class="titleA">Features</div><br>
         - One-liner installer<br>
         - Installation of 112 penetration testing tools, including development languages, web scanning, brute-force tools, network tools, exploit libraries, reverse shell tools, and analysis and exploit scripts<br>
         - Custom Bash tool to execute servers by putting their live, uncached input and output streams into readable and editable files, allowing easy management of automated interactions with background tasks<br>
         - Custom Bash tools to facilitate basic tasks for limited-access reverse shells
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
         My portfolio is the personal project you are currently viewing. The idea was to create a one-page portfolio that can be hosted on free-tier OVH hosting, which comes with a domain name. This is achieved by using only client-side technologies, including HTML, CSS, and JavaScript. I implemented several features, such as a theme manager, a dynamic content system for easily adding and removing content, a filter, local storage management to maintain consistent theme and filtering choices, and, of course, some frontend design.
         <br><br>
         It is open-source and available on my GitHub: <a href="https://github.com/lLouu/Portfolio" target="_blank">https://github.com/lLouu/Portfolio</a>
         <br><br>
         <div class="titleA">Features</div><br>
         - Fully client-side website (HTML, CSS & JS) without the use of frameworks<br>
         - Light & Dark themes<br>
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