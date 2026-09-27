export const name="ruler-fill";
export const id="dl_fcc24afd6cc9459685d6";
export const url=new URL("../icons/ruler-fill.svg?v=426c51b869c142d41c6b649422431ed2a97f787dcd9f2d41d2f0846a49ea95c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
