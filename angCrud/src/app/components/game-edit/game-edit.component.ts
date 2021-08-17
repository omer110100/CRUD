import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/game';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  id:any;
  data:any;
  game = new Game();
  constructor(private route:ActivatedRoute, private dataService:DataService) { }
  editGameForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    platform: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id
    this.getData();
  }

  getData(){
    console.log(this.editGameForm.value);
    this.dataService.getGameById(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.game = this.data
      this.editGameForm.patchValue({
        name: this.game.name, 
        price: this.game.price, 
        platform: this.game.platform, 
      });
    });
  }

  updateGame(){
    if(!this.editGameForm.value.name){
      alert('name required!');
      return;
    }
    if(!this.editGameForm.value.price){
      alert('price required!');
      return;
    }
    if(!this.editGameForm.value.platform){
      alert('platform required!');
      return;
    }
    this.dataService.editData(this.id,this.editGameForm.value).subscribe(
      res=>{
        alert('game has been updated!');
      }
    );
  }
}
