// SPDX-License-Identifier: ice License 1.0

import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

export const LockIcon = (props: SvgProps) => {
  return (
    <Svg width="8" height="10" viewBox="0 0 8 10" fill="none" {...props}>
      <Path
        d="M6.8686 4.36738H6.29806V2.65576C6.29806 1.40057 5.27108 0.373596 4.01589 0.373596C2.76071 0.373596 1.73373 1.40057 1.73373 2.65576V4.36738H1.16319C0.877922 4.36738 0.592651 4.65265 0.592651 4.93792V8.9317C0.592651 9.21697 0.877922 9.50224 1.16319 9.50224H6.8686C7.15387 9.50224 7.43914 9.21697 7.43914 8.9317V4.93792C7.43914 4.65265 7.15387 4.36738 6.8686 4.36738ZM4.58643 8.36116H3.44535L3.67357 7.10597C3.3883 6.99187 3.16008 6.64954 3.16008 6.36427C3.16008 5.90784 3.55946 5.50846 4.01589 5.50846C4.47233 5.50846 4.87171 5.90784 4.87171 6.36427C4.87171 6.7066 4.70054 6.99187 4.35822 7.10597L4.58643 8.36116ZM5.15698 4.36738H2.87481V2.65576C2.87481 2.02816 3.3883 1.51468 4.01589 1.51468C4.64349 1.51468 5.15698 2.02816 5.15698 2.65576V4.36738Z"
        fill="white"
      />
    </Svg>
  );
};
