export const name="camera_video-fill";
export const id="dl_546622005fba17187e6c";
export const url=new URL("../icons/camera_video-fill.svg?v=18ebc22fcea3d46beebef2e96de2ed9db10db67459f210ba03352f5af654caaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
