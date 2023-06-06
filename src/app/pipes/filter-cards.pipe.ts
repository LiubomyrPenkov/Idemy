import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../components/learning/cards/card.model';

@Pipe({
  name: 'filterCards',
  pure: false,
})

export class FilterCardsPipe implements PipeTransform {
  transform(array: ICard[], condition: (item: ICard) => boolean): ICard[] {
    if (!array) return array;

    return array.filter(condition);
  }
}
