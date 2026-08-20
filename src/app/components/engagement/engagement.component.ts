import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engagement.component.html',
  styleUrls: ['../experience/experience.component.css']
})
export class EngagementComponent {
 associativeExperiences = [
    {
      title: 'Président | Optima Junior Entreprise',
      date: 'Août 2024 - Juillet 2025',
      location: 'Tunis, Tunisie',
      description: `Pilotage de la stratégie, des finances et des activités de l'association.
Contribution à la croissance du chiffre d'affaires et du nombre de projets, avec un haut niveau de maîtrise et de conformité.`,
      Extra: 'Distinctions: 3 labels nationaux et 1 Prix d’Excellence'
    },
    {
      title: 'Responsable Marketing | Optima Junior Entreprise',
      date: 'Août 2023 - Juillet 2024',
      location: 'Tunis, Tunisie',
      description: `Pilotage des stratégies marketing, des campagnes et de l'analyse des résultats.
Supervision du maquettage UI/UX, des supports visuels, du branding et de l'identité digitale.`,
      Extra: 'Distinction: Label Marketing'
    },
    {
      title: 'Volontaire - Programme ODD 17 | AIESEC',
      date: '2024',
      location: 'Eskişehir, Turquie',
      description: `Participation à un programme autour des Objectifs de Développement Durable, avec un focus sur l'ODD 17 et la coopération internationale.`
    },
    {
      title: 'Membre du comité d’organisation (OC) | Tunisian Digital Summit, Big Tech, IP’Days',
      date: '2023 - 2024',
      location: 'Tunis, Tunisie',
      description: `Contribution à l'organisation d'événements technologiques, coordination opérationnelle et accompagnement des participants.`
    }
  ];
}
