/* ==========================================================================
   PORTFOLIO CONTENT: edit ONLY this file to update your website.
   - Keep the quotes "" and commas , exactly as they are.
   - To hide a link/button, set it to "" (empty).
   - Save the file and refresh the browser to see changes.
   ========================================================================== */

const PORTFOLIO = {
  // ---------- BASICS ----------
  name: "Nambirajan R S",
  initials: "NR",
  title: "Automation Engineer · Document AI & IDP",
  tagline:
    "I build Intelligent Document Processing pipelines: document classification, OCR and LLM-based extraction, validated and posted into SAP, Dynamics 365 and SharePoint.",
  location: "Trichy, Tamil Nadu, India",
  openTo: "Open to AI Engineer / Document AI roles · Available Jan 2027",

  // ---------- LINKS ----------
  email: "nambirajan5821@gmail.com",
  phone: "", // left empty on purpose: a public site attracts spam calls
  linkedin: "https://www.linkedin.com/in/nambirajan-r-s-b6a0b3203",
  github: "https://github.com/nambirajan-rs",
  resume: "resume.pdf", // keep the PDF in this folder with this exact name
  photo: "photo.jpg", // square image in this folder. Set to "" to show initials instead.

  // ---------- ABOUT ----------
  about: [
    "I'm an Automation Engineer specialising in Document AI, with 3+ years of experience building production IDP pipelines for enterprise clients in utilities, telecom, healthcare, compliance and finance across India and Malaysia.",
    "My work covers the whole document flow: Python-based classification that routes each document, OCR and LLM field extraction into structured JSON, multi-level validation with human review, and integration with SAP, Microsoft Dynamics 365 and SharePoint through REST APIs.",
    "I hold an M.Sc. in Data Science and I'm now moving deeper into AI engineering: RAG, evaluation and LLM tooling.",
  ],
  stats: [
    { value: "3+", label: "Years building automation" },
    { value: "5,000+", label: "Bills extracted per month" },
    { value: "95%+", label: "Field-extraction accuracy" },
    { value: "2,000+", label: "Compliance documents processed" },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      company: "SMI Tech Solutions (formerly Vinga Software Solutions – Bautomate)",
      period: "Jul 2023 – Present",
      summary: "Aptimeta platform: BPM + RPA + OCR + LLM",
      roles: [
        { title: "Automation Engineer", period: "Aug 2026 – Present" },
        { title: "Associate Automation Engineer", period: "Jul 2025 – Jul 2026" },
        { title: "Solutions Trainee", period: "Jul 2023 – Jul 2025" },
      ],
      points: [
        "Build end-to-end IDP pipelines for enterprise clients in Malaysia and India: intake, classification, OCR, LLM extraction, validation, review and ERP posting.",
        "Develop Python-based document and domain classification that routes each document to the right extraction layout before LLM extraction.",
        "Design multi-level validation (calculation checks, compliance rules, master-data reconciliation) with human-in-the-loop review.",
        "Integrate extracted data with SAP, Microsoft Dynamics 365, Business Central and SharePoint through REST APIs and structured JSON.",
        "Own production support in Camunda BPM, including a Java / GraalJS interop defect in Jackson ObjectMapper deep copies.",
      ],
    },
  ],

  // ---------- CLIENT PROJECTS (no public code) ----------
  clientProjects: [
    {
      title: "EB Bill Extraction & Master Data Reconciliation",
      client: "Indus Towers",
      metric: "5,000+ bills/month · 95%+ accuracy",
      description: "Configurable LLM-based IDP pipeline that cut manual audit turnaround by 70%, with automatic checks against master data that flag mismatches for review.",
      tech: ["LLM IDP", "Validation Rules", "Reconciliation"],
    },
    {
      title: "AI-Driven Compliance Audit Platform",
      client: "Aparajitha",
      metric: "2,000+ documents · 7,000+ pages",
      description: "Python document and domain classification ahead of LLM extraction for Muster Roll, Wage Register, PF and ESI records, with configuration-driven audit validation.",
      tech: ["Classification", "LLM Extraction", "Python"],
    },
    {
      title: "Utility Bill IDP with SAP Posting",
      client: "SEGI Group, Malaysia",
      metric: "1,200+ accounts · 8+ utility providers",
      description: "Web-portal bots download new bills, OCR + LLM extraction builds JSON, Excel and dashboard reports, and a human review stage approves entries before posting to SAP.",
      tech: ["OCR", "LLM IDP", "RPA", "SAP"],
    },
    {
      title: "Utility Bill IDP with Dynamics 365",
      client: "Emart, Malaysia",
      metric: "500+ accounts · zero manual effort",
      description: "Automated bill retrieval into SharePoint, consolidated reporting and posting to the Dynamics 365 Purchase Journal through REST APIs.",
      tech: ["LLM IDP", "SharePoint", "D365 API"],
    },
    {
      title: "SAP Inventory Automation",
      client: "Coats",
      metric: "~40 hours/week saved · <1% errors",
      description: "Unattended 24x7 SAP GUI bots with scheduling and exception handling that replaced manual inventory data entry.",
      tech: ["RPA", "SAP GUI"],
    },
    {
      title: "Patient Registration & Insurance Eligibility",
      client: "Tadawi",
      metric: "5–10 insurer portals",
      description: "Classifies new vs. existing patients, automates registration and invoicing, and checks insurance eligibility across insurer portals.",
      tech: ["RPA", "Web Scraping", "Healthcare"],
    },
  ],

  // ---------- OPEN-SOURCE PROJECTS (on GitHub) ----------
  githubProjects: [
    {
      title: "AI Document Classifier",
      type: "Personal project",
      description: "Flask app that classifies PDF/TXT documents as invoice or bank statement with TF-IDF + Logistic Regression. Trained on synthetic data so no personal data enters the model.",
      tech: ["Python", "scikit-learn", "Flask"],
      github: "https://github.com/nambirajan-rs/document-classifier-ai",
    },
    {
      title: "Water Potability Prediction",
      type: "Academic project",
      description: "Compared 7 classifiers, then found and fixed target leakage and a train/serve scaling bug. Serves a Random Forest pipeline through Flask (67.7% leakage-free accuracy).",
      tech: ["scikit-learn", "Random Forest", "Flask"],
      github: "https://github.com/nambirajan-rs/Water-potability-prediction",
    },
    {
      title: "Skin Lesion Classification",
      type: "Academic project",
      description: "Benign vs. malignant classification of ~3,300 images. A custom CNN reached 85.8% accuracy and 0.93 malignant recall, benchmarked against VGG16 and InceptionV3.",
      tech: ["TensorFlow", "CNN", "Transfer Learning"],
      github: "https://github.com/nambirajan-rs/skin-lesion-classification",
    },
  ],

  // ---------- SKILLS ----------
  // Only list what you can confidently discuss in an interview.
  skills: [
    {
      category: "Document AI",
      items: ["Intelligent Document Processing", "LLM field extraction", "Document classification", "OCR: Tesseract, PaddleOCR", "Prompt engineering", "Claude (Anthropic)"],
    },
    {
      category: "Python & ML",
      items: ["Python", "scikit-learn", "TensorFlow / Keras", "Flask", "NLP", "Pandas", "SQL"],
    },
    {
      category: "Automation & BPM",
      items: ["BPMN 2.0", "Camunda BPM", "RPA / web-portal bots", "SAP GUI automation", "Power Automate", "Human-in-the-loop review"],
    },
    {
      category: "Integration",
      items: ["REST APIs", "JSON Schema", "SAP", "Microsoft Dynamics 365", "Business Central", "SharePoint"],
    },
  ],
  learning: ["RAG", "LLM evaluation", "LangChain / LlamaIndex", "Vector databases", "AWS Prompt Engineering (in progress)"],

  // ---------- EDUCATION ----------
  education: [
    { degree: "M.Sc. Data Science", school: "Bishop Heber College, Trichy", period: "2021 – 2023", detail: "CGPA 8.2 / 10" },
    { degree: "B.Sc. Computer Science", school: "Bishop Heber College, Trichy", period: "2018 – 2021", detail: "CGPA 8.87 / 10 · Department Topper" },
  ],

  // ---------- CERTIFICATIONS ----------
  // Add "link" with a credential URL if you have one.
  certifications: [
    { name: "AWS Prompt Engineering", issuer: "Amazon Web Services", year: "In progress", link: "" },
    { name: "Introduction to Natural Language Processing", issuer: "Great Learning", year: "2022", link: "" },
    { name: "Data Science for Business Innovation", issuer: "Coursera", year: "2022", link: "" },
    { name: "UiPath Certification", issuer: "UiPath", year: "2022", link: "" },
    { name: "Python Certificate", issuer: "HackerRank", year: "", link: "" },
  ],

  languages: ["English", "Tamil"],
};
