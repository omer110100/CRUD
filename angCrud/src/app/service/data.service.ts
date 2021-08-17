import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) {}

  getData(){
    return this.httpClient.get('http://localhost:8000/api/games');
  }

  insertData(data: Game){
    return this.httpClient.post('http://localhost:8000/api/game', data);
  }

  deleteData(id: Game){
    return this.httpClient.delete('http://localhost:8000/api/game/delete/'+id);
  }

  editData(data: Game){
    return this.httpClient.post('http://localhost:8000/api/game/update/2', data);
  }


}
