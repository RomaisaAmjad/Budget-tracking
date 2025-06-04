import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Users from './pages/Users.jsx';
import ProfileSection from './Components/ProfileSection.jsx';
import MyAccount from './pages/MyAccount.jsx';
import Expenses from './pages/Expenses.jsx';
import SignUp from './pages/SignUp.jsx';
import Analytics from './pages/Analytics.jsx';
import FirstPage from './pages/FirstPage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import {createBrowserRouter,RouterProvider
} from 'react-router-dom';
import Landing from './pages/FirstPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Expenses",
    element: <Expenses />,
  },
  {
    path: "/SignUp",
    element: < SignUp/>,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>,
  },
  {
   path :"/Landing",
    element: <Landing/>,
  },
 
  {
    path: "/ProfileSection",
    element: <ProfileSection />,
  },
  {
    path: "/MyAccount",
    element: <MyAccount />,
  },
  {
    path: "/Analytics",
    element: <Analytics />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/FirstPage",
    element: <FirstPage />
  },
  {
    path: "/*",
    element: <PageNotFound/>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
