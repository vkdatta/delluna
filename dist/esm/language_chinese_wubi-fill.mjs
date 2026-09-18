export const name="language_chinese_wubi-fill";
export const id="dl_40849f4974db4b98ac14";
export const url=new URL("../icons/L/language_chinese_wubi-fill.svg?v=e1f17ff0327eeb3fa5acc63d2e533410607ba78fdd198ab4c95b81a75c51368f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
