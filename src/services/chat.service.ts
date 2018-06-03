import {Injectable, OnInit} from "@angular/core";
import {ReplaySubject} from "rxjs/index";
import {Message} from "../models/chat.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  private _messagesSubject = new ReplaySubject<Message>();
  $messagesFlow = this._messagesSubject.asObservable();

  constructor() {
  }

  ngOnInit(): void {
  }

  addMessage(content: string, author: string) {
    this._messagesSubject.next(<Message>{content, author});
  }
}
