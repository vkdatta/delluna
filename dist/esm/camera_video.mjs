export const name="camera_video";
export const id="dl_cde97376359d61602387";
export const url=new URL("../icons/camera_video.svg?v=65dafd46dbefeffc153f7f8bf79095498cc52a56c377240de51a9b8c736c3065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
