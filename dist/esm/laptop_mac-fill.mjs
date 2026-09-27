export const name="laptop_mac-fill";
export const id="dl_e8b9dc726e509901c63a";
export const url=new URL("../icons/laptop_mac-fill.svg?v=113c38c9624788128222c451c725dacf00497405e16275fac0a1de458c3f8f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
