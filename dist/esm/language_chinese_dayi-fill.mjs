export const name="language_chinese_dayi-fill";
export const id="dl_2081e376e7ae9a58e8a3";
export const url=new URL("../icons/language_chinese_dayi-fill.svg?v=b620efb1d09e29763191259cc198b7f68104b1c294050f02e15007421ea8ea51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
