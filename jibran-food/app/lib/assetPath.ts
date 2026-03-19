/**
 * Helper to prepend basePath to asset URLs for GitHub Pages compatibility
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
