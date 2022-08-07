import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import styles from "../sidebar.module.scss";

export const MainData = [
  {
    name: "Dashboard",
    icon: <DashboardIcon className={styles.icon} />,
  },
];

export const ListData = [
  {
    name: "Users",
    icon: <SupervisorAccountOutlinedIcon className={styles.icon} />,
  },
  {
    name: "Products",
    icon: <Inventory2OutlinedIcon className={styles.icon} />,
  },
  {
    name: "Orders",
    icon: <ShoppingBagOutlinedIcon className={styles.icon} />,
  },
  {
    name: "Delivery",
    icon: <LocalShippingOutlinedIcon className={styles.icon} />,
  },
];

export const UsefulData = [
  {
    name: "Stats",
    icon: <QueryStatsOutlinedIcon className={styles.icon} />,
  },
  {
    name: "Notifications",
    icon: <CircleNotificationsOutlinedIcon className={styles.icon} />,
  },
];

export const ServiceData = [
  {
    name: "Logs",
    icon: <PsychologyOutlinedIcon className={styles.icon} />,
  },
  {
    name: "System Health",
    icon: <FavoriteBorderOutlinedIcon className={styles.icon} />,
  },
  {
    name: "Setting",
    icon: <SettingsOutlinedIcon className={styles.icon} />,
  },
];

export const UserData = [
  {
    name: "Profile",
    icon: <AccountCircleOutlinedIcon className={styles.icon} />,
  },
  {
    name: "Logout",
    icon: <ExitToAppOutlinedIcon className={styles.icon} />,
  },
];
