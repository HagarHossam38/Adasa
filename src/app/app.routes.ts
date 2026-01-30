import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Adasa|Home' },
    { path: 'about', component: About, title: 'Adasa|About' },
    { path: 'blog', component: Blog, title: 'Adasa|Blog' },
    { path: '**', component: Notfound, title: 'Adasa|Failed' }
];
