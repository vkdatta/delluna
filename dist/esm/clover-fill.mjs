export const name="clover-fill";
export const id="dl_4507b772bdbb4bbc8425";
export const url=new URL("../icons/clover-fill.svg?v=4fd76f814371edd3ee3ce2507bc91253c00123bf89c825a14ffc536304532556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
