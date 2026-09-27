export const name="gas-can-fill";
export const id="dl_58856f6be85943959581";
export const url=new URL("../icons/gas-can-fill.svg?v=bd33b012567168881d3df8d3748021c5429abdd62989b7d9a9340c31fd3b71bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
