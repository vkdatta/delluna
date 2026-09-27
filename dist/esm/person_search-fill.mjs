export const name="person_search-fill";
export const id="dl_e13936b9c7ee9715cd09";
export const url=new URL("../icons/person_search-fill.svg?v=3e8402979b88bb69f093eff5c9c734c40b2d86bb64d91fbafb0e16b3b8a3070c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
