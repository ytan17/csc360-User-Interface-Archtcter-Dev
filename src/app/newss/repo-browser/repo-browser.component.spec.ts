import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoBrowserComponent } from './repo-browser.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('RepoBrowserComponent (inline template)', () => {

  let comp:    RepoBrowserComponent;
  let fixture: ComponentFixture<RepoBrowserComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ RepoBrowserComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(RepoBrowserComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});