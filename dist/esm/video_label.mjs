export const name="video_label";
export const id="dl_9a6664f3949671be1904";
export const url=new URL("../icons/video_label.svg?v=573ff7fca3d3b0263e4570cd224ab315d4208d21c88b06fc99c3fc1cc082f9b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
