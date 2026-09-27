export const name="close_small-fill";
export const id="dl_c7bcad7172e95d4f7a53";
export const url=new URL("../icons/close_small-fill.svg?v=5e97bb901157258f96ea67a0a11362ace514d053a0a68c9a68a69df54076a504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
