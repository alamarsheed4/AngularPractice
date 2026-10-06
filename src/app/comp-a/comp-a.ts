import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  isLoggedIn = true;

  student = {
    name: 'Arsheed',
    marks: 75
};

employees = [
    { name: 'Arsheed', designation: 'Developer', salary: 60000 },
    { name: 'Raman', designation: 'Manager', salary: 80000 },
    { name: 'Amit', designation: 'Tester', salary: 45000 },
    { name: 'John', designation: 'Developer', salary: 55000 }
  ];

  //This way to define empty array
  employee_det:{
    name:string,
    designation:string,
    salary: number
  }[] = [];

  employee ={
    name:'Arsheed',
    designation:'Manager'
  }
}
