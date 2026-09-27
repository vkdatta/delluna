export const name="headset_off";
export const id="dl_6a6681cd02497c8157e7";
export const url=new URL("../icons/headset_off.svg?v=49cfe0e3286d010370156ae31d757e735c2225be982e5e7a0c402da1aaa86031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
