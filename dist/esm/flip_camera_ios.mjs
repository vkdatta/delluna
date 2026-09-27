export const name="flip_camera_ios";
export const id="dl_aa48e6f7ab04455ee04a";
export const url=new URL("../icons/flip_camera_ios.svg?v=c0eb7de7f5596ef5dc2977a0bfb1f849177ee82aec12a86e6b524b5f590d19e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
