// index.d.ts
export {};
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare global {
  interface Window {
    difficult?: string;
    loseTemplate?: HTMLElement;
    winTemplate?: HTMLElement;
    win?: boolean;
    timerdown?: boolean;
    timeout?: ReturnType<typeof setTimeout>;
    timerup?: boolean;
  }
}
