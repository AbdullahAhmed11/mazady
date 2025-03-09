import { IconProps } from "@/app/types/static";

export function BurgerIcon({w, h, s}: IconProps) {
    const height = h ? h : "24";
    const width = w ? w : "24";
    const stroke = s ? s : "#333333"
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        opacity="0.34"
        d="M3 12H21"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 17H21"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
