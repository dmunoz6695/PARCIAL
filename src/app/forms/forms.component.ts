import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  constructor(private fb: FormBuilder) {}

  public formularioprincipal = this.fb.group({

    name: ['',[Validators.required,Validators.minLength(3)]],
    status: [false],

    security: this.fb.group({

      roles: [false],
      usuarios: [false],
      tablero_de_control: [false]

    }),
    portfolio: this.fb.group({

      adicionar_productos: [false],
      lista_de_productos: [false],
      tablero_de_control: [false],
      publicacion_de_productos: [false],
      migrar_desde_identificacion: [false],
      cargue_masivo_fotos: [false]

    }),
    reports: this.fb.group({

      consultar_productos_compradores: [false],
      consulta_de_saldos: [false]


    }),
    negotiation: this.fb.group({

      crear_negociacion: [false],
      consulte_sus_negociaciones: [false],
      tablero_de_control: [false]

    })


    
  })
  

  ngOnInit(): void {



  }

  get name() { return this.formularioprincipal.get('name'); }


  AccionEnviarFormulario(): void {

    console.log('envio ->' + JSON.stringify(this.formularioprincipal.value))

  }

  limpiar() {
    this.formularioprincipal.reset();
  }

}
