export const name="video-camera-light";
export const id="dl_e3f6a4dec810854925a5";
export const url=new URL("../icons/video-camera-light.svg?v=9a9b107152ef11c2648dabd8604176147c0651e3125d9c8977b7daa98593d11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
