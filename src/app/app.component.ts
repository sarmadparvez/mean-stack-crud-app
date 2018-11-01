import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  /**
  * Called when a route is activated
  */
  onActivate (evt)
  {
    console.log('route is activated ', evt);
  }

  /**
  * Called when route is deactivated
  */
  onDeactivate (evt)
  {
    console.log('route is deactivated ', evt);
  }

}
