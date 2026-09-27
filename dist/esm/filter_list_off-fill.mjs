export const name="filter_list_off-fill";
export const id="dl_a153177fe3e2325f9a07";
export const url=new URL("../icons/filter_list_off-fill.svg?v=e06f865438cb5a2ee52858d774a07f278bd90355fc348a048e96647dc9e93efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
