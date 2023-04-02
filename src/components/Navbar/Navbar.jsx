import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Products",
      path: "/products",
    },
  ];

  return (
    <div>
      <nav className="bg-purple-400 py-4">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <span>
            {open === true ? (
              <XMarkIcon className="h-8 w-8 ml-4 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 ml-4 text-white" />
            )}
          </span>
        </div>

        <ul
          className={`md:flex items-center justify-center gap-12 text-white absolute mt-4 md:mt-0 bg-purple-400 md:static ease-in-out duration-1000 px-8 ${
            open ? "h-full" : "-left-48"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
