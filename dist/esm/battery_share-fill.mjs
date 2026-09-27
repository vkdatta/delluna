export const name="battery_share-fill";
export const id="dl_0ad47f4004d0ef0d1231";
export const url=new URL("../icons/battery_share-fill.svg?v=e58e28057320453ac45d9dffa6d68558fc95edd513f3d9a49088f6a6da2bb058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
