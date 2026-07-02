import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaLojasComponent } from './pesquisa-lojas.component';

describe('PesquisaLojasComponent', () => {
  let component: PesquisaLojasComponent;
  let fixture: ComponentFixture<PesquisaLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaLojasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
