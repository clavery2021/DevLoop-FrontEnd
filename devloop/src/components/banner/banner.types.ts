export interface BannerState {
  show: boolean;
  dismissed: boolean;
}

export interface BannerContentProps {
  onDismiss: () => void;
}

export interface DismissButtonProps {
  onClick: () => void;
}
