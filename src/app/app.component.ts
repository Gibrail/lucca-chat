import {Component, OnInit} from "@angular/core";
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lucca Chat';

  constructor(private  chatService: ChatService) {
  }


  ngOnInit(): void {
    this.chatService.addMessage('test observable', 'Lucca');
    this.chatService.addMessage('1 vador', 'Boba Fett');
    this.chatService.addMessage('2 vador', 'Jango');
    this.chatService.addMessage('3 vador', 'Like');
    // this.chatService.$messagesFlow.subscribe((msg) => {console.log(msg)});
  }
}
