import { useState, ReactElement } from 'react';
import { TriggerProps } from 'rc-trigger';

import Trigger from './Trigger';

export interface TooltipProps {
  children: ReactElement;
  placement?: TriggerProps['popupPlacement'];
  text: string;
  hidden?: boolean;
}

export default function Tooltip({ children, placement, text, hidden }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Trigger
      popupPlacement={placement || 'top'}
      popupVisible={(hidden === undefined || !hidden) && visible}
      onPopupVisibleChange={(i) => {
        setVisible(i);
      }}
      mouseEnterDelay={2}
      popup={<div className="bg-alert text-center px-2 rounded-md m-1">{text}</div>}
      action={['hover']}
    >
      {children}
    </Trigger>
  );
}
