import { EventEmitter, Injectable } from '@angular/core';
import { message } from 'modules/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  SendMessage: EventEmitter<message> = new EventEmitter<message>();
  Send(msg: string, user_name: string): void {
    this.SendMessage.emit(new message(msg,user_name,new Date()));
  }

}
