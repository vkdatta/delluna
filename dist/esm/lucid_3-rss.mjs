export const name="lucid_3-rss";
export const id="dl_9252579adbc34189b1d1";
export const url=new URL("../icons/lucid_3-rss.svg?v=2f317451cd24a364eaf003d3e26d5b5129f74a2f6e2b2e531ab3810e2dce5586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
