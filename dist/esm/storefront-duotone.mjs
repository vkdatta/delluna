export const name="storefront-duotone";
export const id="dl_c8b35db29c4de541e8be";
export const url=new URL("../icons/storefront-duotone.svg?v=50c39e75ca584dd7b46e9f63e815d00da1f4fd3cf2185f1c8f6d3ee256b7cf17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
