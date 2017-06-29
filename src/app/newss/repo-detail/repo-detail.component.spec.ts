import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoDetailComponent } from './repo-detail.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('RepoDetailComponent (inline template)', () => {

  let comp:    RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ RepoDetailComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(RepoDetailComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});