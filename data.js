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
    "Aspiring Data Scientist",
    "RPA Developer",
    "Intelligent Automation Engineer",
  ],
  tagline:
    "I build systems that read, understand and act on data, from LLM-powered document extraction to end-to-end automation pipelines.",
  location: "Trichy, Tamil Nadu, India",
  openTo: "Open to Data Science & RPA roles",

  // ---------- LINKS ----------
  email: "nambirajan5821@gmail.com",
  phone: "", // e.g. "+91 9xxxxxxxxx". Left empty on purpose: a public site attracts spam calls.
  linkedin: "https://www.linkedin.com/in/nambirajan-r-s-b6a0b3203",
  github: "https://github.com/nambirajan-rs",
  resume: "resume.pdf", // put your PDF in this folder with this exact name
  photo: "photo.png", // square image in this folder. Set to "" to show your initials instead.

  // ---------- ABOUT ----------
  about: [
    "I'm a Data Science postgraduate (M.Sc., Department Topper) with 3+ years of professional experience building AI-driven automation for enterprise clients in insurance, telecom, retail and utilities.",
    "At Bautomate, I work where data meets automation: designing BPMN workflows, writing Camunda script tasks, and integrating OCR and LLMs to turn messy invoices, bills and policy documents into clean, validated, structured data.",
    "Now I'm channelling that real-world experience into Data Science and Machine Learning, building models that don't just predict, but plug into the business processes that use them.",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "4", label: "Industries automated" },
    { value: "#1", label: "Dept. Topper, M.Sc. DS" },
    { value: "6", label: "Certifications" },
  ],

  // ---------- SKILLS ----------
  // Only list what you can confidently discuss in an interview.
  skills: [
    {
      category: "Data Science & ML",
      icon: "chart",
      items: ["Python", "Pandas", "NumPy", "Machine Learning", "NLP", "Deep Learning", "Data Analysis"],
    },
    {
      category: "AI & Document Intelligence",
      icon: "spark",
      items: ["LLM-Integrated Extraction", "OCR: Tesseract", "OCR: PaddleOCR", "Document Classification", "Signature Detection"],
    },
    {
      category: "RPA & Process Automation",
      icon: "bot",
      items: ["UiPath", "Automation Anywhere", "BPMN 2.0", "Camunda BPM", "Form.io", "Document Management (DMS)"],
    },
    {
      category: "Programming & Data",
      icon: "code",
      items: ["Python", "Groovy", "JavaScript (Nashorn / GraalJS)", "SQL", "NoSQL", "JSON", "MS Business Central Integration"],
    },
  ],

  // Things you're studying now. Move an item into "skills" once you've built a project with it.
  learning: [
    { name: "Retrieval-Augmented Generation (RAG)", status: "In progress" },
    { name: "LangChain / LlamaIndex", status: "In progress" },
    { name: "Vector Databases (FAISS, ChromaDB)", status: "Up next" },
    { name: "MLOps & Model Deployment", status: "Up next" },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Process Automation Engineer",
      company: "Vinga Software Solutions Pvt Ltd (Bautomate)",
      period: "Jul 2023 – Present",
      summary: "Bautomate is an enterprise hyperautomation platform combining BPM, RPA, OCR and LLMs.",
      points: [
        "Design and maintain BPMN-based workflows integrating RPA, AI-powered OCR and LLM-driven content extraction for enterprise clients.",
        "Own script-task development and production debugging in Camunda BPM (Groovy / JavaScript / Nashorn) for an insurance policy onboarding pipeline: checkpoint validation, signature-detection enrichment and audit-report generation.",
        "Resolved a Java/GraalJS interop defect in Jackson ObjectMapper deep copies by building custom map-key helper functions, restoring reliable enumeration in downstream scripts.",
        "Re-engineered a document extraction script to parse and flatten page-keyed JSON output, with backward-compatible fallbacks for legacy data formats.",
        "Fixed a variable-scoping defect in an Excel compliance audit report generator that caused systematic column misalignment.",
        "Built Form.io UAT forms and resolved DMS datagrid download failures and conditional-visibility bugs in calculated fields.",
        "Delivered a data deduplication workflow for Malaysian utility billing (TNB) JSON records to improve downstream data quality.",
      ],
    },
  ],

  // ---------- PROJECTS ----------
  // category: "ds" (Data Science & AI) or "automation" (Automation & RPA)
  // github / demo: leave "" to hide the button. Only link repos that contain code!
  projects: [
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
    {
      title: "LLM-Enhanced Document Data Extraction",
      category: "automation",
      type: "Client: Indus Tower",
      description:
        "Configurable content-capture layout for invoices, bills and telecom documents, integrating LLMs to boost extraction accuracy, with automated result calculation and compliance validation.",
      tech: ["LLMs", "OCR", "BPMN", "Validation Rules"],
      github: "",
      demo: "",
    },
    {
      title: "End-to-End Invoice & Billing Automation",
      category: "automation",
      type: "Client: EMart24",
      description:
        "RPA bots download bills, BPMN workflows process invoices into structured JSON, and the pipeline syncs directly with Microsoft Business Central.",
      tech: ["RPA", "BPMN", "JSON", "MS Business Central"],
      github: "",
      demo: "",
    },
    {
      title: "Insurance Policy Onboarding Pipeline",
      category: "automation",
      type: "Client: Insurance",
      description:
        "Camunda-driven onboarding workflow with checkpoint validation, signature-detection enrichment and automated Excel compliance audit reports.",
      tech: ["Camunda BPM", "Groovy", "JavaScript", "Excel Reporting"],
      github: "",
      demo: "",
    },
    {
      title: "Utility Billing Data Deduplication",
      category: "automation",
      type: "Client: TNB Malaysia",
      description:
        "Deduplication workflow for large volumes of utility billing JSON records, improving data quality for downstream analytics and processing.",
      tech: ["Data Quality", "JSON", "Workflow Automation"],
      github: "",
      demo: "",
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "M.Sc. Data Science",
      school: "Bishop Heber College, Trichy",
      period: "2021 – 2023",
      detail: "CGPA 8.2 / 10 · Department Topper",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Bishop Heber College, Trichy",
      period: "2018 – 2021",
      detail: "CGPA 8.87 / 10",
    },
  ],

  // ---------- CERTIFICATIONS ----------
  // Add "link" with a credential URL if you have one, e.g. link: "https://coursera.org/verify/..."
  certifications: [
    { name: "Certification in UiPath", issuer: "UiPath", year: "2022", link: "" },
    { name: "Data Science for Business Innovation", issuer: "Coursera", year: "2022", link: "" },
    { name: "Code Free Data Science", issuer: "Coursera", year: "2022", link: "" },
    { name: "Introduction to Natural Language Processing", issuer: "Great Learning", year: "2022", link: "" },
    { name: "Introduction to NumPy Bootcamp", issuer: "DPhi", year: "2022", link: "" },
    { name: "Python for Beginners", issuer: "SoloLearn", year: "2021", link: "" },
  ],

  languages: ["Tamil", "English"],
};
