export const name="hand-arrow-up";
export const id="dl_d88f8a191acc47579639";
export const url=new URL("../icons/hand-arrow-up.svg?v=b1e7c895c5751f6602c1b7a1cefe885abfa02e182185c40aa4ddf7235690c840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
