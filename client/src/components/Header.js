import svg from "../img/hh.svg";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={svg} alt="Helpful Human" />
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
