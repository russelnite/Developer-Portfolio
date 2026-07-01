export interface ExperienceItem {
  title: string;
  company: string;
  department: string;
  supervisor: {
    name: string;
    linkedIn?: string;
  };
  duration: string;
  hours: string;
  summary: string;
  techStack: {
    category: string;
    items: string[];
  }[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Back-End Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    department: "Backend Department",
    supervisor: {
      name: "Laurence M. Cayabyab",
      linkedIn: "https://www.linkedin.com/in/laurence-cayabyab/",
    },
    duration: "May 2024 – Jul 2024",
    hours: "353 hrs",
    summary:
      "Built and maintained backend services using PHP with ThingEngineer ORM and RESTful API architecture. Implemented CRUD functionality, OOP patterns, and unit testing with PHPUnit and Codeception. Contributed to the JUAN HR Module (unit testing and UAT), Purchasing Management system, and onboarded new interns through QA of exercise tasks. Explored Django (Python) and Laravel frameworks for cross-framework proficiency.",
    techStack: [
      {
        category: "Languages",
        items: ["PHP", "Python", "SQL"],
      },
      {
        category: "Frameworks",
        items: ["ThingEngineer", "Laravel", "Django"],
      },
      {
        category: "Testing",
        items: ["PHPUnit", "Codeception", "FailCest"],
      },
      {
        category: "Tools",
        items: ["XAMPP", "Insomnia", "Composer", "Git", "MySQL"],
      },
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    department: "Frontend Department",
    supervisor: {
      name: "Laurence M. Cayabyab",
      linkedIn: "https://www.linkedin.com/in/laurence-cayabyab/",
    },
    duration: "Mar 2024 – May 2024",
    hours: "362 hrs",
    summary:
      "Completed onboarding exercises aligned to real-world scenarios, building practical applications with Vue.js, Quasar Framework, and Axios before transitioning to actual project work. Contributed to developing web applications for the LGU of Bicol, including the Local Civil Registry Office System (Service Management & Document Application) and the Purchasing Management System. Also worked on legacy systems — testing, updating, and implementing new features for existing projects. Performed end-to-end QA testing with Cypress and collaborated with team members via GitLab. Selected as one of fifteen interns out of 130+ to undergo leadership training, serving as Team Leader responsible for task delegation, new member orientations, and environment troubleshooting.",
    techStack: [
      {
        category: "Frameworks",
        items: ["Vue.js", "Quasar Framework"],
      },
      {
        category: "Libraries",
        items: ["Axios", "Cypress", "JSON Server"],
      },
      {
        category: "Tools",
        items: ["Git", "GitLab", "VS Code"],
      },
    ],
  },
  {
    title: "Back-End Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    department: "Backend Department",
    supervisor: {
      name: "Camilo Bongbonga Jr.",
      linkedIn: "https://www.linkedin.com/in/camilo-bongbonga-jr/",
    },
    duration: "Aug 2023 – Oct 2023",
    hours: "356 hrs",
    summary:
      "Completed foundational backend training covering PHP, MySQL, and RESTful API development. Built CRUD systems from scratch, progressed to OOP with ThingEngineer integration, and developed microservice APIs for reporting analytics including queue performance reports and customer satisfaction metrics. Contributed to the Retail Inventory Management System and handled backend documentation for multiple modules.",
    techStack: [
      {
        category: "Languages",
        items: ["PHP", "SQL"],
      },
      {
        category: "Frameworks",
        items: ["ThingEngineer"],
      },
      {
        category: "Testing",
        items: ["PHPUnit", "Unit Testing"],
      },
      {
        category: "Tools",
        items: ["XAMPP", "Insomnia", "Composer", "Git", "MySQL", "VS Code"],
      },
    ],
  },
];
