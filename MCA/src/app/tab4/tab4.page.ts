import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventService } from '../event.service';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonRouterLink } from
'@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,IonRouterLink],
  providers:[EventService]

})
export class Tab4Page implements OnInit {
  event:any[]=[];
  constructor(private eventService:EventService, private router:Router) {{
  }
 }

  ngOnInit() {
    this.event = this.eventService.getEvent();
  }

}
