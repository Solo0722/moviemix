import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Drawerbar from "../containers/Drawerbar";
import { Link, useLocation } from "react-router-dom";
import colors from "../utils/colors";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarWrapper>
      <Drawerbar />
      <Link to={"/"}>
        <img
          src="/assets/images/moviemix-logo-Recovered-1.png"
          alt="hotel-logo"
          width={80}
          height={20}
          style={{ margin: "0px 10px" }}
        />
      </Link>
      <div className="long-search-box">
        <Searchbar />
      </div>
      <Link to="/search">
        <Button type="text" icon={<SearchOutlined />} className="search-btn" />
      </Link>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 60px;
  width: 100%;
  padding: 0 1rem;
  transition: all 0.3s ease-out 0s;
  background: ${colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  z-index: 10;
  top: 0;

  .search-btn {
    display: none;
  }

  .long-search-box {
    display: flex;
    width: 100%;
    margin: 0px 0px 0px 15px;
  }

  @media screen and (max-width: 768px) {
    .search-btn {
      display: block;
    }

    .long-search-box {
      display: none;
    }
  }
`;

export default Navbar;
