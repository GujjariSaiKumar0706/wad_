import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Interface from './components/interface/Interface';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Technologies from './components/technologies/Technologies';
import Angular from './components/angular/Angular';
import Reacts from './components/react/Reacts';
import Vue from './components/vue/Vue';

function App() {



  let router=createBrowserRouter([

    {
      path:'',
      element:<Layout />,
     children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:"signup",
        element:<Signup />
      },
      {
        path:'signin',
        element:<Signin />
      },
      {
        path:"Interface",
        element:<Interface />
      },
      {
        path:'technologies',
        element:<Technologies />,
        children:[
          {
              path:'react',
              element:<Reacts />
          },
          {
            path:"angular",
            element:<Angular />
          },
          {
            path:"vue",
            element:<Vue />
          }
        ]
      }
    ]

    }


    ]



  )
  return (

    
    <div className="App ">

     <RouterProvider router={router} />
    </div>
  );
}

export default App;
