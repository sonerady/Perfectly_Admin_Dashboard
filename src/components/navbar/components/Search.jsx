import React from "react";
import styles from "../navbar.module.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search..." />
      <SearchOutlinedIcon />
    </div>
  );
};

export default Search;
