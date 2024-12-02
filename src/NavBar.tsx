import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
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
import { useTheme } from "./utils/useTheme";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-fit mx-auto rounded-lg sm:w-[95%] px-[6vh] sm:px-[1vh] shadow-md border-[1px] bg-white border-zinc-400 dark:bg-black dark:shadow-zinc-800 dark:border-none"
    >
      <NavbarContent className="flex gap-[12vh] sm:justify-between lg:gap-[8vh] md:gap-[4vh]">
        <NavbarItem className="font-title w-5">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
        </NavbarItem>

        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="sm:hidden font-title">
            <a href={item.href}>{item.name}</a>
          </NavbarItem>
        ))}

        <NavbarContent justify="end">
          <NavbarItem>
            <button
              className="w-fit hover:bg-[#F4F4F5] p-2 rounded-xl dark:hover:bg-[#27272A] transition-transform duration-300 ease-in-out"
              style={{
                transform: isDarkMode ? "rotate(90deg)" : "rotate(0deg)",
              }}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
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
            key={index}
            className="pl-[0.5vh] mt-7 text-2xl font-title border-b-[1px] pb-1"
          >
            <a
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
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
