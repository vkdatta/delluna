export const name="language_chinese_wubi-fill";
export const id="dl_5908dae6c319ca71846c";
export const url=new URL("../icons/language_chinese_wubi-fill.svg?v=f82ae9c3503dc461671b6e5eaf8fdb79ff73a939f11884125b08cafca3c74935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
