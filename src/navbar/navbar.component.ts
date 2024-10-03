import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  location: string = '';
  date: string = '';
  eventType: string = '';

  search() {

    console.log('Location:', this.location);
    console.log('Date:', this.date);
    console.log('Event Type:', this.eventType);
    
  }

}
