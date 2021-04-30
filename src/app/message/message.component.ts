import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:Message = {
    id: 6,
    message:"Dag allemaal, hoe gaat het met jullie? Lange tijd al niet gezien. Hopelijk is het vaccin er snel en kunnen we elkaar weer in levende lijve zien.",
    newMessage:"",
  }
  title = "Message";
  boxTitle = "Messages";
  allMessages:string[] = [];
  selectedMessage?:string;
  newMessageContent:string = "";
  messages: Message[] = [];
   
  constructor(private MessageService: MessageService) { }

  AddMessage(){
    this.allMessages.push(this.message.newMessage)
    this.message.newMessage ="";
  }

  AddServiceMessage(){
    let newerMessage:Message = {
      id:this.message.id,
      message:this.newMessageContent,
      newMessage:""
    }
    this.MessageService.addMessage(newerMessage);
    this.newMessageContent ="";
    this.message.id++;
  }
  ShowFullMessage(selected?: string): void{
    console.log("message clicked");
    console.log(this.message);
    this.selectedMessage = selected;
  }

  getMessages():void{
    this.MessageService.getMessages().subscribe(x => this.messages = x);
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
