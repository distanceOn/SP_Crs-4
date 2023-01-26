// index.d.ts
export {};
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare global {
  interface Window {
    difficult?: string;
    compares?: any;
    winOrLose?: boolean;
  }
}
