import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Universidad } from '../../domain/universidad';
import { UniversidadService } from '../../services/universidad.service';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrl: './page8.component.scss'
})
export class Page8Component {
  listadoUniversidad: Universidad[] = [];
  listadoUniversidadFire: any;

  constructor(private universidadService: UniversidadService, private router: Router) {

    this.listadoUniversidad=universidadService.getList()
    this.listadoUniversidadFire=universidadService.getAll()
  }

  editar(universidad: Universidad){
    let params: NavigationExtras = {
      queryParams: {
        universidad: universidad,
        nombre: 'morocho'
      }
    };
    this.router.navigate(['page/page7'], params);
  }

    eliminar(event: Event,universidad:Universidad){
      this.universidadService.delete(universidad.uid)
    }
  
  nuevo() {
    this.router.navigate(['page/page7']);
  }
}
