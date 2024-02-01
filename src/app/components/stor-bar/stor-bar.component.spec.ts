import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorBarComponent } from './stor-bar.component';

describe('StorBarComponent', () => {
  let component: StorBarComponent;
  let fixture: ComponentFixture<StorBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorBarComponent]
    });
    fixture = TestBed.createComponent(StorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
