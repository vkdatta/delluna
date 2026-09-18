export const name="video_camera_front";
export const id="dl_007d176718164099b7e2";
export const url=new URL("../icons/V/video_camera_front.svg?v=01de58890225214ef27a745cec4821fb57393f921797e73e2b07066d7f8cc16b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
