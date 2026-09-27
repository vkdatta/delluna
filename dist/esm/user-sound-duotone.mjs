export const name="user-sound-duotone";
export const id="dl_98fa2b485d377177e90f";
export const url=new URL("../icons/user-sound-duotone.svg?v=f480f586c18b7d22ed4e76e71df5f71779fe7b1ea8917b69d9dc958b2f97cbdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
