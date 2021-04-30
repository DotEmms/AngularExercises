import { Message } from '../message';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  @Input()fullMessage?:string
  constructor() { }

  ngOnInit(): void {
  }

}
