import Search from "./components/Search";
import styles from "./navbar.module.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";

const Navbar = () => {
  const profileUrl = "https://avatars.githubusercontent.com/u/80179760?v=4";

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <Search />
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              className={styles.icon}
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <TextsmsOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <img src={profileUrl} alt="Avatar" className={styles.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
