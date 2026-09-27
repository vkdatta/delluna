export const name="video_frame_copy-fill";
export const id="dl_18ffe18372207c3a0511";
export const url=new URL("../icons/video_frame_copy-fill.svg?v=ec36b18b295ce9c9b8d9991bd4b8faa8639e1958b5f4978cf661f3ff958e70d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
