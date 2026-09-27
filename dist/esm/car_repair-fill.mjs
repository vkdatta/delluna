export const name="car_repair-fill";
export const id="dl_77fddd624d2cea4c75e6";
export const url=new URL("../icons/car_repair-fill.svg?v=0df0050bb0d8af3c0e206a9a854d73f3cb306025969427ef95ac1e2fd3f294f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
