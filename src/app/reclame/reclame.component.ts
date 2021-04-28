import { Component, OnInit } from '@angular/core';
import{Reclame} from '../reclame';

@Component({
  selector: 'app-reclame',
  templateUrl: './reclame.component.html',
  styleUrls: ['./reclame.component.css']
})
export class ReclameComponent implements OnInit {
  reclame:Reclame={
    message1:"Dag Allemaal",
    message2:"Dit zijn messages",
    message3:"Wij verschijnen hier",
  }

  title = "Commercial";
  boxTitle="reclameboodschap";
  clicked=true;

  OnClicked(){
    this.clicked = !this.clicked;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
