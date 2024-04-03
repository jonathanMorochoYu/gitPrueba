import { Injectable } from '@angular/core';
import { Universidad } from '../domain/universidad';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  private dbPath = '/universidad'; 
  universidades: Universidad[] = []

  universidadRef: AngularFirestoreCollection<Universidad>;

  constructor(private db: AngularFirestore) {
    this.universidadRef = db.collection(this.dbPath);
  }

  save(universidad: Universidad){
    this.universidades.push(universidad)
    console.log(this.universidades)
    universidad.uid = this.db.createId()
    this.create(universidad)
  }

  getList(){
    return this.universidades
  }

  
  getAll() {
    return this.universidadRef.valueChanges();
  }

  create(universidad: Universidad): any {
    return this.universidadRef.doc(universidad.uid).set({ ...universidad });
  }

  update(id: string, data: any): Promise<void> {
    return this.universidadRef.doc(id).update(data);
  }

  update2(universidad: Universidad): Promise<void> {
    const universidadDoc = this.universidadRef.doc(universidad.uid);
    return universidadDoc.update({ ...universidad });
  }
  delete(id: string): Promise<void> {
    return this.universidadRef.doc(id).delete();
  }
}