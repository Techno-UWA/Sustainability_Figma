import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { TimeLightBase } from '../TimeLightBase/TimeLightBase';
import classes from './IPhoneX11ProLightBase.module.css';
import { NotchIcon } from './NotchIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rightSide?: ReactNode;
    _941?: ReactNode;
  };
}
/* @figmaId 1:4 */
export const IPhoneX11ProLightBase: FC<Props> = memo(function IPhoneX11ProLightBase(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.notch}>
        <NotchIcon className={classes.icon} />
      </div>
      <div className={classes.rightSide}>{props.swap?.rightSide || <RightSideIcon className={classes.icon2} />}</div>
      <TimeLightBase
        className={classes.timeLightBase}
        swap={{
          _941: props.swap?._941,
        }}
      />
    </div>
  );
});
