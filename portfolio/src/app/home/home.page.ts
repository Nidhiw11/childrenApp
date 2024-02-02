import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle,IonAvatar ,IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonGrid,IonRow, IonCol,IonIcon,IonProgressBar,IonList,IonLabel,IonItem,IonThumbnail,IonChip,IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import { logoLinkedin, logoGithub, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle,IonAvatar, IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonGrid,IonRow, IonCol,IonIcon,IonProgressBar,IonList,IonLabel,IonItem,IonThumbnail,IonChip,IonImg],
})
export class HomePage {
  constructor() {
    addIcons({ logoLinkedin, logoGithub, mailOutline });
  }
}