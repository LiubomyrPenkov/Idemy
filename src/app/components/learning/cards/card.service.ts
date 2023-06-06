import { Injectable } from '@angular/core';
import { ICard } from './card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CardsService {
  translatedCardId: number | null = null;
  cardUrl: string = 'http://localhost:8000/cards';

  constructor(
    private http: HttpClient
  ) {}

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl);
  }

  getCardById(id: string | number): Observable<ICard> {
    return this.http.get<ICard>(`${this.cardUrl}/${id}`);
  }

  addCard(card: ICard): Observable<ICard> {
    return this.http.post<ICard>(this.cardUrl, card);
  }

  toggleTranslation(card: ICard): void {
    this.translatedCardId = this.translatedCardId === card.id ? null : card.id;
  }

  getDisplayedText(card: ICard): string {
    return this.translatedCardId === card.id ? card.answer : card.question;
  }
}
