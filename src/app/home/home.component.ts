import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
