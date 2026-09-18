export const name="featured_video";
export const id="dl_7b7f997455a24474b93a";
export const url=new URL("../icons/featured_video.svg?v=528766838e4b8fd07ca4b973412faea1f4b12061495de6ecf28b0f82487eec7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
