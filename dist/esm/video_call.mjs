export const name="video_call";
export const id="dl_8650f4b1af28ba1561ec";
export const url=new URL("../icons/video_call.svg?v=cf0b150fdb1a0417bce2f0d96be3fcfddc77e00a8ab8a512d52135f5a82de1b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
