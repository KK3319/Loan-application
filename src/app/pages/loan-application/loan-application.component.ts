import { Component, OnInit } from '@angular/core';
import { ApiResponseModel, Application, Loan } from 'src/app/model/application.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor(private masterService:MasterService) { }
 application:Application=new Application();
 loan:Loan=new Loan();
 addLoan(){
  const strObj = JSON.stringify(this.loan);
  const newObj = JSON.parse(strObj);
  this.application.Loans.push(newObj);
 }
 onSubmit() {
  
  this.masterService.addNewApplication(this.application).subscribe((Result:ApiResponseModel)=>{
    if(Result.result) {
      alert("Loan Application Success")
    } else {
      alert(Result.message)
    }
  }, error=>{
    alert(error)
  })
}
  ngOnInit(): void {
  }

}
