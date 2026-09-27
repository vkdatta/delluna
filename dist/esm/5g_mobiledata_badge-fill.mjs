export const name="5g_mobiledata_badge-fill";
export const id="dl_d4bb1d275296853ec9d7";
export const url=new URL("../icons/5g_mobiledata_badge-fill.svg?v=f71fc4f1757cbf5c8141e8e69ab76e92969b8c7db5844a193709135618fd6c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
