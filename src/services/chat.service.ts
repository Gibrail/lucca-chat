import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";
import {Message} from "../models/chat.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesSubject = new Subject<Message[]>();
  $messagesFlow = this.messagesSubject.asObservable();

  constructor() { }
}
