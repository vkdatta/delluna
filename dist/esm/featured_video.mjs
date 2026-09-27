export const name="featured_video";
export const id="dl_7ba0eddfe85c8d107320";
export const url=new URL("../icons/featured_video.svg?v=0cd9f681b6c8af70d776e7c1f68b37a8bdbf5121ace2996c0a870f4a8474859c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
