import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongSingleplayerVsBotComponent } from './pong-singleplayer-vs-bot.component';

describe('PongSingleplayerVsBotComponent', () => {
  let component: PongSingleplayerVsBotComponent;
  let fixture: ComponentFixture<PongSingleplayerVsBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PongSingleplayerVsBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PongSingleplayerVsBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
