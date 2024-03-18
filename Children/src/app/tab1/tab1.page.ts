import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCol,IonRow,IonGrid,IonCardContent,IonCardSubtitle,IonCardTitle} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard,IonCol,IonRow,IonGrid,IonCardContent,IonCardSubtitle,IonCardTitle],
})
export class Tab1Page {

  constructor(private router: Router) {}
    navigateToPage(pageName:string){
      this.router.navigate(['/dynamic',pageName])
  }
}
