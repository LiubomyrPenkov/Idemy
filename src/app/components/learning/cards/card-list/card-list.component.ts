import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../card.model';
import { CardsService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  constructor(public cardService: CardsService) { }

  cards$: Observable<ICard[]> = this.cardService.getCards();
  listOfCategories: string[] = ['all'];
  selectedCategory: string = 'all';

  ngOnInit(): void {
    // this.getCards();
    this.getListOfCategories();
  }

  // getCards(): void {
  //   this.cardService.getCards()
  //     .subscribe(cards => this.cards = cards);
  // }

  getListOfCategories() {
    this.cardService.getCards()
      .subscribe(cards => {
        const categories = cards.map(card => card.category);
        this.listOfCategories = [...this.listOfCategories, ...new Set(categories)];
      });
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  setCurrentCategory(category: string): void {
    this.selectedCategory = category;
  }

  filterCondition = (card: ICard): boolean => {
    if (this.selectedCategory === 'all') {
      return true;
    }

    return card.category === this.selectedCategory;
  }
}
