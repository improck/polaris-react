import * as PropTypes from 'prop-types';
import {
  ContextualSaveBarProps,
  ToastProps,
  AppProviderContext,
  ThemeProviderContext,
} from '.';

export interface PolarisContext
  extends AppProviderContext,
    ThemeProviderContext {}

export interface FrameManager {
  showToast(toast: {id: string} & ToastProps): void;
  hideToast(toast: {id: string}): void;
  setContextualSaveBar(props: ContextualSaveBarProps): void;
  removeContextualSaveBar(): void;
  startLoading(): void;
  stopLoading(): void;
}

export interface FrameContext {
  frame: FrameManager;
}

export const frameContextTypes = {
  frame: PropTypes.object.isRequired,
};

export type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';
