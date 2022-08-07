import styles from "./sidebar.module.scss";
import {
  ListData,
  MainData,
  ServiceData,
  UsefulData,
  UserData,
} from "./components/SidebarData";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>Sonerady</span>
      </div>
      <div className={styles.center}>
        <>
          <p className={styles.title}>Main</p>
          {MainData.map((item, index) => {
            return (
              <ul className={styles.item} key={index}>
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </ul>
            );
          })}
        </>
        <>
          <p className={styles.title}>Lists</p>
          {ListData.map((item, index) => {
            <p className={styles.title}>Main</p>;
            return (
              <ul className={styles.item} key={index}>
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </ul>
            );
          })}
        </>
        <>
          <p className={styles.title}>Useful</p>
          {UsefulData.map((item, index) => {
            return (
              <ul className={styles.item} key={index}>
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </ul>
            );
          })}
        </>
        <>
          <p className={styles.title}>Service</p>
          {ServiceData.map((item, index) => {
            return (
              <ul className={styles.item} key={index}>
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </ul>
            );
          })}
        </>
        <>
          <p className={styles.title}>User</p>
          {UserData.map((item, index) => {
            return (
              <ul className={styles.item} key={index}>
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </ul>
            );
          })}
        </>
      </div>
      <div className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </div>
    </div>
  );
};

export default Sidebar;
