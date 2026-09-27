export const name="lucid_3-ratio";
export const id="dl_969a55ab3b2645aeac52";
export const url=new URL("../icons/lucid_3-ratio.svg?v=e42b027685db679ba7919f3d299f67e7426e546de8c98838bbdcca0db1405454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
