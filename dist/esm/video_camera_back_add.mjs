export const name="video_camera_back_add";
export const id="dl_07fc7d9cfc4ae30ff602";
export const url=new URL("../icons/video_camera_back_add.svg?v=5f2dbaae1c7478417b8a113271ef76ed5721a8002f009513e8fcab957e58bcdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
