import { Component, OnInit } from '@angular/core';
import { IonAlert, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardTitle,
    IonImg,
    IonHeader,
    IonAlert,
    IonTitle,
    IonContent,
    IonButton,
    IonCardContent,
    IonToolbar
    ],
})
export class InfoDisplayComponent  implements OnInit {

  constructor() { }
  alertButtons = ['Confirm', 'Go Back'];
  ngOnInit() {}

}
