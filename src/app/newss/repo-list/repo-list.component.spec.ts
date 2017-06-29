import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('RepoListComponent (inline template)', () => {

  let comp:    RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ RepoListComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(RepoListComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});