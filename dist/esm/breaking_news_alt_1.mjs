export const name="breaking_news_alt_1";
export const id="dl_b8309f6cf6c8ab53eb7a";
export const url=new URL("../icons/breaking_news_alt_1.svg?v=994ae5a90d2f835b914b60b5471cd7d8278c2a249c3310634aa032176ec5b087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
