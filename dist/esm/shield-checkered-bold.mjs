export const name="shield-checkered-bold";
export const id="dl_b43426171af5dc28e7d9";
export const url=new URL("../icons/shield-checkered-bold.svg?v=31f64d30285ef5d600f0e4915de3c45fda0f64515556e1092a62477711204e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
