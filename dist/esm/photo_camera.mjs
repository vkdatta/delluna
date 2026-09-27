export const name="photo_camera";
export const id="dl_0067648c5280f6e07fba";
export const url=new URL("../icons/photo_camera.svg?v=14e27e4539d32f27675b27e3c6931a82c7a9fc7a43938a0e97073e6ff5a0da2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
