import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'
import { DateFormControl } from 'src/app/Control/date-form-control';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm=new FormGroup({
     name:new FormControl('',
                          [Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(40)]),
     cardNumber:new FormControl('',
                          [Validators.required,
                          Validators.minLength(16),
                          Validators.maxLength(16),
                          Validators.pattern(/[0-9]/)]),
     expiration:new DateFormControl('',[Validators.required,
                                    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
     securityCode:new FormControl('',[Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(3),
                                      Validators.pattern(/[0-9]/)])
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Successfully Submitted")
  }
  onResetClick(){
    this.cardForm.reset();
  }
}
