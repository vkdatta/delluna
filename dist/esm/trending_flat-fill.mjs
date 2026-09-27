export const name="trending_flat-fill";
export const id="dl_a875dd02b8d6a007aea3";
export const url=new URL("../icons/trending_flat-fill.svg?v=a5db614c5ff3f771ab8377fdeb5b2934843d624b32a71193b4dd8c389a446a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
