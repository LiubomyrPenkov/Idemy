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
  // it's better to set services as private and don't use them in template
  // I'd create component public methods, call service methods there and use them in templates 
  constructor(public cardService: CardsService) { }

  cards$: Observable<ICard[]> = this.cardService.getCards();
  listOfCategories: string[] = ['all'];
  selectedCategory: string = 'all';

  ngOnInit(): void {
    this.getListOfCategories();
  }

  getListOfCategories() {
    // please do not forget to unsubscribe from stream on component destroy
    // or even better use asyn pipe
    this.cardService.getCards()
      .subscribe(cards => {
        const categories = cards.map(card => card.category);
        this.listOfCategories = [...this.listOfCategories, ...new Set(categories)];
      });

    // it can be rewritten this way and used with async pipe

    // this.listOfCategories$ = this.cardService.getCards().pipe(
    //   map((cards) => {
    //     const categories = cards.map(card => card.category);
    //     return [...this.listOfCategories, ...new Set(categories)];
    //   })
    // )
  }

  // no need to create separate method for it, you can call $event.stopPropagation() in template
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  setCurrentCategory(category: string): void {
    this.selectedCategory = category;
  }
}
