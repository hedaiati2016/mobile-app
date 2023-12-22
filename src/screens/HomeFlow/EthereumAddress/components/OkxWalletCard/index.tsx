// SPDX-License-Identifier: ice License 1.0

import {Touchable} from '@components/Touchable';
import {LINKS} from '@constants/links';
import {commonStyles} from '@constants/styles';
import {Images} from '@images';
import {DownloadIcon} from '@svg/DownloadIcon';
import {replaceString, t, tagRegex} from '@translations/i18n';
import {openLinkWithInAppBrowser} from '@utils/device';
import {font} from '@utils/styles';
import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {rem} from 'rn-units';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const OkxWalletCard = ({style}: Props) => {
  return (
    <View style={[commonStyles.flexOne, style]}>
      <Touchable
        style={styles.card}
        onPress={() => openLinkWithInAppBrowser({url: LINKS.OKX_WALLET})}>
        <Image
          source={Images.backgrounds.blueSquaresBg}
          style={[StyleSheet.absoluteFill, styles.backgroundImage]}
          resizeMode={'repeat'}
        />
        <Image source={Images.card.okxWallet} style={styles.logoImage} />
        <Text style={styles.descriptionText}>
          {replaceString(
            t('ethereum_address.okxWalletDescription'),
            tagRegex('bold', false),
            (match, index) => (
              <Text key={match + index} style={styles.boldDescriptionText}>
                {match}
              </Text>
            ),
          )}
        </Text>
        <View style={styles.action}>
          <DownloadIcon />
          <Text style={styles.actionText}>
            {t('ethereum_address.okxWalletAction')}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: rem(16),
    paddingVertical: rem(14),
    overflow: 'hidden',
    alignItems: 'center',
  },
  backgroundImage: {
    width: undefined,
    height: undefined,
  },
  logoImage: {
    width: rem(126),
    height: rem(38),
  },
  descriptionText: {
    marginTop: rem(12),
    marginHorizontal: rem(26),
    ...font(12, 18, 'regular', 'white', 'center'),
  },
  boldDescriptionText: {
    ...font(12, 18, 'bold', 'white', 'center'),
  },
  action: {
    marginTop: rem(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    ...font(12, 18, 'bold'),
    marginStart: rem(6),
  },
});