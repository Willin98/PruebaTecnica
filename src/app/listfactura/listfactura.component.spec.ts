import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfacturaComponent } from './listfactura.component';

describe('ListfacturaComponent', () => {
  let component: ListfacturaComponent;
  let fixture: ComponentFixture<ListfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
