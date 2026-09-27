export const name="face_2";
export const id="dl_45702adb3fb327f1ec1b";
export const url=new URL("../icons/face_2.svg?v=03e3c00a2fef1b61d39f7d8a0d0ccb24ba9366218a37dff72d38a7e123a64e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
