export const name="video-camera";
export const id="dl_70aa005ee441ed3c402f";
export const url=new URL("../icons/video-camera.svg?v=f17c6b65db0f5c88b1d5a2c42570f7f73cbcb4174865ba66ba18af021256d9a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
