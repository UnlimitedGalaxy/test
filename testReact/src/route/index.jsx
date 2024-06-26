import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import UseEffectDemo from '../pages/useEffect'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/effect',
    element: <UseEffectDemo />,
  }
]);

export default router;