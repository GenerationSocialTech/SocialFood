import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemTrueComponent } from './postagem-true.component';

describe('PostagemTrueComponent', () => {
  let component: PostagemTrueComponent;
  let fixture: ComponentFixture<PostagemTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemTrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
