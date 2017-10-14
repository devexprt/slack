import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMembersComponent } from './account-members.component';

describe('AccountMembersComponent', () => {
  let component: AccountMembersComponent;
  let fixture: ComponentFixture<AccountMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
