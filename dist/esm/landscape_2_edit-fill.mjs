export const name="landscape_2_edit-fill";
export const id="dl_96826e1b383ff2c212b8";
export const url=new URL("../icons/landscape_2_edit-fill.svg?v=005543778a6cc8128ad6814975a7d73bd95ecc6926513933e30d6a81783d3491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
