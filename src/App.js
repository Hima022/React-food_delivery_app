import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./components/Main";

import RestaurantMenu from "./components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantMenu />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;