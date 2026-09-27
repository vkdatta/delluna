export const name="news-fill";
export const id="dl_e3ca09ed3b64479c17a0";
export const url=new URL("../icons/news-fill.svg?v=c2457941dec16aa8b452c48f9021c90e76ae05feab3f905e884902535542f923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
