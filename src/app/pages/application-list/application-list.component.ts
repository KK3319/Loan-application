import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  constructor() { }
  applications: any[] = [
    { id: 1, name: 'John Doe', amount: 5000, status: 'Approved' },
    { id: 2, name: 'Jane Smith', amount: 10000, status: 'Pending' },
    { id: 3, name: 'Jim Brown', amount: 7500, status: 'Rejected' }
  ];

  ngOnInit(): void {
  }

}
