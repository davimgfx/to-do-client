import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/page';
import LoginPage from '../pages/login/page';
import RegisterPage from '../pages/register/page';
import TaskManagerPage from '../pages/taskManager/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastro',
    element: <RegisterPage />,
  },
  {
    path: '/gerenciadorDeTarefas',
    element: <TaskManagerPage />,
  },
]);
