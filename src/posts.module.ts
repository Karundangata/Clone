import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './app/posts/posts.component';
import { PostsService } from './app/posts.service';
import { CommentsComponent } from './app/comments/comments.component';

@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PostsService
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
