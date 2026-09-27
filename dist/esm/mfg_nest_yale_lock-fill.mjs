export const name="mfg_nest_yale_lock-fill";
export const id="dl_8ad94e3aeab94e2a2a16";
export const url=new URL("../icons/mfg_nest_yale_lock-fill.svg?v=3a1fc48f923d90325613e09ec38a3aef0845222b6ebbabfa322d4714bb1cc6ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
