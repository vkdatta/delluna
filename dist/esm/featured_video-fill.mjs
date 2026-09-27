export const name="featured_video-fill";
export const id="dl_4f05616d88f5a7567234";
export const url=new URL("../icons/featured_video-fill.svg?v=bf1f958a46043148e869e602295d135de6e6401c19bbfe97c2f9863a69c4c0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
