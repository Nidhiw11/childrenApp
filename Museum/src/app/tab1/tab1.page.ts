import { Component } from '@angular/core';
import {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonToast,
IonButton,
IonCard,
IonImg,
IonGrid,
IonSearchbar,
IonRow,
IonCardContent,
IonCardHeader,
IonCardTitle,
IonCol,
IonIcon,
IonList,
IonItem,
IonLabel,
IonNote,
IonText,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from
'../explore-container/explore-container.component';
import { homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
@Component({
selector: 'app-tab1',
templateUrl: 'tab1.page.html',
styleUrls: ['tab1.page.scss'],
standalone: true,
imports: [
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonSearchbar,
ExploreContainerComponent,
IonToast,
IonButton,
IonCard,
IonImg,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonGrid,
IonRow,
IonCol,
IonIcon,
IonList,
IonItem,
IonLabel,
IonNote,
IonText,
],
})
export class Tab1Page {
isToastOpen = true;
setOpen(isOpen: boolean) {
this.isToastOpen = isOpen;
}
constructor(private router: Router) {
addIcons({ homeOutline });
}
navigateToInfoDisplay() {
    this.router.navigateByUrl('/info');
  }
}