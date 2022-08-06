import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';
import { AreaSectionComponent } from './components/area-section/area-section.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { AreaItemComponent } from './components/area-section/area-item/area-item.component';
import { CounterComponent } from './components/counter/counter.component';
import { OptionTagsComponent } from './components/option-tags/option-tags.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductInfoComponent,
    ProposalCardComponent,
    AreaSectionComponent,
    AreaItemComponent,
    CounterComponent,
    OptionTagsComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
