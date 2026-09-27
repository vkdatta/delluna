export const name="lucid_2-face-slightly-smiling";
export const id="dl_a374ab28a6aa40ebbcc7";
export const url=new URL("../icons/lucid_2-face-slightly-smiling.svg?v=b1eb7603eb9f5dc598e6dc1d90d3fdd2c666eb5e4d920abbb866389c24d0b841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
