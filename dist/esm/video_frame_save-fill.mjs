export const name="video_frame_save-fill";
export const id="dl_96d05e533d6cc14248ad";
export const url=new URL("../icons/video_frame_save-fill.svg?v=45adb354efd7a1dd11b48b038fa6a065101064451de0843fd5d388abfb50f8c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
