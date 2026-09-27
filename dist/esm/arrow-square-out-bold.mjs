export const name="arrow-square-out-bold";
export const id="dl_f34dd41e31564e75a932";
export const url=new URL("../icons/arrow-square-out-bold.svg?v=0364db215c5edd308bb961ac13eaf5f50a2d01e691122e73b7104e262044ce2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
