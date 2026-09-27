export const name="place_item-fill";
export const id="dl_8c560b47dc64099e4a16";
export const url=new URL("../icons/place_item-fill.svg?v=880c1f5f2ee071599cf8f37700ce59a647d351d69d2223a136245ba70f7f02af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
