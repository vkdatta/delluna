export const name="selection-foreground-light";
export const id="dl_5859c733e12005e12d4b";
export const url=new URL("../icons/selection-foreground-light.svg?v=335fb19bde788fde478c1d1a864577c04b58792c1541880e8a6be888f6b133c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
