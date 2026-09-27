export const name="lucid_2-land-plot";
export const id="dl_6286abf4a83e40e8a953";
export const url=new URL("../icons/lucid_2-land-plot.svg?v=3da2dce473e9aa5fc79c9f2745fc72b456465d2c1273b086ce717892d24c9443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
