import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongMultiplayerLocalComponent } from './pong-multiplayer-local.component';

describe('PongMultiplayerLocalComponent', () => {
  let component: PongMultiplayerLocalComponent;
  let fixture: ComponentFixture<PongMultiplayerLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PongMultiplayerLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PongMultiplayerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
