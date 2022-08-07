import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>container</div>
    </div>
  );
};

export default Home;
