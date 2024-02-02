import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardSubtitle, IonCard } from
'@ionic/angular/standalone';
import { ExploreContainerComponent } from
'../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
// import { IonCard } from '@ionic/angular';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss'],
standalone: true,
imports: [ExploreContainerComponent, IonicModule]
})
export class Tab2Page {
    constructor(private router: Router) {}
  
    navigateToDetailsPage() {
      this.router.navigateByUrl('/exhibit');
    }
  }