export const name="language_chinese_dayi-fill";
export const id="dl_dbec66a2e9df4f75bf14";
export const url=new URL("../icons/language_chinese_dayi-fill.svg?v=c47467042be5e21ebb2c69bceac93a783f6bef18c7e7cfadd5ca14d57d8df948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
