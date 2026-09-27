export const name="nest_cam_iq_outdoor-fill";
export const id="dl_2adee1af136277bb84ca";
export const url=new URL("../icons/nest_cam_iq_outdoor-fill.svg?v=7fe357c429caf94924fbde5514e419dd00c4abf5077a759fa654707022731ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
