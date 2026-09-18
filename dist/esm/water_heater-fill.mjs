export const name="water_heater-fill";
export const id="dl_c78c8c989696477fb53c";
export const url=new URL("../icons/W/water_heater-fill.svg?v=3921697e99b04fede1b8992171ee59d680cad43eb81b7257cdbdb4ad990ea8ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
