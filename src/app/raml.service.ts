import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class  RamlService{

constructor (

private http :Http
){}

public    getRamlData(){

return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res:Response) => res);
}


public getAllTodos(){

return this.http.get('https://jsonplaceholder.typicode.com/users').map((res:Response) => res);

}
}
