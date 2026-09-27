export const name="adf_scanner-fill";
export const id="dl_f57c2c7817b8fc21a137";
export const url=new URL("../icons/adf_scanner-fill.svg?v=eda942fd99f0507ddef542aad20e885b41e0ea4a7b9bf6cf6f3293b82d49a8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
