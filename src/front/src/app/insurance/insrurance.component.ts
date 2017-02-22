/**
 * Created by yahia on 2/19/2017.
 */
import {Component} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms'
import {InsuranceService} from "./insrurance.service";

@Component({
  selector: 'ins',
  templateUrl: 'insurance.component.html',
  providers: [InsuranceService]
})
export class InsuranceComponent {

  form:FormGroup; // form
  min:number = 0; // max of slider
  max:number = 0;// min of slider
  gridDataSource = []; // grid source
  gridColumns = [ // for the grid
    {field: 'id', header: 'ID'},
    {field: 'coverage', header: 'coverage'},
    {field: 'risk', header: 'risk'},
    {field: 'price', header: 'price'},
    {field: 'insuranceType', header: 'insuranceType'}];

  constructor(private fb:FormBuilder, private is:InsuranceService) { // injecting

    this.form = this.fb.group({ // build the form
      coverage: ['0'],
      risk: [''],
      price: [''],
      insuranceType: ['',[Validators.required]]// validtion

    })
    this.getAll();
  }

  typeChange(item) { // chnage the type of insurance
    switch (item.value) {
      case 'Bike':
        this.min = 0;
        this.max = 3000;
        this.form.patchValue({risk: 30});
        break
      case 'Jewelry':
        this.min = 500;
        this.max = 10000;
        this.form.patchValue({risk: 5});
        break;
      case 'Electronics':
        this.min = 500;
        this.max = 6000;
        this.form.patchValue({risk: 35});
        break;
      case 'SportsEquipment':
        this.min = 0;
        this.max = 20000;
        this.form.patchValue({risk: 30});
        break;

    }
  }

  save() { //save
    this.is.saveInsurance(this.form.value).subscribe(i=> {
      this.form.reset(); //rest
      this.form.patchValue({coverage:0});

    });
  }

  getAll() { //get all
    this.is.getAllInsurance().subscribe(i=> {
      this.gridDataSource = i;
    })
  }
}
