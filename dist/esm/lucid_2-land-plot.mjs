export const name="lucid_2-land-plot";
export const id="dl_6286abf4a83e40e8a953";
export const url=new URL("../icons/lucid_2-land-plot.svg?v=0290cdf219905cc435232ec54b5bd90251a36f0a6d0d3770b98bd866e13f218a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
