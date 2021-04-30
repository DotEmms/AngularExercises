import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(): Observable<Message[]>{
    const messages = of(MESSAGES);
    return messages;
  }
  addMessage(newMessage:Message):void{
    MESSAGES.push(newMessage);
  }
}
