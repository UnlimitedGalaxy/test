import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import UseEffectDemo from '../pages/useEffect'
import List from '../pages/list'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/effect',
    element: <UseEffectDemo />,
  },
  {
    path: '/list',
    element: <List />,
  }
]);

export default router;