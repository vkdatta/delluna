export const name="tally-1";
export const id="dl_4d5039e8d19e4d4db50c";
export const url=new URL("../icons/tally-1.svg?v=03daec107ecc421d88aa3e7889abd2aa730b00e3d8a02a01d92e67b7055d3f94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
