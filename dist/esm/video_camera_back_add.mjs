export const name="video_camera_back_add";
export const id="dl_b7c124413179ff38f9ba";
export const url=new URL("../icons/video_camera_back_add.svg?v=7bfeb83366d943d308272e37852aced462c443dca4f04549ffa6d460a91b5c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
