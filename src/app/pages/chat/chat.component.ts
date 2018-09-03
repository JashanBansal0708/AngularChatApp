import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public newMessageText  : string = '';
  constructor() { }

  ngOnInit() {
  }
  public submit(message: string) : void {
    // TODO save text to firebase backend
    console.log('New Message:', message);
  }

}
