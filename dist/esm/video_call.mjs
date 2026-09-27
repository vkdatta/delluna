export const name="video_call";
export const id="dl_0a3bdc2793132b653b37";
export const url=new URL("../icons/video_call.svg?v=9edaf5c6f235c57ff5b0747ee944550254e199f9c2ce24fd1cee7074a7d7db0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
