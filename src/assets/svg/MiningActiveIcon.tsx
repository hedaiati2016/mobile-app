// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const MiningActiveIcon = ({
  color = COLORS.white,
  ...props
}: SvgProps) => (
  <Svg width={rem(24)} height={rem(24)} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#a)" fill={color}>
      <Path
        fill={color}
        d="M7.04804 5.72722C7.2159 5.64494 7.28638 5.43987 7.20546 5.26919L7.05731 4.95668C6.97639 4.786 6.77471 4.71433 6.60685 4.79661L1.19098 7.45123C1.02311 7.5335 0.95263 7.73857 1.03355 7.90926L1.1817 8.22176C1.26262 8.39245 1.4643 8.46411 1.63216 8.38183L7.04804 5.72722Z"
      />
      <Path
        fill={color}
        d="M9.6554 2.79317C9.70781 2.85452 9.76206 2.89671 9.78872 2.95251C10.0534 3.5067 10.3153 4.0623 10.5743 4.61929C10.6443 4.76929 10.5989 4.89427 10.4496 4.96714C9.7693 5.29927 9.08838 5.63016 8.40687 5.95981C8.25149 6.03498 8.1304 5.99139 8.05644 5.83497C7.79703 5.28635 7.53876 4.73718 7.28163 4.18745C7.2053 4.02427 7.2484 3.90488 7.41086 3.82572C8.08817 3.4957 8.76609 3.16698 9.44462 2.83958C9.50586 2.81017 9.58019 2.80894 9.6554 2.79317Z"
      />
      <Path
        fill={color}
        d="M9.02653 2.49389C8.6175 2.69243 8.21263 2.88895 7.79955 3.08946C7.791 3.07306 7.77335 3.04189 7.75812 3.00953C7.34939 2.14097 6.94118 1.27216 6.53349 0.4031C6.50436 0.348217 6.48706 0.287664 6.48271 0.225462C6.4821 0.0453555 6.68341 -0.0643377 6.84018 0.041367C7.07799 0.201707 7.317 0.365263 7.53128 0.555619C8.141 1.09724 8.61324 1.75334 9.01438 2.46455C9.01925 2.47395 9.02332 2.48377 9.02653 2.49389Z"
      />
      <Path
        fill={color}
        d="M9.21554 6.11082L10.4507 5.51049C10.4875 5.61152 10.5293 5.72 10.5669 5.82996C10.85 6.65742 11.0317 7.5028 10.9954 8.38534C10.9902 8.51009 10.9743 8.63466 10.9578 8.75856C10.939 8.9002 10.8674 8.98032 10.7544 8.99708C10.6418 9.01379 10.5559 8.95913 10.4931 8.82572C10.1656 8.13052 9.8386 7.43513 9.51195 6.73955C9.41215 6.52733 9.31196 6.31531 9.21554 6.11082Z"
      />
      <Path
        fill={color}
        d="M12 24L13.122 16.2413L12 12.3448L10.878 16.2413L12 24Z"
      />
      <Path
        fill={color}
        d="M24 11.5638L16.5135 10.401L12.7537 11.5638L16.5135 12.7265L24 11.5638Z"
      />
      <Path
        fill={color}
        d="M0 11.5638L7.48652 12.7265L11.2463 11.5638L7.48652 10.401L0 11.5638Z"
      />
      <Path
        fill={color}
        d="M18.3333 5L14.3742 7.41894L12.53 11.008L15.9705 9.05329L18.3333 5Z"
      />
      <Path
        fill={color}
        d="M3.5662 20.4109L9.62584 15.7086L11.47 12.1195L8.02952 14.0743L3.5662 20.4109Z"
      />
      <Path
        fill={color}
        d="M20.5362 20.3042L15.9988 14.0242L12.5356 12.113L14.4218 15.6786L20.5362 20.3042Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={props.width} height={props.height} fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
