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
const label_color = {
   "comp": "purple",
   "dev": "darkgreen",
   "tools": "darkblue",
   "softwares": "darkred"
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
            "objective": "Create a method for migration of Authorization Servers API, should it be migrating platform (e.g. move to cloud), migrating softwares, or migrating authentification method (e.g. SAML, OAuth, OIDC)",
            "stakes": "This method will be used for futur mission with this subject for Onepoint's clients",
            "team": ["Myself", "A senior consultant in Solution Architecture"],
            "deliverables": ["Method's manual", "VM environement sandbox", "Powerpoint & Excel support for the method's steps"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Migration", "Automation", "Governance"],
            "dev": ["Bash"],
            "tools": ["PlantUML", "VirtualBox"],
            "softwares": ["Linux", "Keycloak", "Okta", "OpenLDAP", "SquidProxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["Migration", "Automation"],
            "sysadmin": ["Migration", "Linux"],
            "ci/cd": ["Automation", "Bash"],
            "audit": ["Governance"]
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
            "objective": "Provide a report and a rationnalisation about the wellbeing of EDITIS's IT department",
            "stakes": "The report given will impact strategic decisions for cost optimisations and the application of governance",
            "team": ["Myself", "A senior Entreprise Architect", "A senior consultant in IT for medias"],
            "deliverables": ["10 workshops with the client", "1 meeting between EDITIS's and Onepoint's IT departments", "Reports for each workshops", "A maturity analysis", "Recommendations over 4 axes (Technology, Fincances, Human Ressources, and Contracts)"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Audit", "FinOps", "MaturityAnalysis"]
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
            "objective": "Provide Automation for the CyberSecurity Platform (CSP)'s installation",
            "stakes": "The number of time CSP needs to be setted up is high due to the fact it is under development, needs many updates, and that it needs to be setted up for every Alstom's clients",
            "team": ["Myself", "A senior DevOps"],
            "deliverables": ["Automation scripts", "Framework for script creation with no code knowledge"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Integration", "Migration", "Automation"],
            "dev": ["Python", "Powershell", "Bash"],
            "tools": [],
            "softwares": ["MicrosoftServer", "Linux"]
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
            "objective": "Design, integrate on an ESX and audit a small Information System with multiple use cases",
            "stakes": "One of the biggest project of my studies, that regroups all cybersecurity majors' students to test all of our skills",
            "team": ["Myself", "two other students of the same major (Cybersecurity for Information System and Governance)", "two students in Cybersecurity for Software", "one student in Cloud Cybersecurity"],
            "deliverables": ["Full Information System Architecture", "ESX with the Information System integrated", "Risk Analysis of the structure"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Architecture", "Integration", "RiskAnalysis"],
            "dev": [],
            "tools": ["VisualParadigm", "ESX", "EBIOS"],
            "softwares": ["MicrosoftAD", "Bind9(DNS)", "PKI", "SquidProxy", "PfSense"]
         },
         "vignette_skills": {
            "all": ["Architecture", "ESX"],
            "audit": ["RiskAnalysis", "EBIOS"]
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
            "objective": "Create a script to automate the integration of many pentesting tools (more than 100)",
            "stakes": "This project was mainly for myself, to allow me to setup many VMs on different places with the exact same environement",
            "deliverables": ["Github repository", "One liner installator", "A script that allows to set a session stdin and stdout in readable & writable files, allowing other script to interact with the backend process", "Other custom bash scripts"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Integration", "Automation", "Parallelisation"],
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
            "objective": "Create a flexible portfolio website with no framework and only static files with no servers",
            "stakes": "First, it should be a portfolio that can be updated quickly for employers to see my different curently relevent projects. Secondly, the hosting is a plan going with the domain names, and allows only FTP transfer, meaning no servers can be hosted",
            "deliverables": ["Git repository", "French & English version"]
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": ["Low-level Development"],
            "dev": ["html", "css", "js"],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": ["Low-level Development"]
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
            "objective": "O",
            "stakes": "S"
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": [],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": [],
            "sysadmin": [],
            "ci/cd": [],
            "audit": [],
            "devsecops": []
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
            "objective": "O",
            "stakes": "S"
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": [],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": [],
            "sysadmin": [],
            "ci/cd": [],
            "audit": [],
            "devsecops": []
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
            "objective": "O",
            "stakes": "S"
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": [],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": [],
            "sysadmin": [],
            "ci/cd": [],
            "audit": [],
            "devsecops": []
         }
      }
   },
   {
      "title": "AZ-104",
      "type": "study",
      "img": "azure.png",
      "desc": "Microsoft's certification on the technical usage of Azure (96% of required score)",
      "filters": ["sysadmin", "cloud"],
      "content": {
         "board": {
            "objective": "O",
            "stakes": "S"
         },
         "contribution": `
         
         `,
         "results": `
         
         `,
         "skills": {
            "comp": [],
            "dev": [],
            "tools": [],
            "softwares": []
         },
         "vignette_skills": {
            "all": [],
            "sysadmin": [],
            "ci/cd": [],
            "audit": [],
            "devsecops": []
         }
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