import Image, { StaticImageData } from "next/image";

interface BadgedImgProps {
  src: StaticImageData;
  badgeType: string;
  badgeVal: string;
}

export function BadgedImg({ src, badgeType, badgeVal }: BadgedImgProps) {
  let bColor = "bg-pink-700";
  if (badgeType == "secondary") bColor = "bg-orange-400";
  return (
    <figure className=" relative">
      <div className="w-40 max-sm:w-28 mb-4 rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt="Product"
          width={100}
          height={100}
          layout="responsive"
          className="cursor-pointer"
        />
      </div>
      <figcaption
        className={`${bColor}
            absolute 
            bottom-4
            right-0
            px-8
            max-sm:px-5
            py-3
            max-sm:p-1
            rounded-tl-[40px]
            rounded-br-[40px]
            text-white
            text-xs
            `}
      >
        {badgeVal}
      </figcaption>
    </figure>
  );
}
