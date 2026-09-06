export const name="caret-circle-left";
export const id="dl_432811d062d24a23ade2";
export const url=new URL("../icons/caret-circle-left.svg?v=91cb3bffa15f3345431172ee95fc159913a5e522ef94da7af545e48d105ccf1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
