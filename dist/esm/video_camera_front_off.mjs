export const name="video_camera_front_off";
export const id="dl_a23e46c9dcee787b88c9";
export const url=new URL("../icons/video_camera_front_off.svg?v=e617e756a8602852f47d58aff26674d6e0781bd948f60790f58fb108ab745867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
