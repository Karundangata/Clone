import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsByPost(postId: number): Observable<Comment[]> {
    const url = `${this.apiUrl}?postId=${postId}`;
    return this.http.get<Comment[]>(url);
  }
  
}
