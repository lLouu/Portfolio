const see_more_str = "See more →"
const roles = ["System Admin", "DevSecOps", "CI/CD Engineer", "Cybersecurity Auditor"]
const popup_const = {
   "board": "Key points",
   "objective": "Objective",
   "stakes": "Stakes",
   "team": "Team",
   "deliverables": "Deliverables",
   "contribution": "My Contribution",
   "results": "Results"
}

const content = [
   {
      "title": "Junior Architect",
      "type": "job - internship",
      "img": "onepoint.png",
      "desc": "Design of a method for the migration of Authorization Servers",
      "filters": ["sysadmin", "ci/cd", "audit", "cloud"],
      "content": {
         "board": {
            "objective": "Create a migration method for API authorization servers, whether to change platforms (e.g., move to the cloud), software, or authentication method (e.g., SAML, OAuth, OIDC).",
            "stakes": "This method will serve as the basis for missions involving integration or migration of authorization servers for Onepoint clients.",
            "team": ["A senior solutions architecture consultant", "Myself, junior architect"],
            "deliverables": ["The method manual", "A virtual sandbox environment", "PowerPoint and Excel support for the different steps of the method"]
         },
         "contribution": `
            <div class="titleC">Framing</div>
            First, it was necessary to frame the subject. This was achieved by understanding the stakes, and thus:<br>
            - Research documents on Google Scholar<br>
            - Search for recommendations from specialized government agencies, such as ANSSI<br>
            - Analyze the various existing solutions on the market, their market share, and user satisfaction to deduce the solutions likely to be encountered<br>
            <br>
            <div class="titleC">Method Design</div>
            The method is based on the desire to address the main challenges: preserving availability, integrity, confidentiality, and non-repudiation as much as possible; providing a rational return on investment; enabling fast execution.<br>
            Therefore, it is client-focused and consists of four steps:<br>
            - Deduce the client's specific challenges, and assess them<br>
            - Identify which migrations can be carried out and determine their return on investment to choose which ones to implement<br>
            - Define migration policies, SLOs to be maintained during migration, and create a migration protocol based on a model facilitating traceability, checks, and rollbacks<br>
            - Communicate, apply, and verify the migration<br>
            <br>
            <div class="titleC">Setting up the Sandbox Environment</div>
            To test the method, it was necessary to create a sandbox environment. This environment consists of 8 virtual machines, including an unmaintained version of Keycloak and an OpenLDAP. This environment has 2 authentication flows:<br>
            - OAuth authentication from a WordPress to the Keycloak<br>
            - LDAP authentication from a Squid proxy to the OpenLDAP<br>
            <br></div>
            It is then possible to test the method within the context of various migrations, such as:<br>
            - Upgrading the major version of Keycloak<br>
            - Migrating Keycloak to the cloud with Okta<br>
            - Changing the LDAP flow to an OAuth flow<br>
         `,
         "skills": {
            "comp": ["Migration", "Automation", "IAM", "Governance"],
            "dev": ["Bash"],
            "tools": ["PlantUML", "VirtualBox"],
            "softwares": ["Linux", "Keycloak", "Okta", "OpenLDAP", "Squid Proxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["IAM", "Automation"],
            "sysadmin": ["Migration", "Linux"],
            "ci/cd": ["Automation", "Bash"],
            "audit": ["Governance", "IAM"]
         }
      }
   },
   {
      "title": "Junior Analyst",
      "type": "job - internship",
      "img": "editis.png",
      "desc": "Technical Diagnosis and Financial Rationnalisation of the Direction of Infrastructures",
      "filters": ["audit"],
      "content": {
         "board": {
            "objective": "Provide a feedback report and a rationalization on the functioning of EDITIS' IT department.",
            "stakes": "This report will have a significant impact on EDITIS' strategic decisions regarding IT financial direction, as well as the governance method employed.",
            "team": ["A senior enterprise architect", "A senior IT consultant for media", "Myself, junior analyst"],
            "deliverables": ["10 workshops with the client", "An interview between EDITIS' IT department and Onepoint's IT department", "A maturity analysis", "Recommendations on 4 axes (Technological, Human, Financial, and Contractual)"]
         },
         "contribution": `
            <div class="titleC">Data Indexing and Processing</div>
            One of my main tasks was to:<br>
            - Collect the various data exchanged during the workshops<br>
            - Index this data for easy retrieval<br>
            - Classify the data among the 4 main analysis axes and group them by theme<br>
            <br>
            <div class="titleC">Maturity Analysis</div>
            With the help of the senior enterprise architect, I was able to:<br>
            - Define a maturity scale to position a situation on a scale from 0 (immature) to 5 (fully self-managed)<br>
            - Compare the client's data with the state of the art<br>
            - Apply the maturity scale to each of the themes discussed<br>
         `,
         "skills": {
            "comp": ["Audit", "FinOps", "Maturity Analysis"]
         },
         "vignette_skills": {
            "all": ["Audit", "FinOps"]
         }
      }
   },
   {
      "title": "Junior DevSecOps",
      "type": "job - internship",
      "img": "alstom.png",
      "desc": "Creation of a framework for automatic deployment",
      "filters": ["devsecops", "ci/cd", "sysadmin"],
      "content": {
         "board": {
            "objective": "Automate the integration of the CyberSecurity Platform (CSP).",
            "stakes": "Automation helps reduce the time required for CSP integration, which is high due to the need to perform it at least once for each client, but also in the product development context to enable testing.",
            "team": ["A senior DevOps", "Myself, junior DevSecOps"],
            "deliverables": ["Automation scripts", "Framework for creating standardized scripts without coding knowledge"]
         },
         "contribution": `
            During this internship, I was able to:<br>
            - Transform manual protocols into Python and PowerShell scripts<br>
            - Analyze the challenges and highlight them to managers<br>
            - Propose a tool addressing these challenges, facilitating script maintenance, consolidating automation functions, and standardizing script usage
         `,
         "results": `
            The biggest project was the development of the script creation framework. The objective was twofold: to be able to transform an English text, following a few syntax rules, into a functional script that meets the company's requirements, such as log policies or the ability to execute only certain steps of the script in the desired order.<br>
            <br>
            Some additional features were also developed, including secure storage of options, especially passwords, managed in such a way that the script requires no user intervention during execution, moving towards a "double-click and wait" operation.<br>
            <br>
            Thus, this tool bridges the gap between developers, who create automation functions, protocol creators, who can generate a script from readable English text using these functions, and operators, who execute the script, input specific options for their use, and then wait.
         `,
         "skills": {
            "comp": ["Integration", "Migration", "Automation"],
            "dev": ["Python", "Powershell", "Bash"],
            "tools": [],
            "softwares": ["Microsoft Server", "Linux"]
         },
         "vignette_skills": {
            "all": ["Integration", "Python"],
            "sysadmin": ["Linux", "Powershell"],
            "ci/cd": ["Automation", "Python"],
            "devsecops": ["Python", "Powershell"]
         }
      }
   },
   {
      "title": "Building a full Information System",
      "type": "project",
      "img": "master_project.png",
      "desc": "Design, Deployment and Audit of an Information System hosted on an ESX",
      "filters": ["ci/cd", "sysadmin", "audit"],
      "content": {
         "board": {
            "objective": "Complete a student project testing our skills in designing, integrating, and auditing an enterprise information system.",
            "stakes": "This project is fundamental for the validation of my master's degree at EFREI.",
            "team": ["2 other students in Information Systems Cybersecurity and Governance", "2 students in Infrastructure and Software Cybersecurity", "1 student in Cloud Cybersecurity", "Myself, a student in Information Systems Cybersecurity and Governance"],
            "deliverables": ["Network architecture of the information system", "Deployed information system on an ESX", "Risk analysis of the information system"]
         },
         "contribution": `
            <div class="titleC">Design of the Information System</div>
            Initially, I actively participated in designing the architecture of the information system, including:<br>
            - Segmentation into zones, comprising DMZs, server zones, and user zones based on criticalities and uses<br>
            - Comprehensive definition of the flow matrix<br>
            <br>
            <div class="titleC">Service Deployment</div>
            Next, we needed to deploy the various services, including:<br>
            - PfSense, applying filters to only allow flows defined in the flow matrix, as well as setting up a VPN and an IDS<br>
            - The DNS system, comprising two domains (one internal and one external), with the internal replicated in the OUT DMZ (coming from the system) and the external replicated in the IN DMZ (coming from the internet)<br>
            <br>
            <div class="titleC">Risk Analysis</div>
            Finally, we needed to conduct a risk analysis. Along with the two other students in my major, we used the EBIOS method to accomplish this task.
         `,
         "skills": {
            "comp": ["Architecture", "Integration", "Risk Analysis"],
            "dev": [],
            "tools": ["Visual Paradigm", "ESX", "EBIOS"],
            "softwares": ["Microsoft Active Directory", "Bind9 (DNS)", "PKI", "Squid Proxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["Architecture", "ESX"],
            "audit": ["Risk Analysis", "EBIOS"]
         }
      }
   },
   {
      "title": "PenEnv - Bash Pentesting scripts",
      "type": "project",
      "img": "penenv.png",
      "desc": "Development of an installation tool for a Linux pentesting environement",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "content": {
         "board": {
            "objective": "Create an installation tool to standardize virtual environments for pentesting.",
            "stakes": "Facilitate the creation of new pentest virtual environments by reducing installation and configuration bugs.",
            "deliverables": ["GitHub repository", "One-liner installer", "A script to store the stdin and stdout of a background process in files, facilitating interaction with scripts", "Other scripts to aid pentesting"]
         },
         "contribution": `
            <div class="titleC">Installation Script</div>
            The goal is to harmonize the various tools to avoid compatibility or installation bugs. All these installations are done in parallel. In this way, a set of over 100 tools, including software, scripts, and programming languages, are installed in 40 minutes using default configurations. Since these tools can take anywhere from 10 minutes to 2 hours to install, the time saved is substantial.<br>
            <br>
            <div class="titleC">Enable Interaction Between Background Processes and Scripts</div>
            One of the main challenges in bash automation is the inability to interact with a background service, such as a server or a continuously running scan tool. To address this, it was necessary to find a way to redirect input (stdin) and output (stdout) to live files.<br>
            On one hand, for inputs, we needed a way to place a continuously reading process in a pipeline. Since we want the process to remain active, the input must be a constant stream and not stop. Fortunately, with the tail command, it is possible to retrieve new lines from a file.<br>
            On the other hand, a output file is needed. At first glance, this task seems simple because it is easy to redirect the output of a command to a file in bash. However, this output is placed in a buffer, and as long as this buffer is not full or the command is not finished, the output file is not updated. For this reason, it was necessary to use a command that is not easy to find: "unbuffer".<br>
            In this way, after extensive research to find this method, it is now possible to launch a background process while interacting with it live through reading and writing to files.
         `,
         "skills": {
            "comp": ["Integration", "Automation", "Parallelization", "Engineering"],
            "dev": ["Bash"],
            "tools": [],
            "softwares": ["Linux"]
         },
         "vignette_skills": {
            "all": ["Automation", "Bash"]
         }
      }
   },
   {
      "title": "Portfolio",
      "type": "project",
      "img": "portfolio.png",
      "desc": "Design of a client-side website without usage of frameworks",
      "filters": ["devsecops", "ci/cd"],
      "content": {
         "board": {
            "objective": "Create a static portfolio from scratch without a framework, while allowing easy content modification.",
            "stakes": "Having a portfolio hosted on a server that only accepts FTP connections, meaning a static portfolio, while having advanced filtering and content adaptation capabilities.",
            "deliverables": ["GitHub repository", "English and French versions"]
         },
         "contribution": `
             <div class="titleC">Site Design</div>
             To be honest, design is not my strong suit. However, I drew inspiration from designs of other portfolios and created the entire front end in HTML and CSS.<br>
             I also added a simple light and dark theme system: the colors use CSS variables, allowing the theme to be changed simply by modifying the source CSS of the variables.<br>
             Finally, I used CSS animations, whether for the looping landing page phrase or for transitions, like the thumbnail filter or theme change.<br>
             <br>
             <div class="titleC">Thumbnail System</div>
             The goal is obviously to list my various projects and make the site adaptable to my future experiences. To achieve this, the thumbnails are created and added via JavaScript from a JSON file.<br>
             Modifying the JSON directly changes the content of the portfolio, facilitating quick updates.<br>
             It is possible to filter these thumbnails, which allows adapting the tags associated with the search.<br>
             <br>
             <div class="titleC">Responsiveness</div>
             Finally, I needed to make the site responsive. I used flexbox, but I also had to think of a solution for the thumbnails and popups. Thus, with JavaScript, the site adjusts the number of thumbnails per row (between 1 and 5) and readjusts the position of the popups when the window is resized.<br>
             <br>
             <div class="titleC">Session</div>
             A session system has been implemented to retain the filter and theme chosen by the user. To do this, local and session storage are used.
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
      "type": "study",
      "img": "efrei.jpg",
      "desc": "Study in Cybersecurity for Information Systems and in Governance",
      "filters": ["sysadmin", "devsecops", "audit"],
      "content": {
         "board": {
            "objective": "Learn and train to become a cybersecurity engineer capable of meeting technical and governance expectations.",
            "stakes": "The IT market, especially in cybersecurity, is highly dynamic. It is therefore essential to learn how to stay informed, adapt quickly, and understand the fundamentals not just by heart but in their operation, in order to grasp vulnerabilities and their remedies."
         },
         "results": `
            <div class="titleC">Cybersecurity of Information Systems and Governance</div>
            My major focuses on cybersecurity of information systems and governance. This is divided into two categories.<br>
            On one hand, information system security involves knowing:<br>
            - The security of communication flows and associated cryptography.<br>
            - Network flow control.<br>
            - Detection of vulnerabilities or intrusions, and their automated remediation.<br>
            - Best security practices for information system architecture.<br>
            - Securing virtualized systems.<br>
            - Identity Access Management (IAM).<br>
            <br>
            On the other hand, governance involves:<br>
            - Data classification for secure storage and processing compliant with regulations.<br>
            - ISO 27001, 27003, and 27005 standards.<br>
            - Risk analysis using EBIOS.<br>
            - Risk management with Business Continuity Plans (BCP) and Disaster Recovery Plans (DRP).<br>
            <br>
            <div class="titleC">Master's Projects</div>
            During my master's program, three projects were completed, all in teams of six:<br>
            - The first project was carried out at the end of the third year as part of a "mastercamp," aimed at providing an overview of our future major. The theme for my team's project was to create a tool for sharing confidential documents, with a cryptographic system ensuring that only authorized individuals could access the data in clear text.<br>
            - The second project took place throughout the second semester of the fourth year under the name "master project," and it was the most challenging of the three. This involved creating an information system, deploying it on ESX, and auditing it. Another vignette in my portfolio goes into more detail.<br>
            - The last project was completed during the first semester of the final year and involved producing a utility tool. In my case, this project consisted of creating a client application to manage multi-factor authentications using TOTP.<br>
            <br>
            <div class="titleC">Internships and International Experience</div>
            Over the five years, four internships were completed, as well as a semester abroad. The internships help to understand the working world:<br>
            - In the first year, a worker internship served to discover jobs generally distant from the offices where engineers work, yet impacted by the decisions made in those offices.<br>
            - In the second year, a sales internship to learn about sales processes and understand how value is delivered.<br>
            - In the fourth year, a technical internship to challenge our technical skills in a professional environment.<br>
            - In the fifth year, an engineering internship to challenge us both in terms of technical skills and our capacity for innovation and application of our major expertise.<br>
            <br>
            <div class="titleC">From Atoms to Software</div>
            The first two years of integrated preparatory classes at EFREI focus on understanding how a computer works, starting from atoms to algorithmic functioning. This includes semiconductors, electricity, logic gates, simple electronics design in VHDL, mathematical understanding of binary, and optimizations of binary calculations.<br>
            <br>
            <div class="titleC">Communication</div>
            EFREI is a school where 20% to 25% of the program is dedicated to communication. This includes several aspects:<br>
            - The ability to express and develop an idea, using storytelling effectively.<br>
            - The ability to present orally.<br>
            - English language skills.<br>
            - Understanding corporate cultures, the notion of soft skills, and CSR initiatives.
            `,
         "skills": {
            "comp": ["Network Security", "Detection & Protection", "Architecture", "IAM", "Data Classification", "ISO 2700X", "Risk Analysis", "Cryptography", "Secure Protocols", "Communication"],
            "dev": ["Python", "C", "C++", "SQL", "VHDL"],
            "tools": ["EBIOS", "BCP", "DRP"],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Architecture", "EBIOS"],
            "sysadmin": ["Architecture", "IAM"],
            "audit": ["EBIOS", "BCP"],
            "devsecops": ["Python", "C++", "SQL"]
         }
      }
   },
   {
      "title": "GCP Digital Leader",
      "type": "certification",
      "img": "gcp.png",
      "desc": "Google Cloud Platform's certification for the GCP products and their use cases",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "board": {
            "objective": "Learn the basics of cloud tools and best practices, as well as the GCP tools available for this purpose.",
            "stakes": "GCP Google Cloud Digital Leader."
         },
         "results": `
            After taking the exam, I obtained the certification (<a href="https://www.credly.com/badges/a31235b9-4be0-4093-8b6b-09dc0653fcc1/public_url" target="_blank">proof here</a>). In this certification, I learned about:<br>
            - The usefulness of cloud computing in business.<br>
            - How data is processed and used.<br>
            - How AI is implemented.<br>
            - Methods for migrating to the cloud.<br>
            - Cloud security.<br>
            - Scaling and FinOps.
         `,
         "skills": {
            "comp": ["Data Storage", "Cloud AI", "Cloud Migration", "Cloud Security", "FinOps"],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Cloud Migration", "FinOps"],
            "sysadmin": ["Data Storage"]
         }
      }
   },
   {
      "title": "AWS Solution Architect Associate",
      "type": "study",
      "img": "aws.png",
      "desc": "AWS's Certification for solution architecture using AWS services (95% of required score)",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "board": {
            "objective": "Learn how to use AWS to create functional, secure, and cost-optimized solutions",
            "stakes": "AWS Solution Architect Associate"
         },
         "results": `
            Unfortunately, I scored 690/1000 on the exam, while the passing mark was 720. However, this also means I am close to the level required for the certification. I learned the following:<br>
            - How to use AWS Compute<br>
            - Manage data on AWS<br>
            - Organize networks and network security<br>
            - Manage databases<br>
            - Create serverless solutions<br>
            - Use AWS for IAM<br>
            - Monitor the information system
         `,
         "skills": {
            "comp": ["AWS Compute", "Data Management", "Network Security", "IAM", "Monitoring"],
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
   //    "type": "study",
   //    "img": "azure.png",
   //    "desc": "Microsoft's certification on the technical usage of Azure (96% of required score)",
   //    "filters": ["sysadmin", "cloud"],
   //    "content": {
   //       "board": {
   //          "objective": "O",
   //          "stakes": "S"
   //       },
   //       "results": `
   //          Sadly, I got at the exam 674/1000 when validation was at 700. However, that also means I am near the level of the certification. I learnt the following :<br>
   //       `,
   //       "skills": {
   //          "comp": [],
   //          "dev": [],
   //          "tools": [],
   //          "softwares": []
   //       },
   //       "vignette_skills": {
   //          "all": [],
   //          "sysadmin": [],
   //          "cloud": []
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
      "title": "My Github",
      "type": "account",
      "img": "github.png",
      "desc": "Repositories of my different projects",
      "filters": ["devsecops", "pentesting", "ci/cd"],
      "links": "https://github.com/lLouu"
   },
   {
      "title": "My Hackthebox",
      "type": "account",
      "img": "hackthebox.png",
      "desc": "Training place for pentesting",
      "filters": ["pentesting"],
      "links": "https://app.hackthebox.com/profile/1426168"
   },
   {
      "title": "My CodingGame",
      "type": "account",
      "img": "codinggame.jpg",
      "desc": "Training place for coding",
      "filters": ["devsecops"],
      "links": "https://www.codingame.com/profile/98c9da903a5b276d4cbc503fbe5680da6636135"
   }
]