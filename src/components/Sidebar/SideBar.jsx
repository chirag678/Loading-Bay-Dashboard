import { NavLink } from "react-router-dom";
import { FaBars, FaTruck, FaPaypal, FaUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { MdInfo } from "react-icons/md";
import { GiNinjaHead } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import SettingsIcon from "./SettingsIcon";

const routes = [
  {
    path: "/",
    name: "LBay1",
    icon: <FaTruck />,
  },
  {
    path: "/LBay2",
    name: "LBay2",
    icon: <BsTruck />,
  },
  {
    path: "/LBay3",
    name: "LBay3",
    icon: <FaTruck />,
  },
  {
    path: "/LBay4",
    name: "LBay4",
    icon: <BsTruck />,
  },
  {
    path: "/LBay5",
    name: "LBay5",
    icon: <FaTruck />,
  },
  {
    path: "/LBay6",
    name: "LBay6",
    icon: <BsTruck />,
  },
  {
    path: "/LBay7",
    name: "LBay7",
    icon: <FaTruck />,
  },
  {
    path: "/LBay8",
    name: "LBay8",
    icon: <BsTruck />,
  },
  {
    path: "/Info",
    name: "Info",
    icon: <MdInfo />,
    subRoutes: [
      {
        path: "/Info/Thatwaniguy",
        name: "Built by",
        icon: <GiNinjaHead />,
      },
      {
        path: "/Info/Contact",
        name: "Contact",
        icon: <FaUser />,
      },
      {
        path: "/Info/Paypal",
        name: "PayPal ;)",
        icon: <FaPaypal />,
      },
    ],
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [query, setQuery] = useState(""); // adds a state variable to store the search query
  const handleLinkAi4m = () => {
    window.open('https://ai4mtech.com/', '_blank');
  };

  const handleChange = (event) => {
    setQuery(event.target.value); // update the search query every time the input field is changed
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // if the enter key is pressed, filters the routes array based on the search query
      const filteredRoutes = routes.filter((route) =>
        route.name.toLowerCase().includes(query.toLowerCase())
      );
      // if a matching route is found, navigate to the route
      if (filteredRoutes.length > 0) {
        window.location.href = filteredRoutes[0].path;
      };
    };
  };

  const handleSearch = () => {
    // filter the routes array based on the search query
    const filteredRoutes = routes.filter((route) =>
      route.name.toLowerCase().includes(query.toLowerCase())
    );
    // if a matching route is found, navigate to the route
    if (filteredRoutes.length > 0) {
      window.location.href = filteredRoutes[0].path;
    };
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "120px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <a onClick={handleLinkAi4m} style={{ color: "rgb(72,72,72)" }}>
                    ai4m
                  </a>
                  <SettingsIcon />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="Bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch onClick={handleSearch}/>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}

                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}  // listen for the enter key press event
                />
              )}
            
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
