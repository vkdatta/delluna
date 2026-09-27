export const name="flow-arrow-fill";
export const id="dl_a5578449f113449e8b5b";
export const url=new URL("../icons/flow-arrow-fill.svg?v=bfe2f2241fff31028dbdfcc2857a2dc82a8dc3b17e00203c1e75eafc36d40c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
