export const name="lucid_2-land-plot";
export const id="dl_6286abf4a83e40e8a953";
export const url=new URL("../icons/lucid_2-land-plot.svg?v=7edbecd7be55d122addabb8ea53bf21d1c389eef1252eaf7e4e7a25773fa8f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
