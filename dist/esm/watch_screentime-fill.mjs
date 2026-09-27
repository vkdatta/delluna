export const name="watch_screentime-fill";
export const id="dl_cdf062f86c7db6faa45e";
export const url=new URL("../icons/watch_screentime-fill.svg?v=f63b441500c334bf05c59e773bcf69c67839fe3b0ad3f399f653049ef52c27b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
