export const name="mitre-fill";
export const id="dl_dc9e7442bd1a0ee23a6f";
export const url=new URL("../icons/mitre-fill.svg?v=29c29ad63b441cb6bea2b0233bbc6517f2975ec5d015174f56a6c30de0b6c4a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
