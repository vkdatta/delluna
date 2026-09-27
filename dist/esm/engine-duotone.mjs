export const name="engine-duotone";
export const id="dl_4d3729705c5940cdaad5";
export const url=new URL("../icons/engine-duotone.svg?v=bfdcdf03d36198997e9bb77f42b29dd9aeda1c305c7299d1f1e0b396d9ce5f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
