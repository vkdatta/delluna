export const name="swap_horizontal_circle-fill";
export const id="dl_b2ff851e3697bb20420e";
export const url=new URL("../icons/swap_horizontal_circle-fill.svg?v=f5bc6165520ba2c1e475319a7171092bda4fd6bc0cab93a102532959647e1601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
