export const name="file-vue-fill";
export const id="dl_03c43b83aa02402d9a38";
export const url=new URL("../icons/file-vue-fill.svg?v=c6b759d09b405e9a5bc9f7af8a1859e8d5072124a083458fbc543f75a0f2dd41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
