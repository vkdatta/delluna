export const name="percent_discount-fill";
export const id="dl_85d99e2851b948d38f5f";
export const url=new URL("../icons/percent_discount-fill.svg?v=4044747ac0b198336d8bddea5d1ca73c21c3dae699f512b9ee3d31b3e31e58ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
