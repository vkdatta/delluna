export const name="border_clear-fill";
export const id="dl_0818fe45a67c4389a2dd";
export const url=new URL("../icons/B/border_clear-fill.svg?v=569d9153a172764f1d61a8c00e97ceb252e589f5da176a8b7f6b29c3d2a31921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
