export const name="corners-in-duotone";
export const id="dl_52d8762e330945cda53f";
export const url=new URL("../icons/corners-in-duotone.svg?v=eff480e3fd20537e13e4130d2c2cfc254f2334474393a455744921f33f3d3030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
