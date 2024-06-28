import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostsByUser(3).subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        showComments: false  // Initialize showComments property
      }));
    });
  }

  // toggleComments(postId: number): void {
  //   const post = this.posts.find(p => p.id === postId);
  //   if (post !== undefined) {
  //     post.showComments = !post.showComments;
  //   }
  // }


}
