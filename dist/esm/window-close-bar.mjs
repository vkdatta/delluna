export const name="window-close-bar";
export const id="dl_24805c39e198eae8d848";
export const url=new URL("../icons/window-close-bar.svg?v=1499cdc5a458d33ee0b2c8d51e983c40d2100cb74dc946b70f2dea8f829045e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
