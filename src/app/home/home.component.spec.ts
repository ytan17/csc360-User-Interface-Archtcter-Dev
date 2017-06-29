import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


describe('HomeComponent (inline template)', () => {

  let comp:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ HomeComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});