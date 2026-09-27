export const name="language_chinese_dayi-fill";
export const id="dl_055fe04d607856599b29";
export const url=new URL("../icons/language_chinese_dayi-fill.svg?v=e519ca8998180563b232eeb71e92ab23cf609ec5551c2d07fa7384edf562959e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
