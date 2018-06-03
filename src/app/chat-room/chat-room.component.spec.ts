import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponent } from './chat-room.component';

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render textarea and submit button in message-box', async(() => {
    const fixture = TestBed.createComponent(ChatRoomComponent);
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('.message-box').firstChild.type).toBe('textarea');
    expect(dom.querySelector('.message-box').lastElementChild.type).toBe('submit');
  }));

  it('should render messages in messages-list', async(() => {
    const fixture = TestBed.createComponent(ChatRoomComponent);
    const app = fixture.debugElement.componentInstance;
    app.messages = [
      {content: "Achetez moi je ne coute pas cher..."},
      {content: "Bonjour je suis figgo", author: "Figgo"},
      {content: "Loremp ipsum blabla !", author: "Figgo"},
      {content: "Je suis un outil destiné aux RH", author: "Figgo"}
    ];

    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('.messages-list > ul').firstChild).not.toBeNull('Pas de messages !');
    expect(dom.querySelector('.messages-list > ul > li:first-child').textContent).toEqual('Achetez moi je ne coute pas cher...');
    expect(dom.querySelector('.messages-list > ul > li:nth-child(3)').textContent).toEqual('Loremp ipsum blabla !');
  }));
});
