export const name="language_chinese_pinyin-fill";
export const id="dl_7ed3c7aa70344ff9986d";
export const url=new URL("../icons/language_chinese_pinyin-fill.svg?v=e241223daf0707567a55d84ae0cb965b2520c20e72e3d78d9363842d8ef86c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
