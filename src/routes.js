import { createAppContainer, createSwichNavigator } from "react-navigation";

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = createAppContainer(
  createSwichNavigator({
    Main,
    Box
  })
);

export default Routes;
