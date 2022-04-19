import React from 'react';

import { CardanoWalletContract } from '../common/CardanoWalletContract';
import { makeCardanoWallet } from '../common/makeCardanoWallet';
import { ReactComponent as EternlLogo } from './eternl-icon.svg';

export const Eternl: CardanoWalletContract = makeCardanoWallet({
  variableName: 'eternl',
  extensionLink:
    'https://chrome.google.com/webstore/detail/eternlcc/kmhcihpebfmpgmihbkipmjlmmioameka',
  walletSupportedFeatures: { createPool: true },
  name: 'Eternl',
  icon: <EternlLogo />,
  previewIcon: <EternlLogo width={21} height={21} />,
});
