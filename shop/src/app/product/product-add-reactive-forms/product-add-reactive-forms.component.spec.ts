import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddReactiveFormsComponent } from './product-add-reactive-forms.component';

describe('ProductAddReactiveFormsComponent', () => {
  let component: ProductAddReactiveFormsComponent;
  let fixture: ComponentFixture<ProductAddReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
