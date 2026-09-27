export const name="fiber_pin-fill";
export const id="dl_bb1bc7b82cfc95a45a59";
export const url=new URL("../icons/fiber_pin-fill.svg?v=43aa189162fa70925e2ba043c72c55c820aa52970b77caaff7c24658f055ffec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
