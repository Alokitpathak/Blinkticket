import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { BlinkticketComponent } from '../blinkticket/blinkticket.component';
import { ExploreSectionComponent } from '../explore-section/explore-section.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,ExploreSectionComponent,BlinkticketComponent,HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cavius-assignment';
}
