export const name="rss_feed-fill";
export const id="dl_a092480d2394eca4d280";
export const url=new URL("../icons/rss_feed-fill.svg?v=7eadb7aa0b638ace898c92538e73efaf41de1cc3a9fa26009af952e5bf14386f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
