export const name="lucid_3-rss";
export const id="dl_9252579adbc34189b1d1";
export const url=new URL("../icons/lucid_3-rss.svg?v=f54763360c3d1f86be7fa2b8b6a26f17621d0b1181f16a7ddd2cc810873f5afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
