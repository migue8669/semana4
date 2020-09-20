import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  get() {
    this.imageDetailList = this.firebase.list('nodejs-ea572');
 //   console.log(this.imageDetailList);
    return this.imageDetailList;
        console.log(this.imageDetailList);

  } 

  insert(imageDetails) {
    this.imageDetailList=this.firebase.list('/nodejs-ea572')
    console.log(imageDetails);
    this.imageDetailList.push({
      nombre: imageDetails.nombre
   
 });
}
}