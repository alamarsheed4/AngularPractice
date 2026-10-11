import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  customerName = 'Arsheed'

  employeeName = ''

  keyUp(eventDetails:KeyboardEvent){

    let inpurEle = eventDetails.target as HTMLInputElement

    this.employeeName = inpurEle.value
  }

  customerLocation='India'

  CustomerName = ''

  changeCustomerDetails(customerName:any){

    this.customerLocation = customerName
    
  }

  empName = '';
  designation = '';
  salary = 0;

  product = ''

  getName(custName:any){
    console.log(custName.value);
    
  }

  changeName(){
    this.customerName = 'Raman'

    console.log(this.customerName);
    
  }

  Message = ""

  count = ''

  characterCount(){
    this.count= `Message Length is ${this.Message.length}`
  }

  studentName = '';
  marks: number | null = null;

  showDetails = false

  getDetails(){
    this.showDetails = true
  }

  selectedDesignation = '';

  employee = {
    name: '',
    designation: '',
    salary: 0
  };

  searchText = '';

  showEmployeeDetails:any=[]

  employees = [
  { name: 'Arsheed', designation: 'Developer', salary: 60000 },
  { name: 'Raman', designation: 'Manager', salary: 80000 },
  { name: 'Rajat', designation: 'Tester', salary: 45000 }
];

  getEmployeeDetails(searchByName:string){
   this.showEmployeeDetails = this.employees.filter((details:any)=>{

    return details.name.toLocaleLowerCase().includes(searchByName.trim().toLowerCase())
   })
  }

  username = '';
  password = '';

  userNameMsg = 'Please Enter Username'
  passwordMsg = 'Please Enter Password'

  loginMessage = ''


  getLogin(){
    if(this.username.trim() == ''){
      alert(this.userNameMsg)
    }else if(this.password == ''){
      alert(this.passwordMsg)
    }else if(this.username == 'Arsheed' && this.password == '123'){
      this.loginMessage = 'Login SuccessFully!!!'
    }else{
      this.loginMessage = 'Invalid Username or Password'
    }
  }
  
}

