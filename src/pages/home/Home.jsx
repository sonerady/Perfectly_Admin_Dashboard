import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home.module.scss";
import Widget from "../../components/widget/Widget";

const Home = () => {
  const dataType = [
    {
      type: "users",
    },
    {
      type: "order",
    },
    {
      type: "earning",
    },
    {
      type: "balance",
    },
  ];

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.widgets}>
          {dataType.map((item, index) => {
            return <Widget key={index} type={item.type} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
