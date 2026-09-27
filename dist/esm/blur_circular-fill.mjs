export const name="blur_circular-fill";
export const id="dl_932d47e63bed1c3045b7";
export const url=new URL("../icons/blur_circular-fill.svg?v=903f917c783489ab917450f88447a6628b0d2b4fd63a9176f2fa4c6f0bf64444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
