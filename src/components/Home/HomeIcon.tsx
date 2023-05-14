import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
      stroke='url(#paint0_linear_17_296)'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 22V12H15V22'
      stroke='url(#paint1_linear_17_296)'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_17_296'
        x1={3}
        y1={16.9398}
        x2={21.8882}
        y2={1.96422}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFA450' />
        <stop offset={0.604477} stopColor='#FF5C00' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_17_296'
        x1={9}
        y1={19.4699}
        x2={17.0147}
        y2={15.2336}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFA450' />
        <stop offset={0.604477} stopColor='#FF5C00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
