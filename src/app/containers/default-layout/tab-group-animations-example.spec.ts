import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAnimationsExample } from './tab-group-animations-example';

describe('TabGroupAnimationsExample', () => {
  let component: TabGroupAnimationsExample;
  let fixture: ComponentFixture<TabGroupAnimationsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupAnimationsExample ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAnimationsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
