import { Component } from '@angular/core';
import { IonHeader, IonToolbar,IonCard, IonTitle,IonLabel, IonContent,IonList,IonItem,IonInput,IonButton,IonAlert, IonTextarea, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader,IonCardHeader,IonCardTitle,IonCardContent, IonToolbar,IonCard, IonTitle,IonLabel,IonTextarea, IonContent, ExploreContainerComponent,IonList,IonItem,IonInput,IonButton,IonAlert],
})
export class Tab3Page {
  alertButtons = ['Confirm', 'Cancel'];
  constructor() {}
}
