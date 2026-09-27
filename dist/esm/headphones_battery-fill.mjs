export const name="headphones_battery-fill";
export const id="dl_6b935e7d84f00ef2676b";
export const url=new URL("../icons/headphones_battery-fill.svg?v=f997ab07e3e31ad2ce881698693be69e38b7b8c4dba0d32e52a1dca96e12b9c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
