import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Home from "./container/HomeContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
