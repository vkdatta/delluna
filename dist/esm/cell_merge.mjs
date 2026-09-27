export const name="cell_merge";
export const id="dl_a76f6f2fb0a87ab79486";
export const url=new URL("../icons/cell_merge.svg?v=9809529b626232d16a23be5d8ac938c58d6872246c925a5f88a401742c0472ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
