import {Component, Input, OnInit} from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import { MovieModel } from 'src/app/services/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {

  @Input() movie = new MovieModel();
  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
  }

  redirectToMovieDetail(id: number) {
    this.catalogueService.getMovieById(id).subscribe(response=>{
      this.catalogueService.currentMovieDetail = response;
      this.router.navigate(['/details/',id]);
    })
  }
}
