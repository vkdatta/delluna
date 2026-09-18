export const name="photo_camera_back-fill";
export const id="dl_7460f341c3e1480897c3";
export const url=new URL("../icons/photo_camera_back-fill.svg?v=d641c34fc34641a692517ed414cfc57f330404ff66a8efd3c91803d008a89d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
