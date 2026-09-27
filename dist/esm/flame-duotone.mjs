export const name="flame-duotone";
export const id="dl_ae1af819e70b4bf7bc2e";
export const url=new URL("../icons/flame-duotone.svg?v=b9c5bcfa161178842a5c952e0b69317033677a0601683d385d046b901db890d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
