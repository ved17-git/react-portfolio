import { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import logoLight from "./assets/logo.png";
import logoDark from "./assets/logoDark.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [toggleTheme, setToggleTheme] = useState<boolean>(false);




  function handleClose() {
    setIsMenuOpen(false);
  }


  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-fit mx-auto rounded-lg sm:w-[95%] px-[6vh] sm:px-[1vh] my-3 shadow-md border-[1px] bg-white border-zinc-400 dark:bg-black dark:shadow-zinc-800 dark:border-none"
      id="navbar"
    >
      <NavbarContent className="flex gap-[12vh] sm:justify-between lg:gap-[8vh] md:gap-[4vh]">
        <NavbarItem className="font-title w-5">
          <a color="foreground" href="/" onClick={handleClose}>
            <img
              src={logoLight}
              alt=""
              className="w-full dark:hidden"
              width={100}
              height={100}
            />
            <img
              src={logoDark}
              alt=""
              className="w-full hidden dark:block"
              width={100}
              height={100}
            />
          </a>
        </NavbarItem>

        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="sm:hidden font-title">
            <a color="foreground" href={item.href}>
              {item.name}
            </a>
          </NavbarItem>
        ))}

        <NavbarContent justify="end">
          <NavbarItem>
            <button
              className="w-fit hover:bg-[#F4F4F5] p-2 rounded-xl dark:hover:bg-[#27272A] transition-transform duration-300 ease-in-out"
              style={{
                transform: toggleTheme ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {toggleTheme ? (
                <FiSun size={20} className="animate-spin-slow" />
              ) : (
                <FiMoon size={20} className="animate-spin-slow" />
              )}
            </button>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hidden sm:block"
          />
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu className="bg-white dark:bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            className="pl-[0.5vh] mt-7 text-2xl font-title border-b-1 pb-1"
          >
            <a
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              onClick={handleClose}
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
