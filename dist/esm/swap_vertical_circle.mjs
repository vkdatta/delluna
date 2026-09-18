export const name="swap_vertical_circle";
export const id="dl_dca346721c554965b753";
export const url=new URL("../icons/S/swap_vertical_circle.svg?v=0a56b1617c7a1293feb6652d300c0b2207d0e8aca265697830ff0a299b0b6cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
