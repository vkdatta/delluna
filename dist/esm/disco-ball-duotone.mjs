export const name="disco-ball-duotone";
export const id="dl_d018b879ee4b4e309154";
export const url=new URL("../icons/disco-ball-duotone.svg?v=19db2eaeb5b4e6c4e6552357c03e510e66c05caaad01f600a3dcfcc869d1f76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
