export const name="switch_access_shortcut-fill";
export const id="dl_ae7328a86c07f5868cfc";
export const url=new URL("../icons/switch_access_shortcut-fill.svg?v=54a0027351749504fd32e002bb60a0c50a191aa2f085947032baaec6ba77a561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
