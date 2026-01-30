import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'عدسة - عالم التوصير' },
    { path: 'about', component: About, title: 'عدسة - من نحن' },
    { path: 'blog', component: Blog, title: 'عدسة - المدونة' },
    { path: '404', component: Notfound, title: 'خطأ' },
    { path: '**', redirectTo: '404' }
];
