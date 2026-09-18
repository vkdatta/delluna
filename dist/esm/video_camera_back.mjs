export const name="video_camera_back";
export const id="dl_7657038068e3463594f5";
export const url=new URL("../icons/video_camera_back.svg?v=fa665b81d1a3f5d581cccee53345e0e2412cafd085c5fb1170cd35f2125a9b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
