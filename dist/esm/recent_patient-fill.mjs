export const name="recent_patient-fill";
export const id="dl_0adf50aad6b24b828208";
export const url=new URL("../icons/recent_patient-fill.svg?v=f602f0f07470998172b3d9a37bca711f19680580bc931fadd43685f9f3efc837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
