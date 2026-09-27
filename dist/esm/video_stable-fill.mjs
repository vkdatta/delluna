export const name="video_stable-fill";
export const id="dl_56f7addd4c83e8c9867c";
export const url=new URL("../icons/video_stable-fill.svg?v=add144cd432e18f3986ddc80dda010229490eea0d7f6b8d4a336461ef81caccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
