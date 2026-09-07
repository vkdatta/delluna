export const name="shapes-fill";
export const id="dl_2141d992e3b14de1b513";
export const url=new URL("../icons/S/shapes-fill.svg?v=f271aed310730de556cca69e12b6c5ba64becb0c4bdc398d2d8ff330197eca32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
