
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
