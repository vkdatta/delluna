export const name="language_chinese_cangjie-fill";
export const id="dl_2aac606bd7df3be88a2e";
export const url=new URL("../icons/language_chinese_cangjie-fill.svg?v=5e9e5720ee81fdd84d7ed702a20f46bd222e7673fe10cd4bb9e196899852b693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
