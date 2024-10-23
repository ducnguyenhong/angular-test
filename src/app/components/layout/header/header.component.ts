import { Component } from '@angular/core';
import { ButtonComponent } from '@app/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, ButtonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
