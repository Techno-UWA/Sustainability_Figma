import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.875 1.75C1.28921 1.75 1.625 1.41421 1.625 1C1.625 0.585786 1.28921 0.25 0.875 0.25C0.460786 0.25 0.125 0.585786 0.125 1C0.125 1.41421 0.460786 1.75 0.875 1.75Z'
      stroke='#666666'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
