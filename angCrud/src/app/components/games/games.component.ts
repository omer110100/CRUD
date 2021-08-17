import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/game';
import { Search } from 'src/app/search';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  addGameForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    platform: new FormControl('',Validators.required),
  });
  searchGameForm = new FormGroup({
    search: new FormControl(''),
  });

  values = '';
  games:any;
  game = new Game();
  search = new Search();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getGamesData();
  }

  getGamesData(){
    this.dataService.getData().subscribe(res =>{
      this.games = res;
    });
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.search.name = this.values;
    if(this.search.name){
      this.dataService.getSearchedData(this.search).subscribe(res =>{
        this.games = res;
      });
    }
    else{
      this.getGamesData();
    }
  }
  insertData(){
    if(!this.addGameForm.value.name){
      alert('name required!');
      return;
    }
    if(this.addGameForm.value.price=='0' || this.addGameForm.value.price){
      if(!this.addGameForm.value.platform){
        alert('platform required!');
        return;
      }
      this.dataService.insertData(this.addGameForm.value).subscribe(res =>{
        console.log('A game has been added successfully');
        this.getGamesData();
      });
    }
    else if(!this.addGameForm.value.price){
      alert('price required!');
      return;
    }
  }

  delete_game(id: Game){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getGamesData();
    });
  }
}
