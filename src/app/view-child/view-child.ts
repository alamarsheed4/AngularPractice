import { Component,ElementRef,input,QueryList,ViewChild, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child',
  styleUrl: './view-child.css',
  templateUrl: './view-child.html',
})
export class ViewChildComponent {

   EmployeeName:string = ''

  @ViewChild('employee') employee !: ElementRef<HTMLInputElement>

  getEmployeeName(){

    this.EmployeeName = this.employee.nativeElement.value
  }

  // ----------------------------------------------------//

  @ViewChildren('empDetails') empDetails !: QueryList<ElementRef<HTMLInputElement>>
  
  customerDetails:any = []

  getEmployeeDetails(){
    this.customerDetails = [];
  const inputs = this.empDetails.toArray();

  this.customerDetails.push({
    name: inputs[0].nativeElement.value,
    designation: inputs[1].nativeElement.value,
    salary: inputs[2].nativeElement.value,
    city: inputs[3].nativeElement.value,
  })


  
  }
}
