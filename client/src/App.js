import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Colors from "./components/Colors";
import { colors } from "./components/Data";
import { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ApolloProvider client={client}>
      <Header term={searchTerm} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ marginLeft: "5%" }}>
          <Colors colors={colors.hex} />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
