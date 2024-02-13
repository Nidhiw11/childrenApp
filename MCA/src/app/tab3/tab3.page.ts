import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonCardSubtitle } from '@ionic/angular';
import { IonRatingComponent } from '../ion-rating/ion-rating.component';
@Component({
selector: 'app-tab4',
templateUrl: './tab3.page.html',
styleUrls: ['./tab3.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, IonRatingComponent],
})
export class Tab3Page implements OnInit {
constructor() {}
yourRatingProperty: number = 5;
// Dummy faculties data
faculties = [
{
name:'Pooja Raundale',
photo:
'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg',
subject: 'Physics',
field1Rating: 4,
field2Rating: 5,
field3Rating: 3,
},
{
name:'Aarti Karande',
photo:
'https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png',
subject: 'IoT',
field1Rating: 4,
field2Rating: 5,
field3Rating: 3,
},
{
name:'Dhananjay Kalbande',
photo:
'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg',
subject: 'Mathematics',
field1Rating: 3,
field2Rating: 4,
field3Rating: 5,
},
{
name: 'Prof. Harshil Kanakia',
photo: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png',
subject: 'Web Dev',
field1Rating: 4,
field2Rating: 5,
field3Rating: 3,
},
{
name: 'Prof. Nikhita Mangaonkar',
photo: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg',
subject: 'Mobile Programming',
field1Rating: 4,
field2Rating: 5,
field3Rating: 3,
},
// Add more faculty data as needed
];
ngOnInit() {}
}