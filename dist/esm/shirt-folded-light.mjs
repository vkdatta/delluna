export const name="shirt-folded-light";
export const id="dl_f37abd87d4b14b1f505c";
export const url=new URL("../icons/shirt-folded-light.svg?v=9b3ece70f6f42c86bd0108416e05477c03a1f15bfdfe79b49e724237d52d107b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
