export const name="watch_screentime";
export const id="dl_7fe95f309877a8f27c2f";
export const url=new URL("../icons/watch_screentime.svg?v=3efe1d5d167b50d87cae749499b18485e032f50230efd2ae5cc75732a8ed68eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
