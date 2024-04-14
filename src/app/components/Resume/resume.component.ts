import { Component } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
  })


export class BoxResume {
    resumoExpandido: boolean = true;
  
    toggleResumo() {
      this.resumoExpandido = !this.resumoExpandido;
    }
  }
  