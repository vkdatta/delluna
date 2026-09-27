export const name="number-circle-eight-duotone";
export const id="dl_a2b333ace9024b7c802b";
export const url=new URL("../icons/number-circle-eight-duotone.svg?v=4ff19798aed5e15e34e79585c839e4d79bca15df63228ffed7f99f0b3f3ae629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
