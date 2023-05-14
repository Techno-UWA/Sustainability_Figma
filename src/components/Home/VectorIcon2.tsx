import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.875 1.5C1.28921 1.5 1.625 1.16421 1.625 0.75C1.625 0.335786 1.28921 0 0.875 0C0.460786 0 0.125 0.335786 0.125 0.75C0.125 1.16421 0.460786 1.5 0.875 1.5Z'
      stroke='#666666'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
