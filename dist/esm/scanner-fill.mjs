export const name="scanner-fill";
export const id="dl_cceb5b9c8a557cff4e4d";
export const url=new URL("../icons/scanner-fill.svg?v=56e0a0f728b250b15fedf5fcd4adae660622270d3fe16d40ab143f10618454a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
