export const name="bookmark_added";
export const id="dl_735f4ed884c2484cb472";
export const url=new URL("../icons/B/bookmark_added.svg?v=1d1a69624f472d7fd2567c292f9b8798b27af7d541acb33cd5d8eff326415083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
