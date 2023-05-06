import { Component } from '@angular/core';
import { Information } from 'src/app/shared/models/information.model';
import { User } from 'src/app/shared/models/user.model';
import { InformationsService } from 'src/app/shared/services/informations.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent {

  constructor(private informationService: InformationsService) { }

  information: Array<Information> = this.informationService.getProducts()

}
