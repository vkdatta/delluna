export const name="arrows-merge-duotone";
export const id="dl_d081f0086fc94759adfc";
export const url=new URL("../icons/arrows-merge-duotone.svg?v=b03405ba0ef32756393cdc01fbe969e0bea877b97a4e7ed22b802327ce8178cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
