export const name="camera_video";
export const id="dl_856eef6510c15b39d782";
export const url=new URL("../icons/camera_video.svg?v=5c882a87e3781567ea364362f65328288fbe9545287820cc568f73403cc00fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
