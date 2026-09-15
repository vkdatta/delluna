export const name="cloud_done-fill";
export const id="dl_f427a5148c524afbad4e";
export const url=new URL("../icons/C/cloud_done-fill.svg?v=0c5ce06f8b9a09ba883ecaf88bffada38b1214dd2cd9e68f1d88218b4699cb80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
