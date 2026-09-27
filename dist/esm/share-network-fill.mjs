export const name="share-network-fill";
export const id="dl_783e6d27f1818d8105fe";
export const url=new URL("../icons/share-network-fill.svg?v=31ef0bb34a2c83d1dc5dd8820c9780984cb928b015c34ea968638c2d00f2d939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
