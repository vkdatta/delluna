export const name="view_timeline";
export const id="dl_8b90b34f72899742b326";
export const url=new URL("../icons/view_timeline.svg?v=9f64cd3df05c42c9913a7f44b2a5d63e7eca259749cc216301424a1e9ce2d286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
