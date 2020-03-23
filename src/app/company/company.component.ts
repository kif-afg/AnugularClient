import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Observable } from 'rxjs';
import {OwnerService} from '../owner.service';
import { Owner } from '../Owner';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  dataSaved = false;
  massage: string;
  FromCompany: any;
  companyId = '0';
  allCompanies: Observable<Company[]>;
  allOwners: Observable<Owner[]>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private formbulider: FormBuilder, private CompanyService: CompanyService, private ownerService: OwnerService) {}


 getOwner() {
   // tslint:disable-next-line:no-debugger
   debugger;
  this.allOwners = this.ownerService.getOwners();
  console.log('hi');
  // tslint:disable-next-line:no-debugger

}


 GetCompany () {
   // tslint:disable-next-line:no-debugger
   debugger;
  this.allCompanies = this.CompanyService.getCompany();
}




Reset() {
  this.FromCompany.reset();
}

AddCompany(company: Company) {
  company.companyId = this.companyId;
  this.CompanyService.CreateCompany(company).subscribe(
    () => {
      this.dataSaved = true;
      this.massage = 'Company added successfully';
      this.GetCompany();
      this.Reset();
      this.companyId = '0';
    });
}

/*add owner to the company */
AddOwner(owner: Owner) {
  owner.cId = this.companyId;
  this.ownerService.CreateOwner(owner).subscribe(
    () => {
      this.dataSaved = true;
      this.massage = 'owner added successfully';
      this.GetCompany();
      this.Reset();
      this.companyId = '0';
    });
}


DeleteCompany(companyId: string) {
if (confirm('Are You Sure To Delete this Informations')) {
this.CompanyService.DeleteCompany(companyId).subscribe(
() => {
  this.dataSaved = true;
  this.massage = 'Deleted Successfully';
  this.GetCompany();
}
);
}
}

CompanyEdit(companyId: string) {

  this.CompanyService.getCompanyById(companyId).subscribe(Response => {
    this.massage = null;
    this.dataSaved = false;

    this.companyId = Response.companyId;
     this.FromCompany.controls['Name'].setValue(Response.Name);
    this.FromCompany.controls['Country'].setValue(Response.Country);
    this.FromCompany.controls['Address'].setValue(Response.Address);
    this.FromCompany.controls['City'].setValue(Response.City);
    this.FromCompany.controls['Email'].setValue(Response.Email);
    this.FromCompany.controls['Phone'].setValue(Response.Phone);
  });
}


 ngOnInit(): void {
  this.FromCompany = this.formbulider.group({
   companyId: ['', [Validators.required]],
   Name: ['', [Validators.required]],
   Address: ['', [Validators.required]],
   Country: ['', [Validators.required]],
   City: ['', [Validators.required]],
   Phone: [''],
   Email: ['']

  });
  this.GetCompany();
 }
}

