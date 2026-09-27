export const name="mobile_tap";
export const id="dl_6a10c8df143ea074fd6d";
export const url=new URL("../icons/mobile_tap.svg?v=376cfa30a1c5833bf796beb0e0a4540855b94542f4852a60ca8fdbbdaa945160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
