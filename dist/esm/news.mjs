export const name="news";
export const id="dl_aabce4a70040d214b743";
export const url=new URL("../icons/news.svg?v=f03147daa7bb375b73ee5e3bf24678a637ee2e62bdce83388e30faa8c3f7c51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
