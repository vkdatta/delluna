export const name="car_repair-fill";
export const id="dl_73adaf530ead38a190bf";
export const url=new URL("../icons/car_repair-fill.svg?v=da001fcac0076ddd0c02331c9a4bf1acd9c73ffbf4f69a968ed8702651efbb5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
