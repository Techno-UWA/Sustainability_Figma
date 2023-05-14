import { memo, SVGProps } from 'react';

const ActivityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 12H18L15 21L9 3L6 12H2'
      stroke='#838383'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ActivityIcon);
export { Memo as ActivityIcon };
