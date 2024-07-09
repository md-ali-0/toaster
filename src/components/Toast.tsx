import { useToast } from "../context/ToastContext";

const toast = (message: string, duration?: number) => {
  const { addToast } = useToast();
  addToast(message, 'info', duration);
};

toast.success = (message: string, duration?: number) => {
  const { addToast } = useToast();
  addToast(message, 'success', duration);
};

toast.error = (message: string, duration?: number) => {
  const { addToast } = useToast();
  addToast(message, 'error', duration);
};

toast.warning = (message: string, duration?: number) => {
  const { addToast } = useToast();
  addToast(message, 'warning', duration);
};

export default toast;
