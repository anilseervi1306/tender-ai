import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface TenderCategory {
  name: string;
  icon: string;
  expanded: boolean;
  tenders: any[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidebarComponent {
  categories: TenderCategory[] = [
    {
      name: 'Recent Tenders',
      icon: 'access_time',
      expanded: true,
      tenders: [
        { title: 'Construction Tender', description: 'New infrastructure project' },
        { title: 'IT Services', description: 'Software development services' }
      ]
    },
    {
      name: 'Upcoming',
      icon: 'event',
      expanded: false,
      tenders: []
    }
  ];

  toggleCategory(category: TenderCategory) {
    category.expanded = !category.expanded;
  }
}