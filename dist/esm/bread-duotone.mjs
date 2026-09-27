export const name="bread-duotone";
export const id="dl_9e65262ec382429889ee";
export const url=new URL("../icons/bread-duotone.svg?v=e10da52dc27ad242b6824484c2b9dc2a1e6d8334f536b2974825f996f921525b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
