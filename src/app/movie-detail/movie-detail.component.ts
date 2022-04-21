import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {MovieModel} from "../services/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movie = new MovieModel();

  constructor(private route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private router: Router) {
    this.movie = catalogueService.currentMovieDetail;    
    if (this.movie.id == 0) {
      let movieId = this.route.snapshot.params['id'];
      this.catalogueService.getMovieById(movieId).subscribe(
        response => {
          this.movie = response;
        },
        e => {
          this.router.navigate(['/404']);
        }
      );
    }
  }

  ngOnInit(): void {
    
    // if (this.movie.id == 0) {
    //   let movieId = this.route.snapshot.params['id'];
    //   this.catalogueService.getMovieById(movieId).subscribe(
    //     response => {
    //       this.movie = response;
    //     },
    //     e => {
    //       this.router.navigate(['/404']);
    //     }
    //   );
    // }

  }

}
