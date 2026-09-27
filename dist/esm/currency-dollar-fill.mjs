export const name="currency-dollar-fill";
export const id="dl_1375f2dc26044b448108";
export const url=new URL("../icons/currency-dollar-fill.svg?v=4e3ea830666bc056a275eb1eaaee0a2ca361cb610e7956bbeca52f4a11cfe4dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
