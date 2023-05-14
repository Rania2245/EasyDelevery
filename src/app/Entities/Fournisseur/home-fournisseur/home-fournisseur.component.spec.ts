import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFournisseurComponent } from './home-fournisseur.component';

describe('HomeFournisseurComponent', () => {
  let component: HomeFournisseurComponent;
  let fixture: ComponentFixture<HomeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
