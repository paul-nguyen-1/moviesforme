import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";
import "./styles/global.css";
import "normalize.css";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
