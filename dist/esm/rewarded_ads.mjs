export const name="rewarded_ads";
export const id="dl_81a90b82dcf823cb28e6";
export const url=new URL("../icons/rewarded_ads.svg?v=a72985f714ddf32410ec38e5ad3a741f02284978f0eb3b7ae4075e5eb3559046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
