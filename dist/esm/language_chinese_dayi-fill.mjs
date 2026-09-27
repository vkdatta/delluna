export const name="language_chinese_dayi-fill";
export const id="dl_49824a50924694f260e2";
export const url=new URL("../icons/language_chinese_dayi-fill.svg?v=84953232f1e51a6a8d2c3a2dc486bf8a604031660d3fc39fb4b9643f46cd765a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
