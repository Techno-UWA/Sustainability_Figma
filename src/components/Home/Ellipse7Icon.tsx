import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={37} cy={37.5} rx={37} ry={37.5} fill='#F6FA51' />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
