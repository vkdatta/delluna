export const name="slow_motion_video-fill";
export const id="dl_d440a12f1a1df564941b";
export const url=new URL("../icons/slow_motion_video-fill.svg?v=78ec658ba8322a477a8084ef3ec6e5d42431615d776af567b564bfb89a9082c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
