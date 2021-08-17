import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';
import { Search } from '../search';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) {}

  getData(){
    return this.httpClient.get('http://localhost:8000/api/games');
  }
  getSearchedData(data: Search){
    return this.httpClient.get('http://localhost:8000/api/game/search/'+data.name);
  }

  insertData(data: Game){
    return this.httpClient.post('http://localhost:8000/api/game', data);
  }

  deleteData(id: Game){
    return this.httpClient.delete('http://localhost:8000/api/game/delete/'+id);
  }

  editData(id:Game,data:Game){
    return this.httpClient.put('http://localhost:8000/api/game/update/'+id, data);
  }

  getGameById(id: Game){
    return this.httpClient.get('http://localhost:8000/api/game/'+id);
  }

}
