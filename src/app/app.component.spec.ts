import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Lucca Chat'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Lucca Chat');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('h1').textContent).toContain('Welcome to Lucca Chat!');
  }));

  it('should render textarea and submit button in message-box', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('.message-box').firstChild.type).toBe('textarea');
    expect(dom.querySelector('.message-box').lastElementChild.type).toBe('submit');
  }));

  it('should render messages in messages-list', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.messages = [{content: "Achetez moi je ne coute pas cher..."}, {content: "Bonjour je suis figgo"}, {content: "Loremp ipsum blabla !"}, {content: "Je suis un outil destiné aux RH"}];

    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('.messages-list > ul').firstChild).not.toBeNull('Pas de messages !')
    expect(dom.querySelector('.messages-list > ul > li:first-child').textContent).toEqual('Achetez moi je ne coute pas cher...');
    expect(dom.querySelector('.messages-list > ul > li:nth-child(3)').textContent).toEqual('Loremp ipsum blabla !');
  }));
});
