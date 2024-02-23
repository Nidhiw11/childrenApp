import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
// import './ion-rating.component.scss';
import { addIcons } from 'ionicons';
import { star, starOutline,arrowBack } from 'ionicons/icons';
@Component({
selector: 'app-rating',
template: `
<ion-icon
*ngFor="let _ of stars; let i = index"
[name]="getStarIcon(i)"
(click)="rate(i + 1)"
[style.color]="getColor(i)"
></ion-icon>
`,
standalone: true,
imports: [IonicModule, CommonModule],
})
export class IonRatingComponent {
@Input() rating: number = 0;
@Output() ratingChange: EventEmitter<number> = new EventEmitter();
stars: number[] = [1, 2, 3, 4, 5];
constructor() {
addIcons({
star,
starOutline,
arrowBack
});
}
rate(index: number) {
this.rating = index === this.rating ? 0 : index;
this.ratingChange.emit(this.rating);
}
getColor(index: number): string {
if (this.isAboveRating(index)) {
return 'grey';
}
switch (this.rating) {
case 1:
return 'red';
case 2:
return 'orange';
case 3:
return 'yellow';
case 4:
return 'lightblue'; // Updated to a light blue shade
case 5:
return 'limegreen'; // Updated to a lime green shade
default:
return 'grey';
}
}
getStarIcon(index: number): string {
return this.isAboveRating(index) ? 'star-outline' : 'star';
}
isAboveRating(index: number): boolean {
return index >= this.rating;
}
}