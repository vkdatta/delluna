export const name="video_camera_front";
export const id="dl_7fa9c9c3d70eacb2116f";
export const url=new URL("../icons/video_camera_front.svg?v=42d0624a795e818089fd94aa4a16dcef5ab5af42c8bea6bf97e1b258e5d623e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
