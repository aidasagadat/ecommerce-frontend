import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../data/category/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheer, setShowCategorySheet] = useState(false);

  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px20 h-[70px] border-b">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}

              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#002354]">
                Timurid Bazaar
              </h1>
            </div>

            <ul className="flex items-center font-medium text-gray-600">
              {mainCategory.map((item) => (
                <li
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                  }}
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://www.enigma-mag.com/wp-content/uploads/2019/12/Sandra-Bullock-Young.jpg"
                />
                <h1 className="font-semibold hidden lg:block">Aida</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>

            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        <div className="categorySheet absolute top-[4.41rem] left-20 right-20 border">
          <CategorySheet selectedCategory="men" />
        </div>
      </Box>
    </>
  );
};

export default Navbar;
