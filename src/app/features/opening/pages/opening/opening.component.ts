import { Component } from '@angular/core';
import { Information } from 'src/app/shared/models/information.model';
import { InformationsService } from 'src/app/shared/services/informations.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OpeningComponent {

  constructor(private informationService: InformationsService) { }

  information: Array<Information> = this.informationService.getProducts()

}
