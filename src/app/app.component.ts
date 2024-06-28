import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsComponent} from './comments/comments.component'
import { PostsComponent} from './posts/posts.component'
import { ProfileComponent } from './profile/profile.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentsComponent, PostsComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week8Assessment';
}
