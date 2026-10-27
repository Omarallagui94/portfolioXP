import InsightImage from 'assets/Insight.png';
import LabNectarImage from 'assets/LabNectar.png';
import MasterOfSfaxImage from 'assets/MasterOfSfax.png';
import RecruteMeImage from 'assets/RecruteMe.PNG';
import RentyImage from 'assets/Renty.png';

const projects = [
  {
    title: 'Teck-Vision - AWS Cloud Infrastructure & CTF Platform',
    description:
      'Flagship cloud engineering project: AWS challenge environments, EC2 lifecycle automation, an event-driven OVA-to-AMI workflow, and CodePipeline deployment to Elastic Beanstalk.',
    tags: ['AWS', 'EC2', 'LAMBDA', 'DYNAMODB', 'CODEPIPELINE', 'ECR'],
    link: 'https://github.com/fatma-amri/teck-vision',
    categories: ['Cloud Engineering', 'DevOps'],
    featured: true,
    visual: 'AWS CLOUD / CTF',
    accent: ['#ff9900', '#232f3e'],
  },
  {
    title: 'Vunscan - AI-Assisted IaC Security Analysis',
    description:
      'DevSecOps workflow that analyzes Terraform configuration, explains security findings with Gemini, recommends remediation, and validates changes using Checkov.',
    tags: ['PYTHON', 'STREAMLIT', 'CHECKOV', 'GEMINI API', 'TERRAFORM ANALYSIS'],
    link: 'https://github.com/Omarallagui94/vunscan',
    categories: ['DevSecOps', 'Cybersecurity'],
    featured: true,
    visual: 'DEVSECOPS / IAC',
    accent: ['#00b894', '#102a43'],
  },
  {
    title: 'RecruteMe',
    description:
      'A modern job recruitment platform connecting job seekers with their dream opportunities. Features include job listings, application tracking, and employer dashboards.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/RecruteMe',
    image: RecruteMeImage,
  },
  {
    title: 'MasterOfSfax',
    description:
      'University management dashboard for Universite de Sfax. Includes student management, course scheduling, teacher assignments, and academic calendar integration.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/MasterOfsfax',
    image: MasterOfSfaxImage,
    category: 'Dev',
  },
  {
    title: 'Renty',
    description:
      'Car rental platform providing easy and affordable car rental services. Features include car search, booking management, and secure payment processing.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/renty',
    image: RentyImage,
    category: 'Dev',
  },
  {
    title: 'Insight',
    description:
      'A versatile Point of Sales platform tailored to manage sales, inventory, and customer transactions for various types of stores with ease and efficiency.',
    tags: ['REACT', 'MONGODB', 'TAILWIND', 'NODE.JS', 'EXPRESS.JS'],
    image: InsightImage,
    category: 'Dev',
  },
  {
    title: 'Lab Nectar',
    description: 'Coming soon - A new project built with the MERN stack. Stay tuned for updates!',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    image: LabNectarImage,
    category: 'Dev',
  },
];

export default projects;
