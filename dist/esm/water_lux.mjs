export const name="water_lux";
export const id="dl_2757cc8e851246d2ab7d";
export const url=new URL("../icons/water_lux.svg?v=89448e7f451d0a93dfb68869b773143b40374cde14582ee21b54fdc6bb65aee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
