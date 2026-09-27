export const name="stylus_laser_pointer-fill";
export const id="dl_ce91eb5ff13472bbf6b9";
export const url=new URL("../icons/stylus_laser_pointer-fill.svg?v=c1f0918b8b83b014a6d4e811262f8ca87e2de67e20689f3d855e6df5215380f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
