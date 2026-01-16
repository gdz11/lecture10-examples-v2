import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'posts',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
