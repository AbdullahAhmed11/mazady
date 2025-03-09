import  { StaticImageData } from "next/image";
import { Badge } from "./Badge";
import { HeartIcon } from "../Icons/heart";
import { BadgedImg } from "./BadgedImg";

interface ProductItemProps {
  imgSrc: StaticImageData;
  description: string;
  price: number;
  badgeType: string
  loved: boolean
}

export function ProductItem({imgSrc, description, price, badgeType, loved}: ProductItemProps) {
  return (
    <div className=" relative my-5 ">
      <div className="flex max-sm:items-center gap-3">

        <BadgedImg badgeType={badgeType} src={imgSrc} badgeVal="Hot Sale" />

        <div className="flex flex-col justify-between py-2 ">
          <p className="max-w-full text-base max-sm:text-sm">{description}</p>
          <span className="text-slate-500  max-sm:text-sm">
            Starting Price<span className="text-slate-950  font-semibold ml-2 max-sm:text-base text-2xl ">{price} EGP</span>
          </span>
          <div className="flex flex-wrap items-center gap-3 ">
            <span className="text-slate-500  max-sm:text-sm">Lot starts in</span>
            <div className="flex flex-wrap gap-3 max-sm:gap-0">
            <Badge label="Days" number={2} />
            <Badge label="Hours" number={10} />
            <Badge label="Minutes" number={50} />
            </div>
          </div>
        </div>
      </div>

      <span className="absolute  top-2 right-2 cursor-pointer max-md:left-2 max-sm:top-4 max-[380px]:top-10">
        {loved ? <HeartIcon f="#D20653" s="white" /> : <HeartIcon />}
      </span>
    </div>
  );
}
