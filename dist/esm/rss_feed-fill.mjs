export const name="rss_feed-fill";
export const id="dl_95c5bebb662948e9bd0e";
export const url=new URL("../icons/rss_feed-fill.svg?v=1ee2cb01030dc40c61fecbb5add2ececea0e2b9892fa2e721a2fe969c172661c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
