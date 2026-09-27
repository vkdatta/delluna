export const name="video_camera_front";
export const id="dl_5a6d26f5aa5e20a98827";
export const url=new URL("../icons/video_camera_front.svg?v=ccc94f29a34373d5f77d93c8f39c697256719726556e05056645fd56a1082dcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
