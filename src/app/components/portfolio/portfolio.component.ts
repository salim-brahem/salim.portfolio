import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type Category = 'Projets' | 'UI/UX Design & Branding' | 'Cloud & DevOps';

interface Project {
  name: string;
  image: string;         // image principale
  file?: string;         // chemin d'un PDF (optionnel)
  description?: string;  // description du projet
  stack?: string[];      // technologies utilisées
  portfolio?: string[];  // galerie d'images
  tags?: string[];       // liste de tags (ex: Angular, Node.js, Cloud, UI/UX)
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'] // corrigé (styleUrls)
})
export class PortfolioComponent {
  categories: Category[] = ['Projets', 'Cloud & DevOps', 'UI/UX Design & Branding'];
  activeCategory: Category = 'Projets';
  constructor(private sanitizer: DomSanitizer) {}

  projects: Record<Category, Project[]> = {
    'Projets': [
  {
    name: 'SmartPM',
    image: 'assets/photos/SmartPM.webp',
    description: `SmartPM est une plateforme web intelligente dédiée à la digitalisation et au pilotage des projets forfait. Elle centralise le suivi projet, les ressources, les rôles, les tâches, les réunions, les connecteurs Jira et les tableaux de bord afin d'offrir une vision claire de l'avancement et des risques.
    La solution intègre une couche IA avec RAG et LLM pour l'analyse documentaire, l'assistance conversationnelle, l'analyse des réunions et la génération de rapports. Elle embarque aussi un module de Machine Learning pour anticiper les risques projet et aider les équipes à passer d'un pilotage réactif à un pilotage préventif.
    Le projet a été développé chez Talan Consulting Tunisie dans le cadre de mon PFE, avec une architecture Angular, Spring Boot, FastAPI, PostgreSQL et Kafka, puis déployé en production sur Azure avec Docker, Terraform et Jenkins.`,
    stack: ['Angular', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Kafka', 'Docker', 'Terraform', 'Azure', 'Jenkins', 'LLM', 'RAG', 'ML'],
    portfolio: [
      'assets/smartpm/login.png',
      'assets/smartpm/view_all_projects.png',
      'assets/smartpm/profil.png',
      'assets/smartpm/liste_user.png',
      'assets/smartpm/liste_des_roles.png',
      'assets/smartpm/liste_permissions.png',
      'assets/smartpm/liste_connecteurs.png',
      'assets/smartpm/connecteur_jira.png',
      'assets/smartpm/liste des taches.png',
      'assets/smartpm/calendrier.png',
      'assets/smartpm/liste_reunions.png',
      'assets/smartpm/Analyse_réun.png',
      'assets/smartpm/Chatbot.png',
      'assets/smartpm/liste_arbo.png',
      'assets/smartpm/structure_arborescence.png',
      'assets/smartpm/liste_type_de_ressoruce.png',
      'assets/smartpm/type_ressource_create_part1.png',
      'assets/smartpm/creation_trigger_part1.png',
      'assets/smartpm/admin_viz_sessions.png'
    ]
  },
  { 
    name: 'Gestion des incidents',
    image: 'assets/photos/incidents.webp',
       description: `Application de gestion d'incidents pour le département Qualité, intégrant une authentification sécurisée (JWT, OAuth2) avec gestion des sessions et connexion RDS/Active Directory. 
    Elle inclut une administration avancée des utilisateurs et rôles, des habilitations dynamiques, ainsi qu'un module complet de gestion des incidents (déclaration, catégorisation, pièces jointes, workflow automatisé, messagerie interne collaborative, notifications en temps réel). 
    Des tableaux de bord interactifs permettent le suivi des KPI, avec un reporting exportable (PDF, Excel, CSV) et des alertes intelligentes assurant traçabilité, réactivité et efficacité opérationnelle.`,
    stack: ['Angular', 'PrimeNG', '.NET', 'PostgreSQL', 'Figma'],
    portfolio: [
      'assets/incidents/Incidents-1.jpeg',
      'assets/incidents/Incidents-2.jpeg',
      'assets/incidents/Incidents-3.jpeg',
      'assets/incidents/Incidents-4.jpeg',
      'assets/incidents/Incidents-5.jpeg',
      'assets/incidents/Incidents-6.jpeg',
      'assets/incidents/Incidents-7.jpeg',
      'assets/incidents/Incidents-8.jpeg'
    ]
  },
    { 
    name: 'FoodMatch',
    image: 'assets/photos/foodmatch.webp',
        description: `Plateforme web qui centralise la mise en avant des restaurants et facilite l'interaction avec les utilisateurs grâce à un système d'avis et de réservation. 
    Les clients peuvent explorer des restaurants, donner leur avis et réserver en ligne. 
    Les restaurateurs disposent d'un espace professionnel pour gérer leurs fiches, réservations et visibilité, tandis qu'un administrateur supervise la plateforme (modération, qualité, gestion des rôles). 
    L'application intègre un module de notation/avis, une gestion complète des réservations et une interface d'administration sécurisée et évolutive.`,
    stack: ['Angular', 'Spring', 'MySQL', 'Figma'],
    portfolio: [
      'assets/foodmatch/foodmatch-1.png',
      'assets/foodmatch/foodmatch-2.png',
      'assets/foodmatch/foodmatch-3.jpeg',
      'assets/foodmatch/foodmatch-4.png',
      'assets/foodmatch/foodmatch-5.png',
      'assets/foodmatch/foodmatch-6.png',
      'assets/foodmatch/foodmatch-7.png'
    ]
  },
  { 
    name: 'LeadZ',
    image: 'assets/photos/Leadz.webp',
       description: `Solution CRM permettant de centraliser les données clients et prospects pour améliorer la gestion du cycle de vente. 
    L'outil aide les équipes commerciales à suivre efficacement les contacts et opportunités, gérer les documents liés, et visualiser la performance via un tableau de bord en temps réel. 
    L'objectif principal est d'optimiser la productivité et la prise de décision grâce à une gestion simplifiée de la relation client.`,
    stack: ['Angular', 'NestJS', 'MySQL', 'Figma'],

    portfolio: [
      'assets/leadz/Leadz-1.jpg',
      'assets/leadz/Leadz-2.jpg',
      'assets/leadz/Leadz-3.png'
    ]
  },


  { 
    name: 'Portfolio',
    image: 'assets/photos/portfolio-pack.png',
     description: `Portfolio en ligne responsive permettant de présenter mes projets et compétences par catégories, 
    avec une navigation fluide, des visuels interactifs et une mise en avant claire des réalisations.`,
    stack: ['Angular', 'Figma'],
    portfolio: [
      'assets/portfolio/portfolio-1.jpeg',
      'assets/portfolio/portfolio-2.jpeg',
      'assets/portfolio/portfolio-3.jpeg'
    ]
  },
  { 
    name: 'SkillTrack',
    image: 'assets/photos/skilltrack.webp',
      description: `Application développée au sein de Capgemini pour digitaliser le processus de gestion des compétences. 
    Les employés peuvent évaluer leurs compétences via différents modules, et les administrateurs disposent d'un espace dédié pour gérer utilisateurs, progression et données. 
    Le système intègre une authentification sécurisée par token et une gestion complète des profils et droits d'accès, garantissant fiabilité et adaptation aux besoins de l'entreprise.`,
    stack: ['Angular', 'Spring', 'MySQL'],
    portfolio: [
      'assets/skilltrack/skilltrack-4.png',
      'assets/skilltrack/skilltrack-1.png',
      'assets/skilltrack/skilltrack-2.jpg',
      'assets/skilltrack/skilltrack-3.jpg',
    ]
  }
]
,

   
    'UI/UX Design & Branding': [
      { name: 'Brand Guidelines', file: 'assets/docs/pizza.pdf', image: 'assets/photos/pizzaprev.jpg', tags: ['BoldBrands', 'Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Costo Doro', file: 'assets/docs/costo doro.pdf',image: 'assets/photos/costoprev.png', tags: ['BoldBrands', 'Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Hôtel le passage', image: 'assets/photos/charte.png', tags: ['Branding', 'Logo', 'Charte Graphique', 'AI', 'PS'] },
      { name: 'Site Hôtel', image: 'assets/photos/hotel le passage.png', tags: ['UI/UX', 'Figma', 'Prototype'] },
      { name: 'Site Agriculture', image: 'assets/photos/agriculture.png', tags: ['UI/UX', 'Figma', 'Prototype'] },
      { name: 'Tournoi de Padel', image: 'assets/photos/padel.webp', tags: ['Community Management', 'Spofun', 'Design'] },
      { name: 'Sensibilisation Cancer du Sein', image: 'assets/photos/cancer.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Journée des Martyrs', image: 'assets/photos/martyres.jpg', tags: ['Community Management', 'Design'] },
      { name: "Fête de l'Indépendance", image: 'assets/photos/indépendance.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Journée de la Femme', image: 'assets/photos/women.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Ramadan Kareem', image: 'assets/photos/ramadan.png', tags: ['Community Management', 'Design'] },
      { name: 'E-commerce', image: 'assets/photos/ligne.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Marketing Digital', image: 'assets/photos/digital.jpg', tags: ['Community Management', 'Design'] },
      { name: 'Chatbot', image: 'assets/photos/chat.jpg', tags: ['Community Management', 'Design'] },
      { name: "L'IA en Génétique", image: 'assets/photos/power.jpeg', tags: ['Community Management', 'Design'] },
      { name: 'Blockchain', image: 'assets/photos/blockchain.png', tags: ['Community Management', 'Design'] }
    ],
    'Cloud & DevOps': [
      {
        name: 'AWS Project',
        image: 'assets/photos/cloud.png',
        description: "Conception et déploiement d'une architecture cloud sur AWS pour une application web moderne, intégrant une séparation des couches (web, applicative et base de données), avec haute disponibilité via multi-AZ, scalabilité grâce à EC2 Auto Scaling, sécurité renforcée par l'isolation des subnets publics/privés, et optimisation des performances et coûts grâce à Amazon RDS et Amazon S3."
      },
      {
        name: 'Déploiement SmartPM sur Azure',
        image: 'assets/devops/architecture_deployment.png',
        description: "Déploiement en production de SmartPM sur Microsoft Azure avec Azure Container Apps comme socle d'orchestration des services conteneurisés. L'architecture regroupe un gateway Nginx, le frontend Angular, le backend Spring Boot, le service IA FastAPI, le service d'ingestion et Kafka. Elle s'appuie aussi sur Azure Container Registry, PostgreSQL Flexible Server, Blob Storage, un réseau virtuel sécurisé, des secrets natifs Azure, Application Insights et Log Analytics. L'infrastructure est provisionnée avec Terraform et la livraison continue est assurée via Jenkins."
      },
      {
        name: 'FixFlow',
        image: 'assets/devops/figure1.5_fixflow_architecture.png',
        description: "Architecture DevOps intelligente conçue autour d'un workflow Jenkins augmenté par des agents IA spécialisés. Chaque agent analyse un type d'erreur du pipeline, comme la compilation, les tests ou la qualité logicielle SonarQube, puis propose des corrections dans une boucle contrôlée. L'objectif est de réduire le traitement manuel des erreurs CI/CD et d'accélérer le cycle de livraison."
      },
      {
        name: 'Pipeline DevOps Kubernetes',
        image: 'assets/devops/pipline_kub.png',
        description: "Pipeline DevOps de déploiement d'une application web avec Infrastructure as Code, conteneurisation et orchestration Kubernetes. Le flux couvre la préparation du pipeline, le déploiement des workloads, la vérification des pods, le contrôle du cluster et la validation de l'instance applicative.",
        portfolio: [
          'assets/devops/pipline_kub.png',
          'assets/devops/pods.png',
          'assets/devops/cluster.png',
          'assets/devops/instance.png'
        ]
      }
    ]
  };

  activeImageIndex = 0;
  activeProject: Project = this.projects['Projets'][0];
  activeImage = this.activeProject.portfolio?.[0] || ''; // sécurisé
  currentImageIndex = 0;

  setProject(project: Project) {
    this.activeProject = project;
    this.activeImageIndex = 0;
    this.activeImage = project.portfolio?.[0] || ''; // sécurisé
  }

  setCategory(category: Category) {
    this.activeCategory = category;
    this.activeProject = this.projects[category][0];
    this.activeImageIndex = 0;
    this.currentImageIndex = 0;
    this.activeImage = this.activeProject.portfolio?.[0] || ''; // sécurisé
  }

  prevImage() {
    if (this.activeProject?.portfolio?.length) {
      this.activeImageIndex =
        (this.activeImageIndex - 1 + this.activeProject.portfolio.length) %
        this.activeProject.portfolio.length;
      this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
    }
  }

  nextImage() {
    if (this.activeProject?.portfolio?.length) {
      this.activeImageIndex =
        (this.activeImageIndex + 1) % this.activeProject.portfolio.length;
      this.activeImage = this.activeProject.portfolio[this.activeImageIndex];
    }
  }

  getTechIcon(tech: string): string {
    const icons: Record<string, string> = {
      '.net': 'net.png',
      azure: 'Azure-Logo.png',
      fastapi: 'python.png',
      jenkins: 'jenkins-logo.png',
      kafka: 'suite.png',
      llm: 'LLM-logo.png',
      ml: 'ML-logo.png',
      rag: 'RAG-logo.png',
      'spring boot': 'spring.png',
      terraform: 'kubernetes.png'
    };

    return `assets/icons/${icons[tech.toLowerCase()] || `${tech.toLowerCase()}.png`}`;
  }

  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  lightboxImage: string | null = null;
  lightboxPdf: SafeResourceUrl  | null = null;

openLightbox(img: string) {
    this.lightboxImage = img;
    this.lightboxPdf = null;
  }

  openPdfLightbox(pdfPath: string) {
    this.lightboxPdf = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
    this.lightboxImage = null;
  }

  closeLightbox() {
    this.lightboxImage = null;
    this.lightboxPdf = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.lightboxImage || this.lightboxPdf) {
      this.closeLightbox();
    }
  }
}
