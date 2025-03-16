import React from "react";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />

        <div className="pt-10">
          <h1 className="text-lg lg:text-4xl text-center font-bold text-primary-color pb-5 lg:pb-20">
            DEALS
          </h1>
          <Deal />
        </div>

        <section className="pt-20">
          <h1 className="text-lg lg:text-4xl text-center font-bold text-primary-color pb-5 lg:pb-20">
            SHOP BY CATEGORIES
          </h1>
          <ShopByCategory />
        </section>

        <section className="relative w-full h-[80vh] lg:h-[100vh] mt-20">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-white">
            <h1>Sell your Product</h1>
            <p className="text-lg md:text-2xl">
              With <span className="logo">Timurid Bazaar</span>
            </p>

            <div className="pt-6 flex justify-center">
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
