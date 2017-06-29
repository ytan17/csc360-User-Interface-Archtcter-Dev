import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {
    populars: string[];

    constructor() {
        this.populars = ['US - Dollar', 'EUR - Euro', 'GBP - British Pound', 'INR - Indian Rupee','AUD - Australian Dollar','CAD - Canadian Dollar','SGD - Singapore Dollar','CHF -Swiss Franc','MYR -Malaysian Ringgit','JPY - Japanese Yen','CNY - Chinese Yuan Renminbi'];
    }

    ngOnInit() {

    }
}