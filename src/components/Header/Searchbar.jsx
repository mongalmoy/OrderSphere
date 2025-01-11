import { CiSearch } from "react-icons/ci"

const SearchBar = () => {
  return (
    <div className="search_bar">
      <div className="search_icon_div">
        <CiSearch className="search_icon" />
      </div>
      <input type="text" className="global_search" placeholder="Search" />
    </div>
  )
}

export default SearchBar