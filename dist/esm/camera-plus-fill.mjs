export const name="camera-plus-fill";
export const id="dl_8fa772e63b894da79b8b";
export const url=new URL("../icons/camera-plus-fill.svg?v=4cd3f91a782a3d17101075c3637d31f3673f87b11a18371c84ea6d6607e216cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
