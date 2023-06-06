import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../components/learning/cards/card.model';

@Pipe({
  name: 'filterCards'
})

export class FilterCardsPipe implements PipeTransform {
  transform(array: ICard[], selectedCategory: string): ICard[] {
    if (!array || selectedCategory === 'all') {
      return array;
    }

    return array.filter(card => card.category === selectedCategory);
  }
}
