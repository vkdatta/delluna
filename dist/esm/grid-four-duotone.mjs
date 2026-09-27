export const name="grid-four-duotone";
export const id="dl_4cc9c85b365a42b0baa7";
export const url=new URL("../icons/grid-four-duotone.svg?v=7119aa789191fac81c76d8b88fd94e2bc21499f7d956a6244896f50ecbf2251b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
