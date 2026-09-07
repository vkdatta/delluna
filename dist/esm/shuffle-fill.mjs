export const name="shuffle-fill";
export const id="dl_edfc42ec59184ed48844";
export const url=new URL("../icons/S/shuffle-fill.svg?v=4e3b3d19192ae67ae051e06767e42f69cfb1f33c90c1c39d6387fe3ca55aa164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
