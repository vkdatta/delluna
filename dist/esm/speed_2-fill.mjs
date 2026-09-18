export const name="speed_2-fill";
export const id="dl_7f43201fd4724cf69c3a";
export const url=new URL("../icons/speed_2-fill.svg?v=ad6126654086d3027d99befccfca6fc38e3ebc47de5753de49441864bb4697b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
