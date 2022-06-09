import React, { FC } from 'react';

import { isSwapOperation, Operation } from '../../common/models/Operation';
import { DialogRef } from '../../ergodex-cdk';
import { TableView } from '../TableView/TableView';
import { DateTimeCell } from './cells/DateTimeCell/DateTimeCell';
import { DepositAssetCell } from './cells/DepositAssetCell/DepositAssetCell';
import { StatusCell } from './cells/StatusCell/StatusCell';
import { SwapAssetCell } from './cells/SwapAssetCell/SwapAssetCell';
import { TypeCell } from './cells/TypeCell/TypeCell';
import { LoadingState } from './states/LoadingState/LoadingState';
import { OperationSearchEmptyState } from './states/OperationSearchEmptyState/OperationSearchEmptyState';
import { OperationsEmptyState } from './states/OperationsEmptyState/OperationsEmptyState';

export interface TransactionHistoryTableProps extends DialogRef {
  readonly operations: Operation[];
  readonly loading: boolean;
  readonly emptySearch: boolean;
  readonly emptyOperations: boolean;
}

export const OperationHistoryTable: FC<TransactionHistoryTableProps> = ({
  operations,
  loading,
  emptySearch,
  emptyOperations,
  close,
}) => (
  <TableView
    itemHeight={80}
    items={operations}
    maxHeight={376}
    tableHeaderPadding={[0, 6]}
    tableItemViewPadding={[0, 2]}
    gap={1}
    itemKey="id"
  >
    <TableView.Column title="Assets" width={218} headerWidth={202}>
      {(op: Operation) =>
        isSwapOperation(op) ? (
          <SwapAssetCell base={op.base} quote={op.quote} />
        ) : (
          <DepositAssetCell x={op.x} y={op.y} />
        )
      }
    </TableView.Column>
    <TableView.Column title="Type" width={152}>
      {(op: Operation) => <TypeCell type={op.type} />}
    </TableView.Column>
    <TableView.Column title="Date & Time" width={152}>
      {(op: Operation) => <DateTimeCell dateTime={op.dateTime} />}
    </TableView.Column>
    <TableView.Column title="Status" width={152}>
      {(op: Operation) => <StatusCell status={op.status} />}
    </TableView.Column>
    <TableView.State condition={loading} name="loading">
      <LoadingState />
    </TableView.State>
    <TableView.State condition={emptyOperations} name="empty">
      <OperationsEmptyState onSwapNowButtonClick={close} />
    </TableView.State>
    <TableView.State condition={emptySearch} name="search">
      <OperationSearchEmptyState />
    </TableView.State>
  </TableView>
);
