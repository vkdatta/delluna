export const name="briefcase-metal-bold";
export const id="dl_ac6479efb5e445a88988";
export const url=new URL("../icons/briefcase-metal-bold.svg?v=d06b7736b660c8718b204f7154f5b888e57f8bb6f8338081589af902e76d7df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
