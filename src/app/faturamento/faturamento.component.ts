import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {
  
  faturamento;
  inscricaoFaturamento;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.inscricaoFaturamento = this.faturamentoService.getFaturamento()
      .subscribe(dados => this.faturamento = dados);
  }

  ngOnDestroy() {
    this.inscricaoFaturamento.unsubscribe();
  }

}
