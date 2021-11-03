import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import isEmptyObj from "./helpers/emptyObj";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import axios from "axios";


const App = () => {
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [makeSearch, setMakeSearch] = useState(false);
  const [data, setData] = useState({});

  const fetchData = useCallback(async (query) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setData(response.data);
      toast.success("User found", {id: "success"});
    }
    catch(e) {
      toast.error("User does not exist!", {id: "error"});
      console.log(e);
    }
  }, []);



  useEffect(() => {
    console.log(data);
    async function search () {
      if(makeSearch) {
        const toastId = toast.loading("Searching user...", {id: "loading"});
        await fetchData(searchQuery);
        toast.dismiss(toastId);
        setMakeSearch(false);
      }
    }
    search();
  }, [searchQuery, makeSearch, data, fetchData]);



  return (
    <div>
      <div className="container" data-theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} 
          setMakeSearch={setMakeSearch}
          data={data}
        />
        { 
          !isEmptyObj(data) ?
          <Profile data={data} /> : 
          null 
        }
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === "light" ? '#363636' : "#fff",
            color: theme === "light" ? '#fff' : "#363636"
          }
        }}
      />
    </div>
  );
}

export default App;
