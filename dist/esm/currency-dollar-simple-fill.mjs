export const name="currency-dollar-simple-fill";
export const id="dl_f3dd3ee771964e4b9f81";
export const url=new URL("../icons/currency-dollar-simple-fill.svg?v=bd7e962d1964618cc28d446dbc4748045ef418ed724dff6abfdd55cd525e0222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
