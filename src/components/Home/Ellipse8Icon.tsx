import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={37} cy={37.5} rx={37} ry={37.5} fill='#94EE6A' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
