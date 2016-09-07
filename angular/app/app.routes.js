"use strict";
var router_1 = require('@angular/router');
var todos_component_1 = require('./components/todos/todos.component');
var homepage_component_1 = require('./components/homepage/homepage.component');
var movie_component_1 = require('./components/movie/movie.component');
var reddit_component_1 = require('./components/reddit/reddit.component');
var routes = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'todos', component: todos_component_1.TodosComponent },
    { path: 'movie', component: movie_component_1.MovieComponent },
    { path: 'reddit', component: reddit_component_1.ReditComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map