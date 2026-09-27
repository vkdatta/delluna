export const name="camera_video-fill";
export const id="dl_2cd85193eadd8cb81c74";
export const url=new URL("../icons/camera_video-fill.svg?v=648d18c91b9824b9a906516d1e0288a9096663d8327265677469f3a9c1cf588c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
