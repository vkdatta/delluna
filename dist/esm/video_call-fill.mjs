export const name="video_call-fill";
export const id="dl_2a0f02435cd58676d68e";
export const url=new URL("../icons/video_call-fill.svg?v=795884c1629f5170668785f4da1cb12139ce0a5c45acda5dffdd68f41beff567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
