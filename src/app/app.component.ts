import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate-application';
  supportedLanguage = ['en', 'ar', 'ta', 'fr']
  constructor(private trasnServ: TranslateService) {
    this.trasnServ.addLangs(this.supportedLanguage);
    this.trasnServ.setDefaultLang('ta');

    // this one takes the user browser language and run the appliaction in a required specific way
    const browserLangu: any = this.trasnServ.getBrowserLang();
    this.trasnServ.use(browserLangu)
  }


  selectln(data: any) {
    this.trasnServ.use(data.target.value)
  }
}
