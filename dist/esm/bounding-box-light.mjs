export const name="bounding-box-light";
export const id="dl_541c0fc841d04909bc48";
export const url=new URL("../icons/bounding-box-light.svg?v=5433c8c92b2f1ed61c56e2dc06ebd143c5813b8916320f3bcfe79cd64aafec77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
