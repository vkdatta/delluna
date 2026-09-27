export const name="8k_plus-fill";
export const id="dl_09ba6a84771ab3b52723";
export const url=new URL("../icons/8k_plus-fill.svg?v=534cbf92dae81026f0e92cec3b205eca7e1aa0d72558f12258e49a3960da705f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
