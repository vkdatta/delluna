export const name="breaking_news_alt_1-fill";
export const id="dl_ca01a357548a4561bb3a";
export const url=new URL("../icons/breaking_news_alt_1-fill.svg?v=bf5e869066722d4c6f0ac7632dc0c757d15ad722379181a710f5bdcc89baed26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
