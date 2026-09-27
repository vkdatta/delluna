export const name="language_chinese_cangjie-fill";
export const id="dl_7ee946fcaa873b5bf0a4";
export const url=new URL("../icons/language_chinese_cangjie-fill.svg?v=8b77119b435a9e9a296064fab0ab77eb3d030e14b18e54622890fe9182e86189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
