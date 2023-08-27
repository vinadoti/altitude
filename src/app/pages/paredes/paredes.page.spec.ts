import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParedesPage } from './paredes.page';

describe('ParedesPage', () => {
  let component: ParedesPage;
  let fixture: ComponentFixture<ParedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParedesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
