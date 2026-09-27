export const name="pentagram-bold";
export const id="dl_5661f6563c3245bf8cd0";
export const url=new URL("../icons/pentagram-bold.svg?v=83ba77973d3747a1ce7815e5d7cb910b96079c8cf0a074e7d3560e95312cda87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
