'use client'
import { IconProps } from "@/app/types/static";
import { useDarkMode } from "./useDarkMode";

export function ShareIcon({ w, h, s, f }: IconProps) {
  const height = h ? h : "22";
  const width = w ? w : "22";
  let fill = f ? f : "#333333";
  let stroke = s ? s : "#333333";   

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9902 16.6236V16.6185C20.8226 14.3601 18.7462 12.6542 16.3508 12.8096C15.026 12.8936 13.8851 13.5301 13.1497 14.4594L9.53766 12.7943C9.67014 12.3513 9.72692 11.8904 9.69177 11.4219C9.65933 10.9458 9.53226 10.4926 9.343 10.075L12.6793 7.97196C13.539 8.7969 14.7638 9.28066 16.0858 9.19409C17.2376 9.12025 18.3082 8.61612 19.0707 7.79628C20.6469 6.09039 20.463 3.501 18.6516 2.01408C17.781 1.29608 16.6455 0.939625 15.4883 1.00837C13.0902 1.16877 11.2788 3.12163 11.4437 5.38003C11.4816 5.8587 11.6032 6.30936 11.7925 6.72692L8.46162 8.83C7.60187 8.00506 6.37983 7.5213 5.06046 7.60787C2.65693 7.76318 0.845503 9.71604 1.01042 11.9744C1.16723 14.2328 3.24903 15.9413 5.64714 15.7885C6.79889 15.7147 7.86953 15.2156 8.63195 14.3958C8.70224 14.3118 8.77254 14.2277 8.84013 14.1412L12.4522 15.8012C12.3251 16.2417 12.2683 16.7025 12.2981 17.1812C12.463 19.4396 14.5367 21.1455 16.9402 20.9902C19.3383 20.8349 21.1497 18.882 20.9902 16.6236ZM15.6046 2.50039C16.3346 2.45456 17.0564 2.68371 17.6107 3.13691C18.1649 3.59521 18.5029 4.23683 18.5516 4.92173C18.657 6.35773 17.5053 7.60278 15.9804 7.70207C14.4583 7.80137 13.1389 6.71673 13.0335 5.28073C12.928 3.84473 14.0798 2.59968 15.6046 2.50039ZM5.54441 14.2965C4.01956 14.3958 2.70019 13.3111 2.59475 11.8802C2.48931 10.4417 3.63294 9.19918 5.16049 9.09988C5.89317 9.04896 6.61775 9.27811 7.16658 9.73641C7.72083 10.1896 8.05878 10.8312 8.11285 11.5161C8.21829 12.9547 7.06655 14.1972 5.54441 14.2965ZM16.8293 19.4982C15.3099 19.5975 13.9878 18.5128 13.8824 17.0768C13.7769 15.6434 14.9287 14.4009 16.4535 14.3016C17.9811 14.2074 19.3005 15.2869 19.4059 16.7229C19.5059 18.1615 18.3569 19.404 16.8293 19.4982Z"
        fill={fill}
        stroke={stroke}
        stroke-width="0.2"
      />
    </svg>
  );
}
