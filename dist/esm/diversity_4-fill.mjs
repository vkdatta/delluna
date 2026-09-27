export const name="diversity_4-fill";
export const id="dl_bc268a79fb20e18afde2";
export const url=new URL("../icons/diversity_4-fill.svg?v=18f3a2369edfeca2a350873c585729e75f6b0d65f92f479a41690ffc3dcc5a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
