import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroform: FormGroup;

  constructor(private builder : FormBuilder){
    this.cadastroform = builder.group({
      nome: [""],
      usuario:[""],
      email:[""],
      senha:[""],
      confirmaSenha:[""],
      aceite:[false]
    });


  }
  cadastrar(){
    console.log(this.cadastroform.value)
   }

}
