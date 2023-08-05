import Image from "next/image";
import { styled } from "styled-components";

// components
import { Bars, Xmark, Cross } from "../components/icons.js";

const NavbarStyles = styled.div`
  nav {
    top: 0;
    z-index: 5;
    display: flex;
    position: sticky;
    padding: 1rem 0.5rem;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.952);
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.3);
  }

  .logo_part {
    display: flex;
    align-items: center;
  }

  .logo_part img {
    width: 6rem;
  }

  .logo_part ul {
    display: none;
  }

  .links_part {
    display: flex;
  }

  .links_part .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links_part .btn button {
    color: white;
    font-weight: 500;
    border-radius: 10rem;
    padding: 0.5rem 1rem;
    background-color: var(--clr-pink);
    box-shadow: 0px 3px 8px var(--clr-pink);
  }

  .links_part ul {
    display: none;
  }

  .side_bar_toggler {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side_bar_toggler i {
    cursor: pointer;
    padding: 0rem 1rem;
    font-size: 20px;
  }

  /* input {
  display: none;
} */

  /*/////////////// mobile side nav  */

  .mobile_logo_part img {
    width: 6rem;
  }

  .mobile_logo_part ul {
    padding: 0rem 1rem;
    text-align: center;
    /* display: flex; */
    align-items: center;
  }

  .mobile_logo_part ul li {
    font-size: 16px;
    margin: 1rem;
    color: white;
  }

  .mobile_logo_part ul li :hover {
    color: var(--clr-green);
  }

  .mobile_logo_part ul li a {
    transition: var(--transition);
  }

  .mobile_links_part ul,
  .mobile_links_part ul div {
    text-align: center;
  }

  .mobile_links_part ul div {
    /* display: flex; */
    justify-content: center;
    align-items: center;
  }

  .mobile_links_part ul li {
    font-size: 16px;
    margin: 1rem;
    color: white;
    text-align: center;
  }

  .mobile_links_part ul li a {
    transition: var(--transition);
  }

  .mobile_links_part ul li :hover {
    color: var(--clr-green);
  }

  .mobile_links_part ul div div div {
    width: 42px;
    height: 42px;
    margin: 0rem 0.4rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  }

  .mobile_links_part ul div div svg {
    width: 100%;
    height: 100%;
  }

  /* nav toggler className */

  .side_bar_active {
    right: 0 !important;
    overflow: hidden !important;
  }

  /* nav toggler className */
  /*///////////////// mobile side nav  */

  @media screen and (max-width: 400px) {
    .links_part .btn button {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    nav {
      background-color: var(--clr-gray);
    }

    .side_bar_toggler {
      color: white;
      cursor: pointer;
      padding: 0rem 1rem;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1290px) {
    nav {
      z-index: 5;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      background-color: rgba(255, 255, 255, 0.952);
      box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.3);
    }

    .logo_part ul {
      padding: 0rem 1rem;
      display: flex;
      align-items: center;
    }

    .logo_part ul li {
      display: flex;
      font-size: 13px;
      font-weight: 700;
      margin: 0rem 1rem;
      color: var(--clr-gray);
    }

    .logo_part ul li a {
      transition: var(--transition);
    }

    .logo_part ul li :hover {
      color: var(--clr-green);
    }

    .links_part ul,
    .links_part ul div {
      display: flex;
    }

    .links_part ul li {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 700;
      margin: 0rem 1rem;
      color: var(--clr-gray);
    }

    .links_part ul li a {
      transition: var(--transition);
    }

    .links_part ul li :hover {
      color: var(--clr-green);
    }

    .links_part ul div div {
      width: 42px;
      height: 42px;
      margin: 0rem 0.4rem;
      padding: 0.5rem;
      border-radius: 50%;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
    }

    .links_part ul div div svg {
      width: 100%;
      height: 100%;
    }

    .side_bar_toggler {
      display: none;
    }
  }
`;

export default function Navbar() {
  //   const open = document.getElementById("side_bar_toggler_btn");
  //   const close = document.getElementById("side_bar_closer");

  //   const nav = document.getElementById("nav");
  //   const side_bar = document.getElementById("side_bar");

  //   nav.style.overflow = "hidden";
  //   open.addEventListener("click", () => {
  //     side_bar.classList.add("side_bar_active");
  //     nav.removeAttribute("style");
  //   });

  //   close.addEventListener("click", () => {
  //     setTimeout(() => {
  //       nav.style.overflow = "hidden";
  //     }, 600);
  //     side_bar.classList.remove("side_bar_active");
  //   });

  //   // nav bar toggler
  //   // mobile nav bar auto close

  //   const li = document.querySelectorAll("li");

  //   li.forEach((value) => {
  //     value.addEventListener("click", () => {
  //       setTimeout(() => {
  //         nav.style.overflow = "hidden";
  //       }, 600);
  //       side_bar.classList.remove("side_bar_active");
  //     });
  //   });

  return (
    <NavbarStyles>
      <nav id="nav">
        <div className="logo_part">
          <Image className="ml-5" width={200} height={100} src="/images/logo.webp" alt="" />

          <ul>
            <li>
              <a href="#how">HOW DOES IT WORK?</a>
            </li>
            <li>
              <a href="#we">WE MAKE IT HAPPEN</a>
            </li>
            <li>
              <a href="#pricing">PRICING</a>
            </li>
            <li>
              <a href="../src/pages/blog.html">BLOG</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="links_part">
          <ul>
            <li>
              <a href="#">BECOME A TUTOR</a>
            </li>
            <div>
              <li>
                <a href="#">LOG IN</a>
              </li>
            </div>
          </ul>
          <div className="side_bar_toggler">
            <Bars />
          </div>
        </div>

        <div id="side_bar" className="absolute bg-clrgray h-screen p-8 w-80 top-0 -right-full transition-all duration-1000">
          <div className="mobile_logo_part">
            <div className="flex justify-between items-center text-2xl text-white">
              <Image width={200} height={100} src="/images/logo.webp" alt="" />
              <Xmark />
            </div>
            <ul className="mt-14">
              <li>
                <a href="#how">HOW DOES IT WORK?</a>
              </li>
              <li>
                <a href="#we">WE MAKE IT HAPPEN</a>
              </li>
              <li>
                <a href="#pricing">PRICING</a>
              </li>
              <li>
                <a href="../src/pages/blog.html">BLOG</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="mobile_links_part mt-20">
            <ul>
              <li>
                <a href="#">BECOME A TUTOR</a>
              </li>
              <div>
                <li>
                  <a href="#">LOG IN</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarStyles>
  );
}
