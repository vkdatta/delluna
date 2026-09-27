export const name="local_pharmacy-fill";
export const id="dl_8bda78545ced0b4524d5";
export const url=new URL("../icons/local_pharmacy-fill.svg?v=72e8dd6d9890bf62cfede9c02bb79dc1e857089836279195a4eab082c32925a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
