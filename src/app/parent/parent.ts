import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {

  EmployeeName="Arsheed Alam"

  changeName(){
    this.EmployeeName = 'Raman Singh'
  }

  employee ={
    name: 'Raman',
    salary: 45000,
  }

  changeCustomer(){
    this.employee.name = 'sandeep';
  }
}
