import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDixComponent } from './page-dix.component';

describe('PageDixComponent', () => {
  let component: PageDixComponent;
  let fixture: ComponentFixture<PageDixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
