import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Rating } from 'app/models/rating';
import { RatingService } from 'app/service/rating.service';

@Component({
  selector: 'app-crear-rating',
  templateUrl: './crear-rating.component.html',
  styleUrls: ['./crear-rating.component.css']
})

export class CrearRatingComponent implements OnInit {
  ratingForm: FormGroup;
  title = "Crear User";
  name:String | null;

constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _ratingService: RatingService,
              private aRouter: ActivatedRoute) { 
  this.ratingForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    rating: ['', Validators.required],
    description: ['', Validators.required],
  });

  this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
}

ngOnInit(): void {
  this.addRating();
}

addRating() {
  const user: Rating = {
    id: this.ratingForm.get('id')?.value,
    name: this.ratingForm.get('name')?.value,
    rating: this.ratingForm.get('rating')?.value,
    description: this.ratingForm.get('description')?.value,
  }

   // Add user
   console.log(user);
   this._ratingService.addRating(user).subscribe(data => {
     this.toastr.success('El user ha estat creat amb exit!', 'User Creat');
     this.router.navigate(['/']);
   }, error => {
     console.log(error);
     this.ratingForm.reset();
   })
}



}
