export const name="superset-of-thin";
export const id="dl_8f1f0d58fb8e2071a73f";
export const url=new URL("../icons/superset-of-thin.svg?v=52fefe4915a6054ef06ab76e3b3ba90f0d89695458a449115287d74337a28672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
