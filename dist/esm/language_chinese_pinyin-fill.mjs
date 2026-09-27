export const name="language_chinese_pinyin-fill";
export const id="dl_bde65d1aa40afc2d0f99";
export const url=new URL("../icons/language_chinese_pinyin-fill.svg?v=afa63e39e1f79cd4107bfe9706eda7a465bdc1d69e82796bec8f727987cd75eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
