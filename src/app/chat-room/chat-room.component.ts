import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/chat.model";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @Input() userName: string = '';
  messages: Message[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.$messagesFlow.subscribe((msg) => {
        this.messages.push(msg)
      },
      (error) => {
        console.log(error + ' Erreur récupération des messages !')
      });
  }

  sendMessage(msgContent: string) {
    this.chatService.addMessage(msgContent, this.userName);
  }

}
