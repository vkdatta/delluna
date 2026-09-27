export const name="rss_feed-fill";
export const id="dl_3b9e58ed6fbd61598426";
export const url=new URL("../icons/rss_feed-fill.svg?v=ca51f721ad7b9b9ab893f58a90f101da39bb6312fc05b1bfa71f901c9b5ad349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
