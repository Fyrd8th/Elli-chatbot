import { Component } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html'
})
export class AppComponent {
	version:string ="v0.0.1 5/23/2018"
  
	constructor(private router: Router) {
    }
	
	conversation(){
      this.router.navigate(['conversation/base']);
    }
}
