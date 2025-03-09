import Image from "next/image";
import profile from "../../../public/images/profile.png";
import { Badge } from "./UI/Badge";
import { Button } from "./UI/Button";
import { SeenIcon } from "./Icons/seen";
import { ShareIcon } from "./Icons/share";
import { DownloadIcon } from "./Icons/download";
import { LogoIcon } from "./Icons/logo";
import QrCode from "../../../public/images/QR-code.png";
import { FollowersIcon } from "./Icons/followersIcon";
import { StarIcon } from "./Icons/star";
import { FollowingIcon } from "./Icons/following";

export function Cards() {
  const badges = [
    {
      icon: <FollowingIcon />,
      label: "Following",
      num: 5,
    },
    {
      icon: <FollowersIcon />,
      label: "Followers",
      num: 20,
    },
    {
      icon: <StarIcon />,
      label: "Rate",
      num: 4.2,
      pNum: 15,
    },
  ];
  return (
    <aside className="w-3/12 min-w-[340px] max-lg:w-6/12 max-md:mx-auto">

      <section  className="bg-white shadow-lg border border-white p-6 rounded-[20px] mb-6">
        <figure>
          <div className="w-20 mb-4 ">
            <Image
              src={profile}
              alt="User Avatar"
              width={100}
              height={100}
              layout="responsive"
              className="cursor-pointer"
            />
          </div>
          <figcaption className="mb-4 text-xl max-[380px]:text-base font-semibold">
            Hala Ahmed
          </figcaption>
        </figure>

        <p className=" text-stone-500   text-sm max-[380px]:text-xs mb-6">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Makeup and Skin Care.
        </p>

        <div className="flex justify-between mb-6">
          {badges.map((b) => {
            return (
              <Badge
                key={b.label}
                Icon={b.icon}
                label={b.label}
                number={b.num}
                parenthesesNum={b.pNum ? b.pNum : undefined}
              />
            );
          })}
        </div>

        <Button styles="w-full mb-6 p-2 rounded-full">Follow</Button>
      </section>

      <section className="bg-white shadow-lg border border-white p-6 rounded-[20px] mb-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-2xl max-sm:text-lg font-semibold">QR Code</h3>
          <div className="flex gap-5">
            <SeenIcon />
            <ShareIcon />
            <DownloadIcon s="#3C3C3C" />
          </div>
        </div>

        <div className="flex gap-2 bg-[#FFF5E9] rounded-md p-3 mb-4">
          <DownloadIcon s="#ca8a04" />
          <p className="text-xs ">Download the QR code or share it with your friends.</p>
        </div>

        <div className="bg-gradient-to-r h-[300px] rounded-[20px] from-[#D20653] to-[#FF951D] flex items-center justify-center">
          <div className="bg-white dark:text-stone-900 w-5/6 h-5/6 rounded-[20px] flex flex-col justify-center items-center ">
            <LogoIcon />
            <h2 className="text-xl font-semibold my-1">Hala Ahmed</h2>
            <figure className="flex flex-col items-center">
              <div className="w-full">
              <Image
                src={QrCode}
                alt="QR Code"
                width={10}
                height={10}
                layout="responsive"
                className="cursor-pointer"
              />
              </div>
              <figcaption className="text-xs mt-2">Follow Us ON Mazaady</figcaption>
            </figure>
          </div>
        </div>
      </section>

    </aside>
  );
}