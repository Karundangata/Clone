import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPostsByUser(userId: number): Observable<Post[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<Post[]>(url);
  }
}
