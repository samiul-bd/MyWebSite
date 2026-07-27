import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly isMobileMenuOpen = signal(false);

  protected toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  protected closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
