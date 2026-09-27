export const name="e_mobiledata_badge-fill";
export const id="dl_3f1485ee14bd7da2147f";
export const url=new URL("../icons/e_mobiledata_badge-fill.svg?v=6e9c38200e9d46b1e867fc36d1d57bdad1579f6d5020c276a16a343782092ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
