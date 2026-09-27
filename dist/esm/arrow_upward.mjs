export const name="arrow_upward";
export const id="dl_48f2b2afb803d6919c85";
export const url=new URL("../icons/material_symbols/arrow_upward.svg?v=a4387d041a8da404eb7238033eac4359ff1292582a964432499d82a703a59b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
