export const name="laptop_car";
export const id="dl_7751db61388fe39de41c";
export const url=new URL("../icons/laptop_car.svg?v=20cf8456c401c07d0dc4dae98e5cb2f978129b5576d3003be61196f4a87d14c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
