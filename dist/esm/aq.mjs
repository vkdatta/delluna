export const name="aq";
export const id="dl_cf2cf4038f38979d2a4d";
export const url=new URL("../icons/aq.svg?v=429c4a41ad1d45b1c93e7b1365e81d3929b5ba660e10c25aa49312230558bf86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
