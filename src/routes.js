import App from './App';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Todos from './Todos';
import NotFound from './pages/NotFound';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/posts',
    component: Posts,
    loadData: () => loadData('posts')
  },
  {
    path: '/todos',
    component: Todos,
    loadData: () => loadData('todos')
  },
  {
    component: NotFound
  }
];

export default Routes;