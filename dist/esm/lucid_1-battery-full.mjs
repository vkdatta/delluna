export const name="lucid_1-battery-full";
export const id="dl_5ccd9ae0a467453cba38";
export const url=new URL("../icons/lucid_1-battery-full.svg?v=d268a274bcbbebe1cefdcc7de14db69217fa7811239d27a1c681a4403eb689f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
