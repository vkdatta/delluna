export const name="admin_meds";
export const id="dl_3f4d9fe945a3f66fb1a4";
export const url=new URL("../icons/admin_meds.svg?v=e2095aae729bb3ba88e107ff13b60336c31c7a63c855474c583d0688b0be0469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
