export const name="language_chinese_quick-fill";
export const id="dl_67f5c6e9154eb3b0674a";
export const url=new URL("../icons/language_chinese_quick-fill.svg?v=aa421c6e8022bff897725a8def7dd4ccb777d9d8de45e0d58f298f4bc5aab51d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
