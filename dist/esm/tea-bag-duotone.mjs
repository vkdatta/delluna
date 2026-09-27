export const name="tea-bag-duotone";
export const id="dl_270b10c65a2d64bea3b5";
export const url=new URL("../icons/tea-bag-duotone.svg?v=b7ce6dd17ce4c5cf6be781e1f5f4ee6174a4ab4f8912f51a2f5b886ad3272a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
