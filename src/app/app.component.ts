import {Component, OnInit} from '@angular/core';
import {Message} from "../models/chat.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Lucca Chat';
  userName = 'Figgo';
  // messages: Message[] = [];
  messages: Message[] = [{content: "Bonjour je suis figgo"}, {content: "Loremp ipsum blabla !"}, {content: "Je suis un outil destiné aux RH"}, {content: "Achetez moi je ne coute pas cher..."}];

  ngOnInit(): void {

  }

}
