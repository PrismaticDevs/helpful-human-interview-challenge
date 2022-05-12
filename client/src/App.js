import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Colors from "./components/Colors";
import { colors } from "./components/Data";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ marginLeft: "5%" }}>
          <Colors colors={colors.hex} />
        </div>
      </div>
    </>
  );
};

export default App;
