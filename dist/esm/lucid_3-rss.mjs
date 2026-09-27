export const name="lucid_3-rss";
export const id="dl_9252579adbc34189b1d1";
export const url=new URL("../icons/lucid_3-rss.svg?v=996a7055af21f2ab7888c9f776e010b9b291f08a98d03410fae304222cf5215b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
