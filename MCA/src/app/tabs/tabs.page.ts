import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, IonFabList} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, bodyOutline,starHalfOutline,homeOutline,notificationsOutline, bookmarks, calendarOutline, chevronUpCircle, helpCircle, peopleOutline, readerOutline, statsChart } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonFab,IonFabButton,IonFabList],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  router: any;

  constructor() {
    addIcons({ homeOutline,starHalfOutline,bodyOutline, peopleOutline, calendarOutline,notificationsOutline , readerOutline,chevronUpCircle,helpCircle,statsChart,bookmarks});
  }
  redirectTo(url: string) {
    window.location.href = url;
  }
  
}
