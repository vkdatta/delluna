export const name="lucid_1-anchor";
export const id="dl_b16c2fe01cb14698a9fc";
export const url=new URL("../icons/lucid_1-anchor.svg?v=91ae98b1776d35735aa3fac010facbd2ebdccbad66efcd2712a29f9664af9983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
