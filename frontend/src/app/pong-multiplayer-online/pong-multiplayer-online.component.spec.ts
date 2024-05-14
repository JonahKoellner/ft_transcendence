import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongMultiplayerOnlineComponent } from './pong-multiplayer-online.component';

describe('PongMultiplayerOnlineComponent', () => {
  let component: PongMultiplayerOnlineComponent;
  let fixture: ComponentFixture<PongMultiplayerOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PongMultiplayerOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PongMultiplayerOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
