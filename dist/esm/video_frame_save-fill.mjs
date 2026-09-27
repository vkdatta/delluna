export const name="video_frame_save-fill";
export const id="dl_5beaec84cc29655c9bfb";
export const url=new URL("../icons/video_frame_save-fill.svg?v=8b1586d870f6083a01fe2786a010d672bd5ff78e64f0d4c478f4764af24c98cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
