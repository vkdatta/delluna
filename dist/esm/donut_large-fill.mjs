export const name="donut_large-fill";
export const id="dl_22ad4a74513ce59d878b";
export const url=new URL("../icons/donut_large-fill.svg?v=70cac46a945f2456ced08d3104db616a3011972670f8ff23a38fca0ed2cd2eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
