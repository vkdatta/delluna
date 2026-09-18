export const name="join-fill";
export const id="dl_131881c3df75448295a5";
export const url=new URL("../icons/join-fill.svg?v=891660c5bf58192d00dd0f1e594cc8a910716a768c2ac54d3e8582149171e928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
