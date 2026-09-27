export const name="productivity-fill";
export const id="dl_1e0f6fb2a6ecba450ffe";
export const url=new URL("../icons/productivity-fill.svg?v=8a2596cf420f9e32e75c32b9fd5f33548da7b8ba6ca793d733d1674b68b66362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
