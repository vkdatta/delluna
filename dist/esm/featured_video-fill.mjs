export const name="featured_video-fill";
export const id="dl_9529280313cf605229d1";
export const url=new URL("../icons/featured_video-fill.svg?v=228eb5448b4986427d611185af2c28595663f0c2f4a18b904a46b287684fdb9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
