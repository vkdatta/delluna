export const name="language_chinese_cangjie-fill";
export const id="dl_6a45804e27bd406ea506";
export const url=new URL("../icons/L/language_chinese_cangjie-fill.svg?v=63465a3664df799f58e134a73262c86d45b296e6be599dc9630a50ed6f2c03f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
