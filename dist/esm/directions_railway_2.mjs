export const name="directions_railway_2";
export const id="dl_0b134a22db0fbb72b952";
export const url=new URL("../icons/directions_railway_2.svg?v=5b7fc195d663490e4a076bb2e529d1fdad0f9784125a29ae5b6fbaf668ad684b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
