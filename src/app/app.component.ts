import { Component,ElementRef,OnInit } from '@angular/core';
import {RamlService}  from   './raml.service';




@Component({
  selector: 'my-app',
  template: `<h1>Bootstrap Styled Browse Button</h1>
<h4>styled file browse button for bootstrap v3.5+</h4>



 <div *ngFor ="let todoUser of tododata" class="card card-block">
  <h4 class="card-title">{{todoUser.id}}</h4>
 <span>{{todoUser.name}}</span>
  </div>




`,
providers: [ RamlService ]
})



export class AppComponent implements OnInit {




  public fileExtension: any;
public title:String ="Angular File Upload";
username: string ="Upload Image";
todoUser : string ="Default User";
tododata : Object[]= [];

ngOnInit(): void {

this.getnewramldata();
  }



constructor(private elem : ElementRef , private ramlservice: RamlService){

}

public uploadimage():void {

let files = this.elem.nativeElement.querySelector('#selectFile').files;
console.log(files[0].name);
this.username = files[0].name;

this.ramlservice.getRamlData().subscribe(data =>{


console.log(data.json());
},
error => {

console.log("error");
});

setTimeout(() =>{ this.clearfilename(); }, 3000);



}

public fileEvent(event : any) : void {

var file = event.target.files[0];
this.fileExtension = file.name.split('.').pop();
console.log(this.fileExtension);
}
public clearfilename() :void {

this.username = "Upload Image";
}

public getnewramldata() : void {

this.ramlservice
      .getAllTodos()
      .subscribe(
        (todos) => {
        console.log(todos.json());
       this.tododata=todos.json();
console.log(this.tododata);
        }
      );
}



name = 'Angular'; }
