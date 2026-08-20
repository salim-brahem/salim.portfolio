import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 professionalExperiences = [
    {
      title: 'Stagiaire Ingénieur Full-Stack & IA (PFE) | Talan Consulting Tunisie',
      date: 'Février 2026 - Juin 2026',
      location: 'Tunis, Tunisie',
      description: `Conception d'une plateforme de digitalisation de la gestion de projets forfait et de pilotage intelligent.
Développement de modules IA basés sur les LLM et le RAG pour l'analyse documentaire, l'assistance et l'aide à la décision.
Mise en place d'un pipeline CI/CD et d'un déploiement cloud sur Azure.`,
      Extra: 'Technologies: Spring Boot, Angular, FastAPI, PostgreSQL, Kafka, Jenkins, Azure, Docker, Terraform'
    },
    {
      title: 'Stagiaire Développeur Full-Stack | Société Tunisienne de Banque (STB)',
      date: 'Juin 2025 - Août 2025',
      location: 'Tunis, Tunisie',
      description: `Conception et développement d'une plateforme interne de gestion des incidents financiers.
Automatisation complète du traitement des incidents internes et amélioration du délai de résolution.`,
      Extra: 'Technologies: Angular, .NET, PostgreSQL'
    },
    {
      title: 'Stagiaire Développeur Full-Stack | Capgemini',
      date: 'Juillet 2023 - Août 2023',
      location: 'El Ghazala, Tunisie',
      description: `Conception et développement d'une application de gestion des compétences pour plus de 100 collaborateurs.
Implémentation d'un système de matching et de suivi de progression des profils.`,
      Extra: 'Technologies: Angular, Spring Boot, MySQL'
    },
    {
      title: 'Stagiaire Développeur Full-Stack | Spofun',
      date: 'Juin 2023 - Juillet 2023',
      location: 'El Ghazala, Tunisie',
      description: `Développement de nouveaux modules full-stack sur la plateforme interne de Spofun.`,
      Extra: 'Technologies: Angular, Spring Boot'
    },
  ];
}
