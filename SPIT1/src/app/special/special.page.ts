import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-special',
  templateUrl: './special.page.html',
  styleUrls: ['./special.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SpecialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
