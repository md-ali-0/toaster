import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Toaster from '../components/Toaster';
import toast from '../toast';
import { ToastType, ToasterProps } from '../types';

interface ToastContextProps {
  addToast: (message: string, type: ToastType, duration?: number) => void;
}

interface ToastProviderProps {
  children: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, position = 'top-right' }) => {
  const [toasts, setToasts] = useState<ToasterProps['toasts']>([]);

  const addToast = (message: string, type: ToastType, duration: number = 3000) => {
    setToasts((currentToasts) => [...currentToasts, { message, type, duration }]);
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.message !== message));
    }, duration);
  };

  useEffect(() => {
    toast.setAddToast(addToast);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Toaster toasts={toasts} position={position} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
