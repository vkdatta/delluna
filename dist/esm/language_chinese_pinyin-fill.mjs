export const name="language_chinese_pinyin-fill";
export const id="dl_a28f77c16db7eb61022d";
export const url=new URL("../icons/language_chinese_pinyin-fill.svg?v=418e25cc733cd532a81f538c02de5fc40e22066b3a1e973006cff5279981c961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
