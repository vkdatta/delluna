export const name="tune-fill";
export const id="dl_ae39f7c63186008f77f5";
export const url=new URL("../icons/tune-fill.svg?v=7e648a251f318b0348439bb7b7377c729681c9e7918c686cd8a5754e35bfab6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
