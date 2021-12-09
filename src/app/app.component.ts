import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'score-card';
  showLink: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        if (this.currentRoute === '/') {
          this.showLink = true;
        }
      });
  }
  
  navigate() {
    this.showLink = false;
    this.router.navigate(['/score-card']);
  }
}
