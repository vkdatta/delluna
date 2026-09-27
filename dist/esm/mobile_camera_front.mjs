export const name="mobile_camera_front";
export const id="dl_0dfd2846983dd0ddc518";
export const url=new URL("../icons/mobile_camera_front.svg?v=7061cefb8c28508536afb82930a1740871cc28b3b45c1f8fc84b8b62ea2a0a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
