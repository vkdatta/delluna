export const name="face_shake";
export const id="dl_cd8b3c84c211a7abac6b";
export const url=new URL("../icons/face_shake.svg?v=3cd69f98a4efcd40e0846d349866824fe6ef674c57f0867d5e4a847ed5a16a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
