import { Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component'
import { PostsComponent } from './posts/posts.component'
import { ProfileComponent} from './profile/profile.component'

export const routes: Routes = [
    { path: 'comments', component: CommentsComponent },
    {path: 'posts', component: PostsComponent },
    {path: '', component: ProfileComponent },

];
