export const name="group_search-fill";
export const id="dl_ccdbaf767ef9ac0eeb10";
export const url=new URL("../icons/group_search-fill.svg?v=17241258627360a205474cfcdb927012b388ef976b3bbe4147724c7acd480550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
