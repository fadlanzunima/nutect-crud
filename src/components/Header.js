import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, FileTextOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/" className="nav-link">
          <HomeOutlined /> Home
        </Link>
      </Menu.Item>
      <Menu.Item key="create">
        <Link to="/create" className="nav-link">
          <FileTextOutlined /> Create
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
