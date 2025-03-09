import { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  styles?: string;
  type?: "primary" | "secondary";
  active?: boolean;
}
export function Button({ children, styles, type, active }: BtnProps) {
  let classes = `btn bg-gradient-to-r text-white  from-[#D20653] to-[#FF951D] ${styles} `;
  if (type == "secondary") {
    classes = ` text-sm text-[#828282] border-[1px] rounded-[15px] py-2 px-8 border-[#828282]	max-sm:px-4	  ${styles} `;
  }
  if (active && type == "secondary") {
    classes = ` text-sm font-semibold text-[#FF951D] bg-[#FFF5E9] border-[1px] rounded-[15px] py-2 px-8 border-[#FF951D] ${styles} `;
  }
  return (
    <button
      className={classes}
    >
      {children}
    </button>
  );
}
