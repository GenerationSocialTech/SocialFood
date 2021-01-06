import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostagemAtivaComponent } from './get-postagem-ativa.component';

describe('GetPostagemAtivaComponent', () => {
  let component: GetPostagemAtivaComponent;
  let fixture: ComponentFixture<GetPostagemAtivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPostagemAtivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostagemAtivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
