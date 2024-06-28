// comments.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../../comment.model';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postId: number | undefined;
  comments: Comment[] | undefined;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    if (this.postId !== undefined) {
      this.commentsService.getCommentsByPost(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }

}
