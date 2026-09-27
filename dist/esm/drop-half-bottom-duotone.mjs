export const name="drop-half-bottom-duotone";
export const id="dl_c068540ac15e427b8545";
export const url=new URL("../icons/drop-half-bottom-duotone.svg?v=0ec899855f395f4e2a04e3e3558944dfa1f6ef7765f173c6105f14be1ebaa9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
