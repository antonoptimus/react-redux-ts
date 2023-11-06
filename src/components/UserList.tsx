import React from "react";
import { useSelector } from "react-redux";

export default function UserList() {
  const state = useSelector((state) => state);
  console.log(state)
  return <div>UserList</div>;
}
