import { Component, OnInit } from '@angular/core';
import {Autonomo} from '../autonomos/autonomo/autonomo.model';
import {AutonomosService} from '../autonomos/autonomos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-autonomo-detail',
  templateUrl: './autonomo-detail.page.html',
  styleUrls: ['./autonomo-detail.page.scss'],
})
export class AutonomoDetailPage implements OnInit {
  autonomo: Autonomo;

  constructor(private autonomoService: AutonomosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.autonomoService.autonomosById(this.route.snapshot.params['id']).subscribe(dados => this.autonomo = dados);
  }

}
