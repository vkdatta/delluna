export const name="split-horizontal";
export const id="dl_8eb6a4732ed58d60ad7f";
export const url=new URL("../icons/split-horizontal.svg?v=f3d32ec23b81cac6b9d53e27b825bca9a1f34678c7f1dbd348b7206b87bdcfcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
