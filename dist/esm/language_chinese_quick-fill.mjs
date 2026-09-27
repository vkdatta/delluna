export const name="language_chinese_quick-fill";
export const id="dl_07a8bae89348771804f4";
export const url=new URL("../icons/language_chinese_quick-fill.svg?v=08c643000f2c8049d7df68da19f3eafa1e99e6308a1d4a99683691047ea3e229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
