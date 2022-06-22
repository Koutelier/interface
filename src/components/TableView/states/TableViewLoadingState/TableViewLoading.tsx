import { LoadingOutlined, Typography } from '@ergolabs/ui-kit';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { TableViewStateContainer } from '../TableViewStateContainer/TableViewStateContainer';

export interface TableViewLoadingProps {
  readonly height: number;
  readonly children?: ReactNode | ReactNode[];
}

const LoadingIcon = styled(LoadingOutlined)`
  font-size: 40px;
  color: var(--ergo-table-view-icon);
`;

export const TableViewLoading: FC<TableViewLoadingProps> = ({
  height,
  children,
}) => (
  <TableViewStateContainer height={height} icon={<LoadingIcon />}>
    <Typography.Body align="center">{children}</Typography.Body>
  </TableViewStateContainer>
);
