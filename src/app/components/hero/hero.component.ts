import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{


  isMenuOpened: boolean = false;

  toggelMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#',
      backSpeed: 60,
    })

    writer
  .strings(
    500,
    "Geraldine Meneses.",
    "Web Developer.",
    "Quality Assurance (QA)."
  )
  .start()
}
}
