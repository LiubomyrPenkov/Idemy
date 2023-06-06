import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ICard } from '../card.model';
import { CardsService } from '../card.service';
import { customUrlValidator } from 'src/app/validators/urlValidator';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent {
  constructor(
    private fb: FormBuilder,
    public cardService: CardsService,
    private dialogService: DialogService,
    ) { }

  isFormDirty = false;

  cardForm = this.fb.group({
    id: [Math.random()],
    question: ['', Validators.required],
    answer: ['', Validators.required],
    category: ['', [Validators.required, Validators.maxLength(30)]],
    imageUrl: ['', customUrlValidator],
    createdAt: [new Date()],
    isLearned: [false],
  });

  get question() { return this.cardForm.get('question'); }
  get answer() { return this.cardForm.get('answer'); }
  get category() { return this.cardForm.get('category'); }
  get imageUrl() { return this.cardForm.get('imageUrl'); }

  onSubmit() {
    this.cardService.addCard(this.cardForm.value as ICard)
    .subscribe(
      card => {
        console.log('Card created:', card);
        this.cardForm.reset();
      },
    )
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isFormDirty) {
      return this.dialogService.confirm('Discard changes?');
    }
    return true;
  }

  onFormControlChange() {
    this.isFormDirty = true;
  }
}
