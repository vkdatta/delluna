export const name="umbrella-fill";
export const id="dl_e4dcd0985de1cd58b616";
export const url=new URL("../icons/umbrella-fill.svg?v=8c4630467f24ee9a9c3019cc303fb992d4adf461d9dc25eac56c48af1e06ba42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
