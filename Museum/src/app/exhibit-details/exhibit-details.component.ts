import { Component, OnInit } from '@angular/core';

import { IonCard, IonCardContent, IonButton,IonHeader, IonImg,IonCardTitle, IonToolbar, IonTitle, IonContent, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.scss'],
  standalone: true,
  imports: [
IonCard,
IonCardTitle,
IonImg,
IonHeader,
IonTitle,
IonContent,
IonButton,
IonAlert,
IonCardContent,
IonToolbar
],
})
export class ExhibitDetailsComponent  implements OnInit {
  constructor() { }
  alertButtons = ['Confirm', 'Go Back'];
  ngOnInit() {}

}
