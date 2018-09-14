import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5; // because div width is 75px and there are 5 stars
  }
}
