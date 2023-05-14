import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _941Icon } from './_941Icon';
import { ActivityIcon } from './ActivityIcon';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { EmojiSmilingFaceWithHeartShape } from './EmojiSmilingFaceWithHeartShape';
import { FluentAddCircle24FilledIcon } from './FluentAddCircle24FilledIcon';
import { Group136Icon } from './Group136Icon';
import classes from './Home.module.css';
import { HomeIcon } from './HomeIcon';
import { IconCheckIcon } from './IconCheckIcon';
import { IconCheckIcon2 } from './IconCheckIcon2';
import { IPhoneX11ProLightBase } from './IPhoneX11ProLightBase/IPhoneX11ProLightBase';
import { MoreVerticalIcon } from './MoreVerticalIcon';
import { RightSideIcon } from './RightSideIcon';
import { SettingsIcon } from './SettingsIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';

interface Props {
  className?: string;
}
/* @figmaId 1:261 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle42}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.group136}>
        <Group136Icon className={classes.icon3} />
      </div>
      <div className={classes._4560}>4560</div>
      <div className={classes.helloJohn}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Hello</span>
          <span className={classes.label2}>, </span>
          <span className={classes.label3}>John!</span>
        </p>
      </div>
      <div className={classes.tue16May2023}>Tue, 16 May 2023</div>
      <div className={classes.yourTotalPoints}>Your total points:</div>
      <div className={classes.frame59}>
        <div className={classes.frame58}>
          <div className={classes.home}>
            <HomeIcon className={classes.icon4} />
          </div>
          <div className={classes.activity}>
            <ActivityIcon className={classes.icon5} />
          </div>
          <div className={classes.settings}>
            <SettingsIcon className={classes.icon6} />
          </div>
        </div>
      </div>
      <div className={classes.iPhoneX11ProLightBase2}>iPhone X, 11 Pro / Light / Base</div>
      <IPhoneX11ProLightBase
        className={classes.iPhoneX11ProLightBase}
        swap={{
          rightSide: <RightSideIcon className={classes.icon} />,
          _941: <_941Icon className={classes.icon2} />,
        }}
      />
      <div className={classes.frame54}>
        <div className={classes.yourGoals}>Your Goals</div>
        <div className={classes.seeAll}>See all</div>
      </div>
      <div className={classes.cycleToWork}>Cycle to work</div>
      <div className={classes.connectedStrava}>Connected: Strava</div>
      <div className={classes.everyday}>Everyday</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon7} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon8} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon9} />
      </div>
      <div className={classes.frame4}>
        <div className={classes.frame102}>
          <div className={classes.frame101}>
            <div className={classes.frame3}>
              <div className={classes.goingPaperless}>Going paperless</div>
              <div className={classes.connectedPaperCutMF}>Connected: PaperCut MF</div>
              <div className={classes.everyday2}>Everyday</div>
            </div>
          </div>
        </div>
        <div className={classes.moreVertical}>
          <MoreVerticalIcon className={classes.icon10} />
        </div>
        <div className={classes.ellipse8}>
          <Ellipse8Icon className={classes.icon11} />
        </div>
        <div className={classes.IconCheck}>
          <IconCheckIcon className={classes.icon12} />
        </div>
      </div>
      <div className={classes.frame15}>
        <div className={classes.fluentAddCircle24Filled}>
          <FluentAddCircle24FilledIcon className={classes.icon13} />
        </div>
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon14} />
      </div>
      <div className={classes.IconCheck2}>
        <IconCheckIcon2 className={classes.icon15} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon16} />
      </div>
      <div className={classes.EmojiSmilingFaceWithHeartShape}>
        <EmojiSmilingFaceWithHeartShape className={classes.icon17} />
      </div>
    </div>
  );
});
