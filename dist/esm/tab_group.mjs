export const name="tab_group";
export const id="dl_b447b261319764fd8f2a";
export const url=new URL("../icons/tab_group.svg?v=0de72056e198700dc2b52813bd7ca05b8751806d03597c19e4301be467ce3d29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
