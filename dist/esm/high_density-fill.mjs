export const name="high_density-fill";
export const id="dl_02660777fcef09aa03b1";
export const url=new URL("../icons/high_density-fill.svg?v=86f4ef7f01d8181f0a094157c136fcebdb5673b033dd558ca937e436734a0926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
