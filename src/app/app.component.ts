import { Component } from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";
import {TransferenciaService} from "./services/transferencia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {
  }

}
