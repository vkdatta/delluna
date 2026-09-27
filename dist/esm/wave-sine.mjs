export const name="wave-sine";
export const id="dl_3859250c0006c884c1c8";
export const url=new URL("../icons/wave-sine.svg?v=7e0781e058569d04fe92108f24bba8f729e9540122ab9185e9d554b3946ee0fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
