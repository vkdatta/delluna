export const name="camera_video-fill";
export const id="dl_9798d33a380840e596b5";
export const url=new URL("../icons/C/camera_video-fill.svg?v=9be62ac22f40a20e9140db4700699f6f87fcf3576eeb715cda5ab0dea9ff28fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
