export const name="language_pinyin-fill";
export const id="dl_61eaa0c9e6a403ebf5bc";
export const url=new URL("../icons/language_pinyin-fill.svg?v=1630b9a2af44dba7ecba375631aa3929e40f5b482c9e10bd29f0bbe9f8c40e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
