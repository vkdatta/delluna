export const name="macro_off-fill";
export const id="dl_09069f0c1c291411270c";
export const url=new URL("../icons/macro_off-fill.svg?v=c923b1099c6abcb05f31a52a624100ce63603fc436da69aebbb271c66d613a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
