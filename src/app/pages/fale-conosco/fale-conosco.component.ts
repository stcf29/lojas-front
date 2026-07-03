import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LojaService } from '../../services/loja.service';

@Component({
  selector: 'app-fale-conosco',
  standalone: true,
   imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
],
  templateUrl: './fale-conosco.component.html',
  styleUrl: './fale-conosco.component.css'
})
export class FaleConoscoComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private service: LojaService) {

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  public enviar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.service.enviarFC(this.formulario.value).subscribe({
        next: () => {
          alert('Mensagem enviada com sucesso!');
          this.formulario.reset();
        },
        error: (erro) => {
          console.error(erro);
          alert('Erro ao enviar a mensagem.');
        }
      });

    }


  }

  public somenteNumeros(event: KeyboardEvent): void {
    const charCode = event.which
      ? event.which
      : event.keyCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
