export const name="shaved_ice";
export const id="dl_80e39af2ea16ae3877cf";
export const url=new URL("../icons/shaved_ice.svg?v=390855ff3b2c568bb3286625e800043927462181c7625f2494026f6814b3ea7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
