import { Routes, RouterModule } from '@angular/router';
import { TodosComponent }  from './components/todos/todos.component';
import { HomepageComponent }  from './components/homepage/homepage.component';
import { MovieComponent }  from './components/movie/movie.component';
import { ReditComponent }  from './components/reddit/reddit.component';


const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'todos', component: TodosComponent},
  {path:'movie', component: MovieComponent},
  {path:'reddit', component: ReditComponent}

];

export const routing = RouterModule.forRoot(routes);
