import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICard } from '../card.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CardsService } from '../card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  card$!: Observable<ICard>;

  constructor(private route: ActivatedRoute, private service: CardsService) {
  }

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCardById(params.get('id')!)));
  }
}
