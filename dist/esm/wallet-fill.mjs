export const name="wallet-fill";
export const id="dl_b69e12dfec604345a634";
export const url=new URL("../icons/W/wallet-fill.svg?v=e419d13382b85966f1261978c5d6264589d837afd7f40329dfb21e9295c2a888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
