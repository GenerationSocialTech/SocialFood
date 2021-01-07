import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemFalseComponent } from './postagem-false.component';

describe('PostagemFalseComponent', () => {
  let component: PostagemFalseComponent;
  let fixture: ComponentFixture<PostagemFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
