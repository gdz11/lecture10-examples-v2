import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { PostList } from './post-list/post-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
{
    path: 'home',
    component: HomePage
},
{
    path: 'posts',
    component: PostList
},
{
    path: 'profile',
    loadComponent: () => import('./my-profile/my-profile').then(c => c.MyProfile)
}
];
