import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonToast, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonText, IonNote, IonLabel, IonItem, IonList, IonIcon, IonCol, IonRow, IonGrid, IonAccordionGroup, IonThumbnail, IonAccordion, IonCardSubtitle, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports:[
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardSubtitle,
    IonSelectOption,
    IonSelect,
    IonSearchbar,
    ExploreContainerComponent,
    IonToast,
    IonButton,
    IonCard,
    IonImg,
    IonCardHeader,
    IonAccordion,
    IonAccordionGroup,
    IonThumbnail,
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
  constructor() {}
}
