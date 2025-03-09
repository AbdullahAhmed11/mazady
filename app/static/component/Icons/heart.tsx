import { IconProps } from "@/app/types/static";

export function HeartIcon({ w, h, f, s }: IconProps) {
  const height = h ? h : "40";
  const width = w ? w : "40";
  let fill = f ? f : "white";
  let stroke = s ? s : "#292D32";

  return (
    <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="white" />
      <path
        d="M20.62 28.81C20.28 28.93 19.72 28.93 19.38 28.81C16.48 27.82 10 23.69 10 16.69C10 13.6 12.49 11.1 15.56 11.1C17.38 11.1 18.99 11.98 20 13.34C21.01 11.98 22.63 11.1 24.44 11.1C27.51 11.1 30 13.6 30 16.69C30 23.69 23.52 27.82 20.62 28.81Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
