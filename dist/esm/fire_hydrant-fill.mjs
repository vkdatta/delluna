export const name="fire_hydrant-fill";
export const id="dl_0d262e0594905275e445";
export const url=new URL("../icons/fire_hydrant-fill.svg?v=31a3bfd58e46974f44bc2e7ddd0616482456ac3fb96dad6f538e82cdf3b0ca8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
