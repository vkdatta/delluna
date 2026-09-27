export const name="aod_watch";
export const id="dl_f2a16418092a10d6639f";
export const url=new URL("../icons/aod_watch.svg?v=5c3afeaa2256eafd340480f0488fec9eb229960a08197d2b1ecd534bb952438a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
