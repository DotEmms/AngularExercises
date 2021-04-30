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
  selectedMessage?:string;

   AddMessage(){
     this.message.allMessages.push(this.message.newMessage)
     this.message.newMessage ="";
   }

   ShowFullMessage(selected?: string): void{
     console.log("message clicked");
     console.log(this.message);
     this.selectedMessage = selected;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
