export const name="suitcase-fill";
export const id="dl_14b523aa0f838e02dadb";
export const url=new URL("../icons/suitcase-fill.svg?v=2e65a7f8f5d1720c5348e72bdd9312a4b0240c8d2a85344a8bf99d698babaeff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
