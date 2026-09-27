export const name="admin_meds-fill";
export const id="dl_691d410f7a673763a6ad";
export const url=new URL("../icons/admin_meds-fill.svg?v=e8c7046546ca94de411aefa5db3fcb4711db5a81d4a69af265dcb0f16ddf2b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
