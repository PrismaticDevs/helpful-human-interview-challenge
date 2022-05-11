import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Colors from "./components/Colors";

export const posts = [
  { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" },
];

const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ marginLeft: "5%" }}>
          <Colors colors="hi" />
        </div>
      </div>
    </>
  );
};

export default App;
