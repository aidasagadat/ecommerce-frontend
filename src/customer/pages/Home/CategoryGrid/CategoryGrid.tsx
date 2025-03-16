import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.theplace.ru/cache/archive/aiana_grande/img/2018_be_more_human_reebok_(4)-gthumb-gwdata1600-gfitdatamax.jpg"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.chanel.com/images///f_auto,q_auto:good,dpr_1.1/w_3200/-9559842291742.jpg%203200w"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://media.tiffany.com/is/image/tiffanydm/2024_LErefresh_RingSettingsStylesLP_ImageCopyTIle_1_Desktop?$tile$&wid=1440&hei=912"
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/389923-01.png"
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://www.orental.ru/upload/catalog/juliette-has-a-gun/pear-inc.jpg"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://resources.cdn-kaspi.kz/img/m/p/hcb/h81/86206337908766.png?format=gallery-large"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
