export const name="top-direct-plus";
export const id="dl_219a7b911ee581fbd934";
export const url=new URL("../icons/top-direct-plus.svg?v=98374477bf6e5943372bb97271ea319302c2f8dd6a483fb3829ea0b948e30822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
