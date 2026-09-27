export const name="article-ny-times-light";
export const id="dl_a74f51c6add743edb968";
export const url=new URL("../icons/article-ny-times-light.svg?v=bd034e8ac717bbd46cd1b25c9ff6e2f901ea7813a8c71eb3409ced123f9d7a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
