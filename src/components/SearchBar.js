import { SearchIcon } from "@primer/octicons-react";
import isEmptyObj from "../helpers/emptyObj";

const SearchBar = (props) => {
    return (

        <div className="search-bar">
            <SearchIcon size={32}></SearchIcon>
            <input
                type="search"
                placeholder="Search Github username..."
                spellCheck="false"
                onChange={(event) => { props.setSearchQuery(event.target.value.trim()) }}
                value={props.searchQuery}
            />
            <button
                type="button"
                onClick={() => {
                    if (props.searchQuery.length && (isEmptyObj(props.data) || props.searchQuery.toLowerCase() !== props.data.login.toLowerCase()))
                        props.setMakeSearch(true);
                }}
            >
                Search
            </button>
        </div>


    );
}

export default SearchBar;