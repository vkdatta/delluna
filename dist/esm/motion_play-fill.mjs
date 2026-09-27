export const name="motion_play-fill";
export const id="dl_a5e9454ad160b81d531f";
export const url=new URL("../icons/motion_play-fill.svg?v=f6bb7ff3d6a6ed5394b5c1e0df5908d14aa869281cbe87dc178ce7f3016eaa2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
