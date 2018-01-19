import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RedditComponent } from './reddit.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    RedditComponent,
    ArticleComponent // <-- added this
  ],
  imports: [
    CommonModule,
    FormsModule  
    ]  
})
export class RedditModule { 
  
}
