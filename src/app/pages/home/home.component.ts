
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
