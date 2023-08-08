import { useId } from 'react';
import clsx from 'clsx';

export function Logomark({ invert = false, filled = false, ...props }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath="url(#logomark-clip)"
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
        )}
      />
      <use
        href="#logomark-path"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id="logomark-path"
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id="logomark-clip">
          <use href="#logomark-path" />
        </clipPath>
      </defs>
    </svg>
  );
}




export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  // Replace the provided SVG code with the actual SVG content
  const logoSvg = (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="32.000000pt"
      height="32.000000pt"
      viewBox="0 0 1539.000000 1434.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1434.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M7465 14323 c-1049 -88 -1968 -671 -2516 -1595 -230 -386 -374 -805 -446 -1293 -26 -176 -26 -716 0 -900 110 -776 433 -1433 966 -1965 522 -520 1170 -832 1901 -916 202 -23 606 -15 804 16 1344 207 2421 1258 2696 2630 118 587 81 1205 -105 1765 -170 514 -436 946 -815 1325 -261 262 -531 456 -855 615 -456 225 -906 328 -1410 323 -99 -1 -198 -3 -220 -5z" />
        <path d="M2960 6690 c-907 -86 -1715 -540 -2274 -1280 -202 -268 -348 -534 -469 -856 -298 -796 -283 -1721 42 -2512 418 -1015 1306 -1763 2341 -1972 229 -46 389 -62 635 -62 413 0 769 66 1146 213 923 360 1660 1175 1943 2149 285 976 132 2031 -414 2859 -532 807 -1332 1315 -2275 1446 -132 19 -541 27 -675 15z" />
        <path d="M8308 6138 c11 -18 800 -1367 1752 -2998 953 -1631 1742 -2982 1754 -3002 l22 -38 1754 3003 c965 1651 1763 3017 1773 3035 l19 32 -3547 0 -3547 0 20 -32z" />
      </g>
    </svg>
  );

  return (
    <div className="flex items-center">
      {logoSvg}

      <h1 className="ml-2 font-bold text-xl">Drop The Code.</h1>
    </div>
  );
}






