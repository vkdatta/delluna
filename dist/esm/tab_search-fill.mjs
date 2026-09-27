export const name="tab_search-fill";
export const id="dl_454288d8f14d9b8f56ad";
export const url=new URL("../icons/tab_search-fill.svg?v=01339935687e24cf58e411235944250a313bf07296848875ed16cbad6b6459e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
