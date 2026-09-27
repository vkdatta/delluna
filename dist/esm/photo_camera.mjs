export const name="photo_camera";
export const id="dl_e7921f045abcf80659a8";
export const url=new URL("../icons/photo_camera.svg?v=8e00388e11fbfaab3749dcb64f7e7da01d6b140ff8a581ca591a43711188ff5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
