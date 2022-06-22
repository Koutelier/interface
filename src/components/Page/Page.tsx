import './Page.less';

import {
  ArrowLeftOutlined,
  Box,
  Button,
  Flex,
  Gutter,
  Typography,
} from '@ergolabs/ui-kit';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PageProps {
  width?: number;
  title?: ReactNode | ReactNode[] | string;
  withBackButton?: boolean;
  leftWidget?: ReactNode;
  widgetOpened?: boolean;
  backTo?: string;
  onBackButtonClick?: () => void;
  titleChildren?: ReactNode | ReactNode[] | string;
  className?: string;
  footer?: ReactNode | ReactNode[] | string;
  padding?: Gutter;
}

const Widget = styled.div`
  background: var(--ergo-page-footer-bg);
  border-radius: 16px 0 0 16px;
  margin: 16px 0;
`;

const _Page: React.FC<PageProps> = ({
  children,
  width,
  title,
  withBackButton,
  leftWidget,
  widgetOpened,
  backTo,
  footer,
  className,
  titleChildren,
  onBackButtonClick,
  padding,
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      className="ergodex-form-page-wrapper"
      justify="center"
      align="flex-start"
    >
      <Flex col align="center" position="relative">
        {title && (
          <Flex.Item marginBottom={2} flex={1} style={{ width: '100%' }}>
            <Flex align="center" justify="space-between">
              <Flex.Item>
                <Flex align="center">
                  {withBackButton && (
                    <Flex.Item marginRight={1}>
                      <Button
                        type="text"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => {
                          history.length
                            ? navigate(-1)
                            : backTo && navigate(backTo);
                          onBackButtonClick && onBackButtonClick();
                        }}
                      />
                    </Flex.Item>
                  )}
                  <Typography.Title level={4}>{title}</Typography.Title>
                </Flex>
              </Flex.Item>

              <Flex justify="space-between">{titleChildren}</Flex>
            </Flex>
          </Flex.Item>
        )}
        <Flex justify="center" align="flex-start">
          {widgetOpened && <Widget>{leftWidget}</Widget>}
          <Flex col>
            <Flex.Item style={{ zIndex: 2 }}>
              <Box
                bordered={false}
                className={className}
                padding={padding ? padding : [6, 6]}
                borderRadius="l"
                width={width ?? 0}
              >
                {children}
              </Box>
            </Flex.Item>
            <Flex.Item style={{ zIndex: 0 }}>{footer}</Flex.Item>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Page = styled(_Page)`
  box-shadow: var(--ergo-box-box-shadow-form-wrapper);
`;
