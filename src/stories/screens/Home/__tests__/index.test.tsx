import React from "react";
import Home from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = {navigate: jest.fn()};
const list = {map: jest.fn()};

it("renders correctly", () => {
  const tree = renderer.create(
    <Home fetchListSuccess={() => console.log("Log")}
          navigation={navigation}
          readed={{}}
          updateList={() => {
            console.log("log")
          }}
          setReadedItem={() => {
            console.log("log")
          }}
          isLoading={true} list={list}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
