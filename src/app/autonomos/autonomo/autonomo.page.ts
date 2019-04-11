import {Component, Input, OnInit} from '@angular/core';
import {Autonomo} from './autonomo.model';
@Component({
  selector: 'app-autonomo',
  templateUrl: './autonomo.page.html',
  styleUrls: ['./autonomo.page.scss'],
})
export class AutonomoPage implements OnInit {

  @Input() autonomo: Autonomo;
  constructor() { }

  ngOnInit() {
  }

}
