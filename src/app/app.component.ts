import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'practice-r';
 gender=['male', 'female'];
  inputForm: FormGroup | undefined;

  
 ngOnInit(): void {
    this.inputForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email] ),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.inputForm);
  }


}
