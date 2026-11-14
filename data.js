/* ==========================================================================
   PORTFOLIO CONTENT — edit ONLY this file to update your website.
   - Keep the quotes "" and commas , exactly as they are.
   - To hide a link/button, set it to "" (empty).
   - Save the file and refresh the browser to see changes.
   ========================================================================== */

const PORTFOLIO = {
  // ---------- BASICS ----------
  name: "Nambirajan R S",
  initials: "NR",
  // Rotating titles in the hero (first one shows first). Order = your priorities.
  roles: [
    "Hyperautomation Engineer",
    "AI / ML Automation",
    "RPA Developer",
  ],
  tagline:
    "I embed AI directly into automation: RPA bots, BPMN workflows and LLM-powered document processing, integrated with SAP, Dynamics 365 and REST APIs.",
  location: "Trichy, Tamil Nadu, India",
  openTo: "Open to Automation, AI/ML & RPA roles",

  // ---------- LINKS ----------
  email: "nambirajan5821@gmail.com",
  phone: "", // e.g. "+91 9xxxxxxxxx". Left empty on purpose: a public site attracts spam calls.
  linkedin: "https://www.linkedin.com/in/nambirajan-r-s-b6a0b3203",
  github: "https://github.com/nambirajan-rs",
  resume: "resume.pdf", // put your PDF in this folder with this exact name
  photo: "photo.png", // square image in this folder. Set to "" to show your initials instead.

  // ---------- ABOUT ----------
  about: [
    "I'm an Automation Engineer with 3+ years of hands-on experience designing and delivering end-to-end automation for enterprise clients across utilities, telecom, healthcare, compliance, manufacturing and finance.",
    "My solutions embed AI directly into RPA execution paths, combining Power Automate and in-house Bautomate RPA bots with BPMN / Camunda workflows, Intelligent Document Processing (OCR + LLM extraction) and Python, integrated with SAP, Microsoft Dynamics 365, SharePoint and REST APIs.",
    "I use Claude (Anthropic) as a primary tool for AI-assisted development and LLM integration, backed by an M.Sc. in Data Science with a strong foundation in machine learning and NLP. I'm currently studying for the AWS Prompt Engineering certification.",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "7", label: "Industries automated" },
    { value: "7", label: "Enterprise client projects" },
    { value: "#1", label: "Dept. Topper, B.Sc. CS" },
  ],

  // ---------- SKILLS ----------
  // Only list what you can confidently discuss in an interview.
  skills: [
    {
      category: "RPA Platforms",
      icon: "bot",
      items: ["Microsoft Power Automate", "Bautomate RPA (in-house)", "Web-Portal Automation", "SAP Automation", "Unattended 24×7 Bots", "Scheduling & Exception Handling"],
    },
    {
      category: "AI / ML & GenAI",
      icon: "spark",
      items: ["LLM-Based Document Extraction", "Claude (Anthropic)", "Prompt Engineering", "Intelligent Document Processing", "OCR: Tesseract", "OCR: PaddleOCR", "Document Classification", "NLP"],
    },
    {
      category: "Workflow & BPM",
      icon: "workflow",
      items: ["BPMN 2.0", "Camunda BPM (Groovy / JavaScript)", "Config-Driven Validation Rules", "Human-in-the-Loop Review", "Form.io"],
    },
    {
      category: "Programming & Data",
      icon: "code",
      items: ["Python", "JavaScript", "Groovy", "SQL", "NoSQL", "JSON Schemas", "Excel Reporting", "Dashboards"],
    },
    {
      category: "Integration",
      icon: "external",
      items: ["REST APIs", "SAP", "Microsoft Dynamics 365", "Business Central", "SharePoint", "Document Management (DMS)"],
    },
    {
      category: "Data Science & ML",
      icon: "chart",
      items: ["Machine Learning", "NLP", "Pandas", "NumPy", "Data Analysis"],
    },
  ],

  // Things you're studying now. Move an item into "skills" once you've built a project with it.
  learning: [
    { name: "AWS Prompt Engineering Certification", status: "In progress" },
    { name: "Retrieval-Augmented Generation (RAG)", status: "In progress" },
    { name: "LangChain / LlamaIndex", status: "Up next" },
    { name: "Vector Databases (FAISS, ChromaDB)", status: "Up next" },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Process Automation Engineer (Solution Trainee)",
      company: "SMI Tech Solutions (formerly Techmango Solutions – Bautomate)",
      period: "Jul 2023 – Present",
      summary: "Aptimeta: an enterprise BPM + RPA + OCR + LLM hyperautomation platform.",
      points: [
        "Deliver end-to-end hyperautomation solutions for enterprise clients in Malaysia, India and other markets, owning process analysis, solution design, bot development, UAT, deployment and production support.",
        "Embed AI into RPA execution paths: LLM- and OCR-based extraction of unstructured documents, Python-based classification and rule-driven validation that feeds automated decisions and ERP postings.",
        "Integrate bots with SAP, Microsoft Dynamics 365, Business Central, SharePoint and external REST APIs using structured JSON payloads.",
        "Build reusable, configuration-driven components (validation rules, extraction layouts, report templates) so business users can change logic without code changes.",
        "Use Claude (Anthropic) for AI-assisted development: designing optimized workflows, generating and reviewing scripts, and accelerating API and LLM integrations.",
        "Own script-task development and production debugging in Camunda BPM (Groovy / JavaScript / Nashorn), including an insurance onboarding pipeline (checkpoint validation, signature detection, audit reports).",
        "Resolved complex production defects: a Java / GraalJS interop issue in Jackson ObjectMapper deep copies and a variable-scoping defect in an Excel audit report generator.",
        "Re-engineered page-keyed JSON extraction parsing with backward-compatible fallbacks, built a deduplication workflow for Malaysian (TNB) utility billing records, and fixed Form.io / DMS datagrid and conditional-visibility issues.",
      ],
    },
  ],

  // ---------- PROJECTS ----------
  // category: "ds" (Data Science & AI) or "automation" (Automation & RPA)
  // github / demo: leave "" to hide the button. Only link repos that contain code!
  projects: [
    {
      title: "Utility Bill Automation with SAP Posting",
      category: "automation",
      type: "Client: SEGI Group (Malaysia)",
      description:
        "Web-portal RPA bots detect and download new utility bills, OCR / LLM-based IDP extracts the content into JSON, Excel and dashboard reports, and a human-in-the-loop review stage lets users comment before the bot posts approved entries into SAP.",
      tech: ["RPA", "OCR / LLM IDP", "SAP", "Human-in-the-Loop"],
      github: "",
      demo: "",
    },
    {
      title: "Utility Bill Automation with Dynamics 365",
      category: "automation",
      type: "Client: Emart (Malaysia)",
      description:
        "Automated utility bill retrieval from web portals, stored files in SharePoint via API, extracted bill data into consolidated reports and posted entries to the Dynamics 365 Purchase Journal through REST APIs.",
      tech: ["RPA", "SharePoint", "D365 API", "REST"],
      github: "",
      demo: "",
    },
    {
      title: "AI-Driven Compliance Audit Platform",
      category: "ds",
      type: "Client: Aparajitha",
      description:
        "Processes multiple source documents per audit (Muster Roll, Wage Register, PF, ESI and more) with Python document and domain classification ahead of LLM extraction, multi-level validation, and a high-volume workflow designed with Claude. All validation rules are configuration-driven.",
      tech: ["LLM", "Python", "BPMN", "Classification"],
      github: "",
      demo: "",
    },
    {
      title: "EB Bill Extraction & Master Data Reconciliation",
      category: "ds",
      type: "Client: Indus Towers",
      description:
        "Extracts data from high volumes of electricity bills using a configurable, LLM-enhanced content-capture layout, then compares values against master data with calculation and compliance checks that flag mismatches for review.",
      tech: ["LLM IDP", "Validation Rules", "Reconciliation"],
      github: "",
      demo: "",
    },
    {
      title: "Patient Registration & Insurance Eligibility",
      category: "automation",
      type: "Client: Tadawi",
      description:
        "Classifies new vs. existing patients, automates registration, visit creation and invoicing, and checks insurance eligibility across 5–10 insurer portals with RPA and web scraping to determine the covered amount.",
      tech: ["RPA", "Web Scraping", "Healthcare"],
      github: "",
      demo: "",
    },
    {
      title: "SAP Inventory Automation",
      category: "automation",
      type: "Client: Coats",
      description:
        "Unattended bots running 24×7 automate manual SAP inventory processes, with scheduling and exception handling so the process runs continuously with minimal human intervention.",
      tech: ["RPA", "SAP GUI", "Unattended Bots"],
      github: "",
      demo: "",
    },
    {
      title: "Bookkeeping & Reconciliation Automation",
      category: "automation",
      type: "Client: AccSource",
      description:
        "RPA bots orchestrated through BPMN flows automate bookkeeping and reconciliation, improving accuracy, reducing manual errors and saving significant processing time for the finance team.",
      tech: ["RPA", "BPMN", "Finance"],
      github: "",
      demo: "",
    },
    {
      title: "AI Document Classifier",
      category: "ds",
      type: "Personal project",
      description:
        "A machine learning web app that classifies uploaded financial documents as invoices or bank statements, with a full train → predict → serve pipeline.",
      tech: ["Python", "Machine Learning", "Flask", "NLP"],
      github: "https://github.com/nambirajan-rs/document-classifier-ai",
      demo: "",
    },
    {
      title: "Skin Lesion Classification & Detection",
      category: "ds",
      type: "Academic project",
      description:
        "Deep learning model to classify and detect skin lesions from dermoscopic images, supporting early screening of skin cancer.",
      tech: ["Python", "Deep Learning", "CNN", "Computer Vision"],
      github: "", // repo is empty: push code, then paste the link here
      demo: "",
    },
    {
      title: "Disaster Tweets: NLP Classification",
      category: "ds",
      type: "Personal project",
      description:
        "NLP pipeline that cleans and vectorises tweets and uses Logistic Regression to identify whether a tweet is about a real disaster.",
      tech: ["Python", "NLP", "Logistic Regression", "Text Preprocessing"],
      github: "", // repo is empty: push code, then paste the link here
      demo: "",
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "M.Sc. Data Science",
      school: "Bishop Heber College, Trichy",
      period: "2021 – 2023",
      detail: "CGPA 8.2 / 10",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Bishop Heber College, Trichy",
      period: "2018 – 2021",
      detail: "CGPA 8.87 / 10 · Department Topper",
    },
  ],

  // ---------- CERTIFICATIONS ----------
  // Add "link" with a credential URL if you have one, e.g. link: "https://coursera.org/verify/..."
  certifications: [
    { name: "AWS Prompt Engineering", issuer: "Amazon Web Services", year: "In progress", link: "" },
    { name: "Certification in UiPath", issuer: "UiPath", year: "2022", link: "" },
    { name: "Introduction to Natural Language Processing", issuer: "Great Learning", year: "2022", link: "" },
    { name: "Data Science for Business Innovation", issuer: "Coursera", year: "2022", link: "" },
    { name: "Code Free Data Science", issuer: "Coursera", year: "2022", link: "" },
    { name: "Introduction to NumPy Bootcamp", issuer: "DPhi", year: "2022", link: "" },
    { name: "Python for Beginners", issuer: "SoloLearn", year: "2021", link: "" },
  ],

  languages: ["English", "Tamil"],
};
