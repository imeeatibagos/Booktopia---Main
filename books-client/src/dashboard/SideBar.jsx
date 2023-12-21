import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiUser,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import UserImg from "../assets/fave.jpg";

const SideBar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img={UserImg}>
          User
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Log In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
