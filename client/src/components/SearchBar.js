import { posts } from "../App";
const SearchBar = () => {
  const search = (e) => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].name.includes(e.target.value)) {
        posts.map((post) => {
          return console.log(post.name);
        });
      } else {
        return console.log("No search results");
      }
    }
  };
  return (
    <>
      <input
        onKeyDown={search}
        id="header-search"
        type="text"
        placeholder="Search"
      />
    </>
  );
};

export default SearchBar;
