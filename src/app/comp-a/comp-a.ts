import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  constructor(private cd : ChangeDetectorRef){}

 EmployeeName = 'Arsheed'

 currentDate = new Date();

 changeName(){
  this.EmployeeName = 'John'
 }

 setTime(){
  setInterval(()=>{
    this.currentDate = new Date();
    this.cd.markForCheck();
  },1000)
  this.currentDate = new Date();
 }

 customerName = signal('Rohit Kumar')
 customerCount = signal(1)

 changeDetails(){
  this.customerName.set('Raman Singh')
  this.customerCount.set(5)
 }

 updateDetails(){
  this.customerName.update((name)=>{
    return name = 'Rajat Saxena'
  })
 }

 increaseCount(){
  this.customerCount.update((count)=>{
    return count +=1
  })
 }

 decreaseCount(){
  this.customerCount.update((count)=>{
    return count -=1
  })
 }

 products = ['Samsung','Apple phone', 'Oppo', 'Vivo']


 EmployeeDetails = [
  {
    name:'Arsheed',
    salary:34000,
    location:'London'
  },
  {
    name:'Sandeep',
    salary:78000,
    location:'America'
  },
  {
    name:'Raman',
    salary:45000,
    location:'UK'
  },
  {
    name:'Rakesh',
    salary:52000,
    location:'England'
  },
 ]

 customerId = 10;
}
