export const name="landslide-fill";
export const id="dl_f8e31697c3d1820b0138";
export const url=new URL("../icons/landslide-fill.svg?v=6736f269cdc208b631a8ceb959f66d3f3eb670b9abd333edcafa0c4610679232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
