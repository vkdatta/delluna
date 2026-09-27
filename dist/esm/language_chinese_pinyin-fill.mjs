export const name="language_chinese_pinyin-fill";
export const id="dl_5fdfd58006b3ae671c1e";
export const url=new URL("../icons/language_chinese_pinyin-fill.svg?v=19434f9c806c0e6e2c2ad1bcc7495fa38ab99d814f9881042e98098b6a5de847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
