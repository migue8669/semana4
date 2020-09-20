import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ServicioService} from './servicio.service'
import { AngularFireStorage } from '@angular/fire/storage';
import {Model} from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semana3';
  list:Model[];
  formTemplate = new FormGroup({
    nombre: new FormControl('')
  })
  constructor(private storage: AngularFireStorage, private service: ServicioService) { }
  ngOnInit() {
    const x = this.service.get();
x.snapshotChanges().subscribe((item)=>{
this.list=[];
item.forEach((element)=>{
  const y=element.payload.val();
  y["$key"]=element.key;
  this.list.push(y as Model);
  console.log(y);
})
});
    this.resetForm();
  }
  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      nombre:''
    })
  }

  onSubmit(formValue){
      this.service.insert(formValue);
      this.resetForm();
  }

   abrirCiudad(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
   togg = true;


}
