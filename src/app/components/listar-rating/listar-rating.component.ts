import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Rating } from 'app/models/rating';
import { RatingService } from 'app/service/rating.service';

@Component({
  selector: 'app-listar-rating',
  templateUrl: './listar-rating.component.html',
  styleUrls: ['./listar-rating.component.css']
})
export class ListarRatingComponent implements OnInit {
  listRatings: Rating[] = [];

  constructor(private _ratingService: RatingService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
  this.getRatings();
  }

  getRatings() {
    this._ratingService.getRatings().subscribe(data => {
      console.log(data);
      this.listRatings = data;
    }, error => {
      console.log(error);
    })
  }

  deleteRating(name: string) {
    this._ratingService.deleteRating(name).subscribe(data => {
      this.toastr.error('El Rating ha estat eliminat amb exit', 'Rating eliminat');
      this.getRatings();
    }, error => {
      console.log(error);
    })
  }

}
