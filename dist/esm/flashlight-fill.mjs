export const name="flashlight-fill";
export const id="dl_b375f4d372f74a51abca";
export const url=new URL("../icons/flashlight-fill.svg?v=ebad530320d6fd83ddc2831ff39f44aca28d4fac152f2aa2b853d7250b66271c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
