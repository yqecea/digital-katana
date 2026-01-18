export interface ScrollState {
  scrollY: number;
  progress: number;
}

export interface SectionProps {
  id: string;
  className?: string;
}

export enum KatanaState {
  SHEATHED,
  DRAWING,
  UNSHEATHED,
  DECONSTRUCTED
}