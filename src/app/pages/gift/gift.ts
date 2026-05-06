import { Component } from '@angular/core';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.html',
  styleUrl: './gift.scss',
})
export class Gift {
  selectedGift: number | null = null;

  selectGift(giftNumber: number) {
    this.selectedGift = giftNumber;
  }
}