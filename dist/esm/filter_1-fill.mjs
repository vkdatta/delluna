export const name="filter_1-fill";
export const id="dl_8408b7ebbbedf4cd950e";
export const url=new URL("../icons/filter_1-fill.svg?v=febaae11634005381590947aaf737a1a4188933eca25804779755d74fcdb03bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
