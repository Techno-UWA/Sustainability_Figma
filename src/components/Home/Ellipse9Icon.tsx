import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 98 98' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={49} cy={49} r={49} fill='white' />
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
