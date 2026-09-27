export const name="rss_feed-fill";
export const id="dl_4b1b686d0360b3ebd74f";
export const url=new URL("../icons/rss_feed-fill.svg?v=41df3e0d5aa796f15310a18beeee2518daf78c0ccf38ee1fa1222463daa89d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
