export const name="language_pinyin-fill";
export const id="dl_24e5f6e4d290f5723468";
export const url=new URL("../icons/language_pinyin-fill.svg?v=1cb94948d3893bb2125b09b8f8d541ba19eed50d10d396c75ff3c5f7a2419021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
