export const name="bid_landscape-fill";
export const id="dl_b15af3ba86e5812957e6";
export const url=new URL("../icons/bid_landscape-fill.svg?v=8857031c3b3ef27e078e9cc9428608ae0150a0f8580af0c5de57c90c8a14bc52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
