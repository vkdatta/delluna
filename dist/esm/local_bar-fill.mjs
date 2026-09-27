export const name="local_bar-fill";
export const id="dl_15339acb11e9b19385c4";
export const url=new URL("../icons/local_bar-fill.svg?v=bc94077d4d74509c9c24da1821431334c3722a93667216894287a4f344ab654f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
