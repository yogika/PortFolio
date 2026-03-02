export interface PortfolioData {
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  work: WorkItem[];
  skills: SkillCategory[];
  languages: LanguageItem[];
  hobbies: HobbyItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string;
  tools: string;
  category: string;
  color: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface WorkItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  items: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: string;
  level: number;
}

export interface HobbyItem {
  id: string;
  text: string;
  icon: string;
  color: string;
}

export const portfolioData: PortfolioData = {
  education: [
    {
      id: 'edu1',
      degree: 'Master of Science',
      institution: 'University of Europe for Applied Sciences',
      location: 'Germany',
      period: '2024-Present',
      gpa: '86.50',
      coursework: 'Data Science, Data Engineering, Data Analysis, Machine Learning, Data Visualization, Marketing Analysis'
    },
    {
      id: 'edu2',
      degree: 'Bachelor of Computer Application',
      institution: 'Teerthanker Mahaveer University',
      location: 'Moradabad',
      period: '2020-2023',
      gpa: '75.83',
      coursework: 'Mobile Application and Web Technology'
    }
  ],

  projects: [
    {
      id: 'proj1',
      title: 'Autism Prediction Using Machine Learning',
      year: '2025',
      description: 'Built ML models (Logistic Regression, Random Forest, Decision Tree) to predict autism based on input features',
      tools: 'Python, Scikit-learn, Pandas, Jupyter; Academic project with Dema',
      category: 'Machine Learning',
      color: 'bg-purple-200'
    },
    {
      id: 'proj2',
      title: 'Scalable Web Application on AWS',
      year: '2025',
      description: 'Deployed a full-stack admissions system using AWS EC2, RDS, VPC, Auto Scaling, and ALB. Designed secure, scalable architecture with IAM, Secrets Manager, and load testing tools',
      tools: 'AWS EC2, RDS, VPC, Auto Scaling, ALB, IAM, Secrets Manager',
      category: 'Cloud Computing',
      color: 'bg-teal-200'
    },
    {
      id: 'proj3',
      title: 'World Happiness Report: Data Visualization (2020-2024)',
      year: '2025',
      description: 'Analyzed happiness metrics from Kaggle; created dashboards using Plotly and Streamlit. Applied regression and clustering to evaluate global trends and feature impact',
      tools: 'Python, Plotly, Streamlit, Pandas',
      category: 'Data Visualization',
      color: 'bg-yellow-200'
    },
    {
      id: 'proj4',
      title: 'Gold Export Performance: Ghana vs Nigeria',
      year: '2024',
      description: 'Compared gold exports (2017-2023) using UN Comtrade data and built Prophet forecasts. Supervised by Prof. Talha Ali Khan',
      tools: 'Python, Seaborn, UN Comtrade API, Prophet',
      category: 'Data Analysis',
      color: 'bg-orange-200'
    }
  ],

  certifications: [
    {
      id: 'cert1',
      title: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'July 2025',
      description: 'Credly verified certification'
    },
    {
      id: 'cert2',
      title: 'Practical Machine Learning for AI: Foundational Skills and Experiments',
      issuer: 'Cardiff University',
      date: 'July 2025',
      description: 'Foundational machine learning skills and experiments'
    },
    {
      id: 'cert3',
      title: 'Getting Started with Generative AI',
      issuer: 'Pragmatic AI Labs',
      date: 'July 2025',
      description: 'Taught by Alfredo Deza'
    },
    {
      id: 'cert4',
      title: 'Machine Learning for Image Data',
      issuer: 'University of Nottingham & University of Lincoln',
      date: 'July 2025',
      description: 'Machine learning techniques for image data'
    },
    {
      id: 'cert5',
      title: 'Introduction to Data Analytics with Python',
      issuer: 'FutureLearn',
      date: 'July 2025',
      description: 'Pandas, Seaborn, practical projects'
    },
    {
      id: 'cert6',
      title: 'Introduction to Data Engineering with Microsoft Azure 1',
      issuer: 'FutureLearn',
      date: 'July 2025',
      description: 'Azure data engineering fundamentals'
    },
    {
      id: 'cert7',
      title: 'Academic Research Methodology for Master\'s Students',
      issuer: 'Coventry University',
      date: 'July 2025',
      description: 'Research methodology for academic studies'
    },
    {
      id: 'cert8',
      title: '100 Days of Code: The Complete Python Pro Bootcamp',
      issuer: 'Udemy',
      date: 'July 2023',
      description: 'Comprehensive Python course covering automation, web development, data science, and more'
    }
  ],

  work: [
    {
      id: 'work1',
      title: 'Web Developer Intern',
      company: 'READYCODER',
      location: 'India (Remote)',
      period: 'July 2022 - Summer 2022',
      description: [
        'Worked remotely as a Web Developer Intern under the guidance of the core development team',
        'Gained hands-on experience with front-end web technologies and development workflows',
        'Collaborated on real-world tasks, enhancing problem-solving and technical communication skills',
        'Mode: Remote (Work From Home)'
      ]
    }
  ],

  skills: [
    {
      id: 'skill1',
      category: 'Programming Languages',
      items: 'Python, SQL, R, HTML, CSS, JavaScript'
    },
    {
      id: 'skill2',
      category: 'Data Science & ML',
      items: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Facebook Prophet, TensorFlow (basic)'
    },
    {
      id: 'skill3',
      category: 'Data Visualization',
      items: 'Plotly, Dash, Streamlit, Tableau, Power BI'
    },
    {
      id: 'skill4',
      category: 'Data Engineering',
      items: 'Data Warehousing, Data Modeling, Data Pipeline'
    },
    {
      id: 'skill5',
      category: 'Cloud Computing',
      items: 'AWS RDS, AWS EC2, VPC, Auto Scaling, S3, Secrets Manager, Azure (basics)'
    },
    {
      id: 'skill6',
      category: 'Databases',
      items: 'MySQL, PostgreSQL, SQLite'
    },
    {
      id: 'skill7',
      category: 'Tools & Platforms',
      items: 'Jupyter Notebook, Git, GitHub, VS Code, Google Colab, Apache Airflow'
    },
    {
      id: 'skill8',
      category: 'Soft Skills',
      items: 'Problem-solving, Critical Thinking, Team Collaboration, Research Writing'
    }
  ],

  languages: [
    {
      id: 'lang1',
      language: 'English',
      proficiency: 'Full Professional Proficiency',
      level: 95
    },
    {
      id: 'lang2',
      language: 'Hindi',
      proficiency: 'Native / Bilingual Proficiency',
      level: 100
    },
    {
      id: 'lang3',
      language: 'German',
      proficiency: 'Beginner / A1 Level',
      level: 30
    }
  ],

  hobbies: [
    {
      id: 'hobby1',
      text: 'Reading Hindi novels and watching tech blogs',
      icon: 'Book',
      color: 'bg-purple-200'
    },
    {
      id: 'hobby2',
      text: 'Playing Badminton and solving puzzles',
      icon: 'Gamepad2',
      color: 'bg-teal-200'
    },
    {
      id: 'hobby3',
      text: 'Hiking and outdoor activities',
      icon: 'Plane',
      color: 'bg-yellow-200'
    },
    {
      id: 'hobby4',
      text: 'Coding personal projects in Python',
      icon: 'Code',
      color: 'bg-green-200'
    },
    {
      id: 'hobby5',
      text: 'Dancing',
      icon: 'Music',
      color: 'bg-pink-200'
    },
    {
      id: 'hobby6',
      text: 'Listening to music',
      icon: 'Music',
      color: 'bg-blue-200'
    },
    {
      id: 'hobby7',
      text: 'Watching movies',
      icon: 'Camera',
      color: 'bg-orange-200'
    },
    {
      id: 'hobby8',
      text: 'Doing random things never done before',
      icon: 'Brain',
      color: 'bg-red-200'
    },
    {
      id: 'hobby9',
      text: 'Coffee lover',
      icon: 'Coffee',
      color: 'bg-amber-200'
    },
    {
      id: 'hobby10',
      text: 'Drawing',
      icon: 'Brain',
      color: 'bg-indigo-200'
    },
    {
      id: 'hobby11',
      text: 'Traveling',
      icon: 'Plane',
      color: 'bg-cyan-200'
    }
  ]
};