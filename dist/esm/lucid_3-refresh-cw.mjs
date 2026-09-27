export const name="lucid_3-refresh-cw";
export const id="dl_1c349bfc524944fa9234";
export const url=new URL("../icons/lucid_3-refresh-cw.svg?v=a899858a9aabcc0f9b373f32cd9dfec590f052d8f5fe94e69c40668f6cc8099c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
