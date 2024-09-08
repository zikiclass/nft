"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./css/menu.module.css";
import { name } from "../../../env";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./mobilemenu";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const showMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo_main}>
            <Link href="/" className={styles.logo_wrap}>
              <Image src={logo} className={styles.logo} alt={name} />
              <span>{name}</span>
            </Link>

            <div className={styles.search}>
              <input
                type="text"
                placeholder="Search for collections, NFTs or users"
              />
              <span>
                <SearchIcon style={{ fontSize: "1.3rem" }} />
              </span>
            </div>
          </div>
          <div className={styles.menu}>
            <Link href="/create" className={styles.menu_link}>
              Create
            </Link>
            <Link href="/explore" className={styles.menu_link}>
              Explore
            </Link>
            <Link href="/blog" className={styles.menu_link}>
              Blog
            </Link>
            <Link href="/drops" className={styles.menu_link_}>
              <span>Drops</span> <span className={styles.new}>new</span>
            </Link>
          </div>
          <div className={styles.quick_menu}>
            <video
              src="/vid1.mp4"
              loop
              autoPlay
              muted
              playsInline
              className={styles.video}
            >
              Your browser does not support the video tag.
            </video>
            <Link href="/connect" className={styles.connect}>
              Connect Wallet
            </Link>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className={styles.shopIcon}
              xlmns="http://www.w3.org/2000/svg"
              class="sc-gEvEer gBkSpS"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 3C13.2386 3 11 5.23858 11 8H9C6.79086 8 5 9.79086 5 12V23C5 25.2091 6.79086 27 9 27H23C25.2091 27 27 25.2091 27 23V12C27 9.79086 25.2091 8 23 8H21C21 5.23858 18.7614 3 16 3ZM19 8C19 6.34315 17.6569 5 16 5C14.3431 5 13 6.34315 13 8H19ZM11 10H9C7.89543 10 7 10.8954 7 12V23C7 24.1046 7.89543 25 9 25H23C24.1046 25 25 24.1046 25 23V12C25 10.8954 24.1046 10 23 10H21H11ZM13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12H21C21 14.7614 18.7614 17 16 17C13.2386 17 11 14.7614 11 12H13Z"
                fill="currentColor"
              ></path>
            </svg>
            <MenuIcon className={styles.mobile_menu} onClick={showMobile} />
          </div>
        </div>
      </div>
      {mobile && (
        <MobileMenu
          closeMenu={() => {
            setMobile(false);
          }}
        />
      )}
    </>
  );
};
export default Navbar;
