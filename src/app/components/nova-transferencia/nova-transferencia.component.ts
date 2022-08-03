import { Component, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/service/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(
      (transferencia: Transferencia) => {
        this.router.navigateByUrl('extrato');
      },
      (error: Error)=>{
        console.log(error)
      });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}