export const name="subtract-square-light";
export const id="dl_c737a3ff7af54c5ba822";
export const url=new URL("../icons/S/subtract-square-light.svg?v=e4d3218ec4725858abe0ce704f6ed4999351140bef1574e63f0ed671c25cbb55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
