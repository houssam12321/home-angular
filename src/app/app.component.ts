import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" width="150rem" src="/assets/Design sans titre (2).png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  
`,
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'home-angular';
}
imports: [
  CommonModule,
  HomeComponent,
]
