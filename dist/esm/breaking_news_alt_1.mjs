export const name="breaking_news_alt_1";
export const id="dl_5760e90e01121ebb1566";
export const url=new URL("../icons/breaking_news_alt_1.svg?v=01e9e314759ede60170c7e1bd95a7505bed1edffa71acebdb3b1339d95f16987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
