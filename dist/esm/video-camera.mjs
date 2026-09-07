export const name="video-camera";
export const id="dl_c6788344a67b44719bc1";
export const url=new URL("../icons/V/video-camera.svg?v=3c9eaa197d77d45496d35be0a750095b643cf7a3685e3b067049b587368acce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
