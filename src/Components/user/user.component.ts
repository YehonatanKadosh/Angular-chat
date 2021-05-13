import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../app/message-service.service'
import { message } from '../../../modules/message'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  constructor(private message_service: MessageService) {
  }
  @Input() name: string;
  text_container: string = "";
  input_textbox: string;
  ngOnInit(): void {
    this.message_service.SendMessage.subscribe((_message: message) => {
      if (_message.content != "")
        if (_message.sender != this.name)
          this.text_container += _message.date.toLocaleString() + '\n' + _message.sender + ": " + _message.content + '\n' + '\n';
        else
          this.text_container += _message.date.toLocaleString() + '\n' + "me: " + _message.content + '\n' + '\n';

    })
  }
  Send(content: string) {
    this.message_service.Send(content, this.name);
    this.input_textbox = "";
  }
}
