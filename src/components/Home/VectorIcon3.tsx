import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.875 2C1.28921 2 1.625 1.66421 1.625 1.25C1.625 0.835786 1.28921 0.5 0.875 0.5C0.460786 0.5 0.125 0.835786 0.125 1.25C0.125 1.66421 0.460786 2 0.875 2Z'
      stroke='#666666'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
