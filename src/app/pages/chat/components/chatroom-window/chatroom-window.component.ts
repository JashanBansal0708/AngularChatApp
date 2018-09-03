import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  // TODO replace with fiebase data
  public dummyData = [
    {
      message: 'Jashan bansal is my name . What do you want from me . I am very licky that you are a part of my life.',
      createdAt : new Date(),
      sender: {
        firstName: 'Jashan',
        lastName: 'Bansal',
        photoUrl : '../../../../assets/laptopCoffee.jpg'
      }
    },
    {
      message: 'Jashan bansal is my name . What do you want from me . I am very licky that you are a part of my life.',
      createdAt : new Date(),
      sender: {
        firstName: 'Jashan',
        lastName: 'Bansal',
        photoUrl : '../../../../assets/laptopCoffee.jpg'
      }
    },
    {
      message: 'Jashan bansal is my name . What do you want from me . I am very licky that you are a part of my life.',
      createdAt : new Date(),
      sender: {
        firstName: 'Jashan',
        lastName: 'Bansal',
        photoUrl : '../../../../assets/laptopCoffee.jpg'
      }
    },
    {
      message: 'Jashan bansal is my name . What do you want from me . I am very licky that you are a part of my life.',
      createdAt : new Date(),
      sender: {
        firstName: 'Jashan',
        lastName: 'Bansal',
        photoUrl : '../../../../assets/laptopCoffee.jpg'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
