/// <reference types="vite/client" />

export const a = import.meta.env['VITE_INSTANCE'];

export function pocPlainJsEsbuild(): string {
  return `poc-plain-js-esbuild - ${a}`;
}

export function getNotificationTitle(): string {
  return `notification title - ${a}`;
}