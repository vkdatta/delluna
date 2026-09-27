export const name="shield_with_heart-fill";
export const id="dl_2389b9ecb2e566ac7497";
export const url=new URL("../icons/shield_with_heart-fill.svg?v=c5c94d2e18cc168b84dd6065976b0865fa86c2885701864d13d143d5e7903165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
