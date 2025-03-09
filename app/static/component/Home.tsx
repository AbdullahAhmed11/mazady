import { AddIcon } from "./Icons/add";
import { Button } from "./UI/Button";
import { ProductItem } from "./UI/ProductItem";
import productImg1 from "../../../public/images/products/product-1.png";
import productImg2 from "../../../public/images/products/product-2.png";
import productImg3 from "../../../public/images/products/product-3.png";
import productImg4 from "../../../public/images/products/product-4.png";
import productImg5 from "../../../public/images/products/product-5.png";

export function Home() {
  const products = [
    {
      imgSrc: productImg1,
      price: 1000,
      featured: "primary",
      loved: false,
      description: "Six-piece clothing set (blouse - pants - hat and ...",
    },
    {
      imgSrc: productImg2,
      price: 1000,
      featured: "primary",
      loved: false,
      description: "Six-piece clothing set (blouse - pants - hat and ...",
    },
    {
      imgSrc: productImg3,
      price: 1000,
      featured: "secondary",
      loved: true,
      description: "Jeep Car, new, used for only one time",
    },
    {
      imgSrc: productImg4,
      price: 1000,
      featured: "primary",
      loved: false,
      description: "Six-piece clothing set (blouse - pants - hat and ...",
    },
    {
      imgSrc: productImg5,
      price: 1000,
      featured: "secondary",
      loved: true,
      description: "Jeep Car, new, used for only one time",
    },
  ];
  return (
    <main className="flex-grow min-w-80  shrink  border rounded-md shadow-lg p-6 bg-white border-white">
      <div className="flex justify-between mb-4 items-start relative">
        <div className="flex flex-wrap gap-2">
          <Button active={true} type="secondary">
            Products
          </Button>
          <Button type="secondary">Articles</Button>
          <Button type="secondary">Reviews</Button>
        </div>
        <Button styles="max-sm:fixed flex items-center p-3 rounded-md gap-2 right-4 bottom-2 z-10">
          <AddIcon />
          Add Review
        </Button>
      </div>
      <section id="products">
        <h2 className="mb-6 text-3xl max-sm:text-xl font-semibold flex gap-2 items-center">
          Products
          <span className="text-sm text-gray-500  font-light">(12)</span>
        </h2>
        <div>
          {products.map((p, i) => {
            return (
              <ProductItem
                loved={p.loved}
                key={i}
                badgeType={p.featured}
                description={p.description}
                price={p.price}
                imgSrc={p.imgSrc}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
