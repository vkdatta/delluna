export const name="emergency_share_off-fill";
export const id="dl_bf73cefa0f23d42ba592";
export const url=new URL("../icons/emergency_share_off-fill.svg?v=d679bd90d40bf43bb0d5d358884a8515233806c01161d3a2111b1208782841d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
