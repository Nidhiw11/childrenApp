import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss'],
})
export class DynamicContentComponent implements OnInit {
  dynamicContent: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.dynamicContent = 
      this.getContentById(id);
    })
  }
  getContentById(id: string): string {
    switch (id) {
      case 'page1':
        return 'This is the content for Page 1.';
      case 'page2':
        return 'This is the content for Page 2.';
      // Add more cases for additional pages if needed
      default:
        return 'Page not found';
    }
  }

}
