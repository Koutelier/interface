import { Network } from '../common/Network';
import {
  getAddresses,
  getUnusedAddresses,
  getUsedAddresses,
} from './api/addresses/addresses';
import { ammPools$, displayedAmmPools$ } from './api/ammPools/ammPools';
import { ErgoAmmPool } from './api/ammPools/ErgoAmmPool';
import {
  assetsToImport$,
  defaultAssets$,
  getAssetsToImportFor,
  getDefaultAssetsFor,
  getImportedAssetsFor,
  importedAssets$,
} from './api/assets/assets';
import { assetBalance$ } from './api/balance/assetBalance';
import { lpBalance$ } from './api/balance/lpBalance';
import { networkAssetBalance$ } from './api/balance/networkAssetBalance';
import { importTokenAsset } from './api/common/availablePoolsOrTokens';
import { convertToConvenientNetworkAsset } from './api/ergoUsdRatio/ergoUsdRatio';
import { locks$ } from './api/locks/locks';
import { networkAsset, useNetworkAsset } from './api/networkAsset/networkAsset';
import { networkContext$ } from './api/networkContext/networkContext';
import { isSyncing$, sync } from './api/operations/history/transactionHistory';
import { getOperationByTxId, getOperations } from './api/operations/operations';
import { pendingOperations$ } from './api/operations/pending/pendingOperations';
import { queuedOperation$ } from './api/operations/pending/queuedOperation';
import { getPoolChartData } from './api/poolChart/poolChart';
import { positions$ } from './api/positions/positions';
import { ErgoWalletContract } from './api/wallet/common/ErgoWalletContract';
import {
  availableWallets,
  connectWallet,
  disconnectWallet,
  selectedWallet$,
  supportedWalletFeatures$,
  walletState$,
} from './api/wallet/wallet';
import { initialize, initialized$ } from './initialized';
import { deposit } from './operations/deposit/deposit';
import { redeem } from './operations/redeem/redeem';
import { refund } from './operations/refund';
import { swap } from './operations/swap/swap';
import {
  ErgoSettings,
  getSettings,
  setSettings,
  settings$,
} from './settings/settings';
import {
  useCreatePoolValidationFee,
  useDepositValidationFee,
  useRedeemValidationFee,
  useSwapValidationFee,
} from './settings/totalFees';
import {
  exploreAddress,
  exploreLastBlock,
  exploreToken,
  exploreTx,
} from './utils/utils';
import { GlobalSettingsModal } from './widgets/GlobalSettings/GlobalSettingsModal';
import { OperationsSettings } from './widgets/OperationSettings/OperationsSettings';
import { RefundConfirmationInfo } from './widgets/RefundConfirmationInfo/RefundConfirmationInfo';
import { SwapInfoContent } from './widgets/SwapInfoContent/SwapInfoContent';

export const ergoNetwork: Network<
  ErgoWalletContract,
  ErgoSettings,
  ErgoAmmPool
> = {
  name: 'ergo',
  label: 'ergo',
  favicon: '/favicon-ergo.svg',
  convenientAssetDefaultPreview: '<$0.01',
  networkAsset,
  initialized$,
  initialize,
  networkAssetBalance$,
  assetBalance$,
  lpBalance$,
  locks$,
  positions$,
  ammPools$,
  displayedAmmPools$,
  getAddresses,
  getUsedAddresses,
  getUnusedAddresses,
  connectWallet,
  disconnectWallet,
  availableWallets,
  walletState$,
  selectedWallet$,
  supportedFeatures$: supportedWalletFeatures$,
  networkContext$,
  defaultAssets$,
  getDefaultAssetsFor,
  assetsToImport$,
  getAssetsToImportFor,
  importedAssets$,
  getImportedAssetsFor,
  importTokenAsset,

  settings$,
  get settings() {
    return getSettings();
  },
  setSettings,

  swap,
  deposit,
  redeem,
  refund,

  exploreAddress,
  exploreTx,
  exploreLastBlock,
  exploreToken,

  GlobalSettingsModal,
  SwapInfoContent,
  RefundConfirmationInfo,
  OperationsSettings,

  convertToConvenientNetworkAsset,

  useNetworkAsset,
  useSwapValidationFee,
  useDepositValidationFee,
  useRedeemValidationFee,
  useCreatePoolValidationFee,

  getPoolChartData,
  getOperationByTxId,
  getOperations,
  syncOperations: sync,
  isOperationsSyncing$: isSyncing$,
  pendingOperations$,
  queuedOperation$,
};
