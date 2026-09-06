export const name="lucid_2-gauge";
export const id="dl_5be1daff9e784a7d8e8f";
export const url=new URL("../icons/lucid_2-gauge.svg?v=148dc4316b948b0760c44ea393d1d1e7d68021b99cc7eddda11f59d3f38590ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
