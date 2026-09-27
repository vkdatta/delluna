export const name="language_chinese_cangjie-fill";
export const id="dl_ffd6c462337ca57ae83b";
export const url=new URL("../icons/language_chinese_cangjie-fill.svg?v=e6e2196caae024d88d40602aa3c1885e46b061f983e3e2ccab76c3c2ff310700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
