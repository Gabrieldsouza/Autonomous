import { Component, OnInit } from '@angular/core';
import {AutonomosService} from './autonomos.service';
import {Autonomo} from './autonomo/autonomo.model';

@Component({
  selector: 'app-autonomos',
  templateUrl: './autonomos.page.html',
  styleUrls: ['./autonomos.page.scss'],
})
export class AutonomosPage implements OnInit {
  autonomos: Autonomo[];
  constructor(private autonomosService: AutonomosService) { }

  ngOnInit() {
    this.autonomosService.autonomos().subscribe(dados => this.autonomos = dados);
  }

}
