import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
    @Input() popular: string;

    constructor() {
        // this.popular = 'US-Dollar';
    }

    ngOnInit() {

    }
}