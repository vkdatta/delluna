export const name="no_encryption-fill";
export const id="dl_733768cd3b12170bb14f";
export const url=new URL("../icons/no_encryption-fill.svg?v=5384cbbec9e2e337346efef0024d5f65c4b7a2e456d33c273770e53404149fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
