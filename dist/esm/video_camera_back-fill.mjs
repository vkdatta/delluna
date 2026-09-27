export const name="video_camera_back-fill";
export const id="dl_175612b58bde8388f586";
export const url=new URL("../icons/video_camera_back-fill.svg?v=9b610f5868ecb85dece70ec0fc9da3ecb698f1f71d0aa9cdb6515d2cf197b2e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
