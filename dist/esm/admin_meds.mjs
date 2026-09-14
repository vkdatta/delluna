export const name="admin_meds";
export const id="dl_2905943b32bc455e96d6";
export const url=new URL("../icons/A/admin_meds.svg?v=1949be2840397957961e9b6beb86c36f16f2813cd95ac7da720535fc196603b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
