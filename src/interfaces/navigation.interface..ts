interface BaseNavigationItem {
  name: string;
  route: string;
}
export interface INavigation extends BaseNavigationItem {
  children?: BaseNavigationItem[];
}

interface MediaLinkIcon {
  src: string;
  width?: number;
  height?: number;
}
export interface IMediaLink extends BaseMediaLinkItem {}

interface BaseMediaLinkItem {
  name: string;
  url: string;
  icon: string;
}
interface BreadcrumbItem {
  text: string;
  href: string;
  "aria-current"?: string;
}

export interface TransitionAnimation {
  name: string;
  delay?: number | string;
  duration?: number | string;
  easing?: string;
  fillMode?: string;
  direction?: string;
}

export interface TransitionAnimationPair {
  old: TransitionAnimation | TransitionAnimation[];
  new: TransitionAnimation | TransitionAnimation[];
}

export interface TransitionDirectionalAnimations {
  forwards: TransitionAnimationPair;
  backwards: TransitionAnimationPair;
}
