import React from "react";
import "./App.css";
import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import {
  useRecoilState,
  useSetRecoilState,
  RecoilRoot,
  atom,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5">Tap increase/decrease to change the value of counter</Typography>
          <Buttons />
          <CountComp />
        </Card>
      </div>
    </RecoilRoot>
  );
}
function Buttons() {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Increase />
      <Decrease />
    </div>
  );
}
function Increase() {
  const setCount = useSetRecoilState(CountState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((ec) => ec + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
}
function Decrease() {
  const setCount = useSetRecoilState(CountState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((ec) => ec - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
}
function CountComp() {
  const count = useRecoilValue(CountState);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

const CountState = atom({
  key: "CountState",
  default: 0,
});
