export const name="mountain_steam-fill";
export const id="dl_3f909f3fd4d1f6395714";
export const url=new URL("../icons/mountain_steam-fill.svg?v=996da3d8cbb88288ef29937086bc07d1cc1499b9e34f1445ddcaecefaf68153a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
