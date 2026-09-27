export const name="hr_resting-fill";
export const id="dl_18287b28ad56839750a9";
export const url=new URL("../icons/hr_resting-fill.svg?v=6a39390d98a057ddd28e2827be85a1c85e860de5ea1bdc1ceee61e72fdb48a54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
