import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    console.log('Fetching posts from API: ', this.apiUrl);
    return this.http.get<Post[]>(this.apiUrl);
  }   
}
