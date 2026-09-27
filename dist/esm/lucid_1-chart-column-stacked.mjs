export const name="lucid_1-chart-column-stacked";
export const id="dl_fa15fcdb8d964a7d9ef3";
export const url=new URL("../icons/lucid_1-chart-column-stacked.svg?v=ec1843e2050afff89cf59ad5cbc9e5297f7ec583787aa5b6940090e7d7670aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
