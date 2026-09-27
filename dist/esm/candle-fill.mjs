export const name="candle-fill";
export const id="dl_7b02e1cbd6cf4d5d18f1";
export const url=new URL("../icons/candle-fill.svg?v=e967f66c2272315259297ada32b55d027d9c540bece45634724d1828764cca9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
