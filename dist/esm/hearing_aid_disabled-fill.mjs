export const name="hearing_aid_disabled-fill";
export const id="dl_c3d28a59f6bdb1e6c57e";
export const url=new URL("../icons/hearing_aid_disabled-fill.svg?v=1ef5eab6fe549ad2986cbf9249c83cd7570f81711fd2f7f266757e5294bb44f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
