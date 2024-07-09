import { Toast, ToastType } from './types';

class ToastManager {
  private listeners: ((toasts: Toast[]) => void)[] = [];
  private toasts: Toast[] = [];
  private idCounter = 0;
  private defaultDuration = 2000; // Default duration for toasts

  private notifyListeners() {
    this.listeners.forEach(listener => listener([...this.toasts]));
  }

  public subscribe(listener: (toasts: Toast[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  public setDefaultDuration(duration: number) {
    this.defaultDuration = duration;
  }

  public addToast(message: string, type: ToastType = 'info', duration: number = this.defaultDuration) {
    const id = this.idCounter++;
    const newToast: Toast = { id, message, type, duration };
    this.toasts.push(newToast);
    this.notifyListeners();

    const toastTimeout = setTimeout(() => {
      this.removeToast(id);
    }, duration);

    newToast.timeoutId = toastTimeout as NodeJS.Timeout; // Updated cast
  }

  public default(message: string, type: ToastType = 'info', duration?: number) {
    this.addToast(message, type, duration);
  }

  public info(message: string, duration?: number) {
    this.addToast(message, 'info', duration);
  }

  public success(message: string, duration?: number) {
    this.addToast(message, 'success', duration);
  }

  public error(message: string, duration?: number) {
    this.addToast(message, 'error', duration);
  }

  public warning(message: string, duration?: number) {
    this.addToast(message, 'warning', duration);
  }

  public loading(message: string, duration?: number) {
    this.addToast(message, 'loading', duration);
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.notifyListeners();
  }

  public pauseToast(id: number) {
    const toast = this.toasts.find(toast => toast.id === id);
    if (toast && toast.timeoutId) {
      clearTimeout(toast.timeoutId);
      toast.paused = true;
      this.notifyListeners();
    }
  }

  public resumeToast(id: number) {
    const toast = this.toasts.find(toast => toast.id === id);
    if (toast && toast.paused) {
      const remainingTime = toast.duration;
      toast.paused = false;
      this.notifyListeners();

      const toastTimeout = setTimeout(() => {
        this.removeToast(id);
      }, remainingTime);

      toast.timeoutId = toastTimeout as NodeJS.Timeout; // Updated cast
    }
  }
}

const toast = new ToastManager();
export default toast;
