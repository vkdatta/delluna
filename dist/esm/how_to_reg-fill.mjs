export const name="how_to_reg-fill";
export const id="dl_1d76e4097adb51673525";
export const url=new URL("../icons/how_to_reg-fill.svg?v=494e9d7faf5cf81be8c0dcfa47dedec1a3bf618dedd4f56da6897bb20253a60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
