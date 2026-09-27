export const name="mobile_wrench-fill";
export const id="dl_e08b14d745dd7a16f7d0";
export const url=new URL("../icons/mobile_wrench-fill.svg?v=69e5ec5faa5dae692c46093874121fefd932c52297843cf50f56fde98e47d722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
