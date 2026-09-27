export const name="sword_rose-fill";
export const id="dl_2e4b79f418d66413dd57";
export const url=new URL("../icons/sword_rose-fill.svg?v=e2473316762acbc7fd3d6b9eb4b96d052c79e70a9631b7e9191827c44eaaac02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
