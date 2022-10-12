import { ResponseModel } from './../../core/models/Response.model';
import { GraphicsService } from './../../core/services/graphics.service';
import { Component, OnInit } from '@angular/core';
import GraficoSemanaOptions from './graficoSemana';
import GraficoLinha from './graficoLinha';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public GraficoSemana = GraficoSemanaOptions;
  public GraficoDeLinha = GraficoLinha;
  public isLoading: boolean = true;

  constructor(private _graphicService: GraphicsService) {}

  async ngOnInit(): Promise<void> {
    await this._graphicService
      .getDadosGraficos()
      .subscribe((res: ResponseModel<any>) => {

        let dataGraficoSemana = res.data.GraficoSemana;
        this.GraficoSemana.series = [
          {
            name: 'lucro',
            data: dataGraficoSemana,
          },
        ];

        let dataGraficoLinha = res.data.MaisVendidoSemana;
        this.GraficoDeLinha.series = [{
          name: dataGraficoLinha.name,
          data: dataGraficoLinha.data
        }]

        this.isLoading = false;
      });
  }
}
