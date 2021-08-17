import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games:any;
  game = new Game();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getGamesData();
  }

  getGamesData(){
    this.dataService.getData().subscribe(res =>{
      console.log(res);
      this.games = res;
    });
  }

  insertData(){
    console.log(this.game);
    this.dataService.insertData(this.game).subscribe(res =>{
      console.log('A game has been added successfully');
      this.getGamesData();
    });
  }

  delete_game(id: Game){
    console.log(id);
    this.dataService.deleteData(id).subscribe(res=>{
      this.getGamesData();
    });
  }
  edit_game(id: Game){
    console.log(id);
  }
}
