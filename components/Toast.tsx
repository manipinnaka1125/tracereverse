"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { cn } from '../lib/utils';

interface ToastProps {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose: (id: string) => void;
}

const Toast = ({ id, title, message, type, duration = 5000, onClose }: ToastProps) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      
      if (remaining === 0) {
        onClose(id);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [id, duration, onClose]);

  const icons = {
    info: <InformationCircleIcon className="w-5 h-5 text-blue-500" />,
    success: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
    warning: <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />,
    error: <XCircleIcon className="w-5 h-5 text-red-500" />
  };

  const bgColors = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  };

  const progressColors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={cn(
        "relative p-4 rounded-lg border shadow-lg max-w-sm w-full overflow-hidden",
        bgColors[type]
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{message}</p>
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <XMarkIcon className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
        <div 
          className={cn("h-full transition-all duration-75 ease-linear", progressColors[type])}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    createdAt: number;
  }>>([]);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Global toast function
  useEffect(() => {
    (window as any).showToast = (title: string, message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
      const id = Date.now().toString();
      setToasts(prev => [...prev, { id, title, message, type, createdAt: Date.now() }]);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              {...toast}
              onClose={removeToast}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Hook for easy toast usage
export const useToast = () => {
  const showToast = (title: string, message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast(title, message, type);
    }
  };

  return { showToast };
};
