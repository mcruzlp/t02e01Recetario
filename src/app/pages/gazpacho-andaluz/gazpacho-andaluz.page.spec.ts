import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GazpachoAndaluzPage } from './gazpacho-andaluz.page';

describe('GazpachoAndaluzPage', () => {
  let component: GazpachoAndaluzPage;
  let fixture: ComponentFixture<GazpachoAndaluzPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GazpachoAndaluzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GazpachoAndaluzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
