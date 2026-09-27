export const name="lucid_3-rss";
export const id="dl_9252579adbc34189b1d1";
export const url=new URL("../icons/lucid_3-rss.svg?v=2aa3c0ff9e47d025e63310ea5c93a4a440f968f7b56e8d15e3cf9b741bd3d485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
