import { Component, OnInit } from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:Message = {
    message:"Dag allemaal, hoe gaat het met jullie? Lange tijd al niet gezien. Hopelijk is het vaccin er snel en kunnen we elkaar weer in levende lijve zien.",
    newMessage:"",
    allMessages:[],
  }
  title = "Message";
  boxTitle = "Messages";
  

   AddMessage(){
     this.message.allMessages.push(this.message.newMessage)
     this.message.newMessage ="";
   }
  constructor() { }

  ngOnInit(): void {
  }

}
