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

  // better to not use getters here since they are function and you use them in template
  // https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496
  // you can write something like questionControl = this.cardForm.get('question') and use properties in template
  get question() { return this.cardForm.get('question'); }
  get answer() { return this.cardForm.get('answer'); }
  get category() { return this.cardForm.get('category'); }
  get imageUrl() { return this.cardForm.get('imageUrl'); }

  onSubmit() {
    // unsubscribe or use take(1)
    this.cardService.addCard(this.cardForm.value as ICard)
    .subscribe(
      card => {
        console.log('Card created:', card);
        this.cardForm.reset();
      },
    )
  }

  canDeactivate(): Observable<boolean> | boolean {
    // if (this.cardForm.dirty) instead
    if (this.cardForm.dirty) {
      return this.dialogService.confirm('Discard changes?');
    }
    return true;
  }

  // using this.cardForm.dirty propery should be enough
  // there is not need to create separate propery for it 
  onFormControlChange() {
    this.isFormDirty = true;
  }
}
