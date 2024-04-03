import { Component ,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Universidad } from '../../domain/universidad';
import { UniversidadService } from '../../services/universidad.service';



@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss'
})
export class Page7Component {

  universidad: Universidad = new Universidad();

  constructor(private universidadService: UniversidadService,


    private router: Router ) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.universidad = new Universidad()
        this.universidad = params['universidad']
      }
    }
    

  enviar() {
    this.universidadService.save(this.universidad)
    this.universidad = new Universidad()
  }

  actualizar() {
    this.universidadService.update(this.universidad.uid,this.universidad);
    this.router.navigate(["page/page8"])
  }

 // buscarDatos(): void {
    // Reemplaza 'coleccion' con el nombre de tu colección en Firestore
   // this.firestore.collection('universidad').get().subscribe(snapshot => {
    //  snapshot.forEach(doc => {
        // Accede a los datos de cada documento
    //    console.log(doc.id, '=>', doc.data());
        // Aquí puedes acceder a las credenciales y mostrarlas en tu interfaz de usuario
  //    });
 //   });
 // }

  //ngOnInit(): void {
  //  this.buscarDatos();
  //}


  //private firestore: AngularFirestore

}
