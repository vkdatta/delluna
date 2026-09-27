export const name="segment-fill";
export const id="dl_fa2537b0d72d13a9738e";
export const url=new URL("../icons/segment-fill.svg?v=280ece39a0aed12c2ec3a0da9b8ee3db376c8300886461d1c43ce8ec9630f24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
