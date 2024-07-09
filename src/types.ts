export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
  paused?: boolean;
  timeoutId?: NodeJS.Timeout; // Updated type
}

export interface ToasterProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  duration?: number;
  pausedOnHover?: boolean;
}
