import {  JSX } from "react";

interface BadgeProps {
  Icon?: JSX.Element;
  number: number;
  parenthesesNum?: number;
  label: string;
}

export function Badge({ Icon, number, parenthesesNum, label }: BadgeProps) {
  if (Icon) {
    return (
      <div className="flex items-center rounded-[100px] gap-2 bg-[#FFF5E9]  px-2 py-1">
        <div>{Icon}</div>
        <div className="flex flex-col text-sm max-[380px]:text-xs">
          <span className="font-semibold">
            {number}{" "}
            {parenthesesNum ? (
              <span className="font-light ml-1 text-slate-500 dark:text-white text-[10px] ">
                ( 15 )
              </span>
            ) : null}{" "}
          </span>
          <span className="text-yellow-600">{label}</span>
        </div>
      </div>
    );
  }
  return (
    <div className=" text-sm max-sm:text-xs max-[380px]:text-[10px] bg-yellow-50 dark:bg-transparent  px-3 py-2 text-yellow-600 font-semibold">
      <span className="text-xl max-sm:text-xs  mr-1">{number}</span>
      <span>{label}</span>
    </div>
  );
}
