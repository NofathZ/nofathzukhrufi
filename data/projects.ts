export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  link: string;
  overview: string;
  problem: string;
  role: string;
  technologies: string[];
  solution: string;
  result: string;
  impact: string;
  icon: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "bima-utama",
    title: "Bima Utama",
    type: "Web (Fullstack)",
    link: "https://bimautama.com",
    overview: "CV Bima Utama is an industrial machinery maintenance and services provider. Built a modern web presence to showcase their products, services, company updates, and career opportunities to potential clients and job seekers.",
    problem: "The previous website lacked complete product and service information, had outdated design, no news/updates section, and no career page to attract potential employees. This limited their online visibility and professional brand presence.",
    role: "Fullstack Developer - Built the entire application from scratch to production deployment. Handled frontend development, backend architecture, database design, and deployment infrastructure.",
    technologies: ["React.js", "Node.js", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    solution: "Developed a modern, responsive Single Page Application (SPA) with comprehensive product showcase, detailed service descriptions, news/blog section for company updates, and a dedicated careers page. Prioritized user experience and SEO optimization throughout.",
    result: "Professional and modern website with complete product and service information. Career page provides a dedicated channel for recruitment. News section enables regular company updates. Solid foundation for future scalability and feature additions.",
    impact: "Established professional online presence for the company. Enhanced credibility in the industrial manufacturing and services sector. Created new recruitment channel through careers page. Provided scalable platform for future growth and expansion.",
    icon: "bi-gear-fill",
  },
  {
    id: "2",
    slug: "resilience-test",
    title: "Resilience Test",
    type: "Web (Frontend)",
    link: "https://resilience-test.vercel.app",
    overview: "A healthcare resilience assessment tool built for a medical professional's bachelor thesis research. The application measures and evaluates resilience levels in patients through an interactive questionnaire-based assessment.",
    problem: "A friend who is a doctor needed a tool to measure resilience levels in her patients for her bachelor thesis research. She required a user-friendly application that could administer resilience assessments and provide feedback to patients.",
    role: "Frontend Developer - Built the entire frontend application. Responsible for UI/UX design, interactive questionnaire flow, form handling, and result display.",
    technologies: ["React.js"],
    solution: "Developed a Single Page Application (SPA) using React.js that delivers an interactive resilience assessment questionnaire. The app guides users through questions, calculates resilience scores, and displays results in an easy-to-understand format.",
    result: "Delivered a functional assessment tool that successfully supported the thesis research. The application provided patients an intuitive way to take the resilience test, with clear result presentation.",
    impact: "Enabled the friend to complete her bachelor thesis research project with a working digital assessment tool. Gained experience building healthcare/medical applications. Demonstrated ability to translate requirements into functional frontend solutions.",
    icon: "bi-activity",
  },
  {
    id: "3",
    slug: "simi-studio",
    title: "Simi Studio",
    type: "Web (Fullstack)",
    link: "https://simistudio.vercel.app",
    overview: "Simi Studio is a freelance group offering digital solutions and web development services. Built a company profile website to showcase our services, team capabilities, and enable potential clients to contact us for project inquiries.",
    problem: "The freelance group needed an online presence to market our digital services. Required a professional website that could showcase our capabilities, portfolio, and provide a way for potential clients to reach out with project inquiries.",
    role: "Frontend and Fullstack Web Developer - Handled the complete website development including frontend UI/UX, backend infrastructure, and deployment. Responsible for bringing the company's vision to life.",
    technologies: ["React.js"],
    solution: "Developed a professional company profile website using React.js that showcases Simi Studio's services, team expertise, and previous project work. Implemented contact forms and inquiry system to facilitate client communication.",
    result: "Launched a functional company website that effectively presents Simi Studio's services. Clients can easily view our offerings, understand our capabilities, and submit inquiries through the website.",
    impact: "Established online presence for the freelance group. Provides a central hub for marketing services and attracting new clients. Streamlines client communication and project inquiry process.",
    icon: "bi-window-stack",
  },
  {
    id: "4",
    slug: "surevkos",
    title: "Surevkos",
    type: "Web (Frontend)",
    link: "https://surevkos.vercel.app",
    overview: "A college course project for a design and web development assignment. Built a property rental application inspired by similar platforms like Mamikos, focusing on frontend development and user interface design.",
    problem: "Course assignment to create a property rental/listing application. The task was to design and build a frontend application that could showcase properties and provide good user experience, similar to existing rental platforms.",
    role: "Frontend Developer - Focused on UI/UX design and implementation. Built the entire frontend interface with emphasis on visual design and user interaction flow.",
    technologies: ["React.js"],
    solution: "Developed a property rental application frontend with focus on clean, intuitive UI design. Implemented property listing display, search and filter functionality, and attractive visual presentation of property information.",
    result: "Completed course assignment successfully with emphasis on UI/UX design quality. Demonstrated frontend skills and design sensibility through a functional property rental interface.",
    impact: "Learning experience in frontend development and UI/UX design principles. Practiced translating design concepts into functional React components. Foundation for understanding user-centric design in web applications.",
    icon: "bi-house-check",
  },
  {
    id: "5",
    slug: "argocd-kubernetes-assignment",
    title: "ArgoCD & Kubernetes Deployment",
    type: "DevOps",
    link: "http://nofath-argocd-assignment-dev.zqlab.id/",
    overview: "A bootcamp assignment demonstrating cloud-native DevOps practices. Focused on understanding and implementing the integration between Helm, Kubernetes, and ArgoCD for automated application deployment and management.",
    problem: "Bootcamp assignment to learn and demonstrate how Helm, Kubernetes, and ArgoCD work together in a GitOps workflow. Required hands-on implementation of these tools and understanding their interoperability.",
    role: "DevOps Engineer - Responsible for setting up Helm charts, configuring Kubernetes clusters, and implementing ArgoCD for automated deployments based on Git repository changes.",
    technologies: ["Kubernetes", "Helm", "ArgoCD", "GitOps"],
    solution: "Implemented a GitOps pipeline using ArgoCD to monitor Helm repository changes and automatically deploy/update applications on Kubernetes. Created Helm charts for templating and managing application configurations. Configured ArgoCD to sync and manage deployments declaratively.",
    result: "Successfully deployed application using Helm, Kubernetes, and ArgoCD integration. Demonstrated working knowledge of cloud-native deployment practices and GitOps principles. Application runs on Kubernetes cluster with automated ArgoCD synchronization.",
    impact: "Gained practical experience with modern DevOps tools and cloud-native deployment patterns. Understanding of GitOps workflow and infrastructure-as-code principles. Foundation for managing containerized applications at scale.",
    icon: "bi-cloud-fill",
  },
];
