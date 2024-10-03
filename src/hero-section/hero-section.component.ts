import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent{
  currentIndex = 0;
  images = [
    {
      src: 'assets/event2.jpg',
      title: 'DILLUMINATI TOUR',
      description: 'FROM 6 OCT Starting@199'
    },
    {
      src: 'assets/event3.jpg',
      title: 'DELHI-TRAIL',
      description: 'FROM 5 NOV Starting@299'
    },
    {
      src: 'assets/event4.jpg',
      title: 'DIL-SE-MUMBAI',
      description: 'FROM 10 DEC , Register early to get exciting price.'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  
}
