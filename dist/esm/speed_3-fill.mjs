export const name="speed_3-fill";
export const id="dl_31c3d1f73fb2d77f0f00";
export const url=new URL("../icons/speed_3-fill.svg?v=c93c22def4984187f9a615fcfe76e40f1d958482428c5b7f28f6135d1751a496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
