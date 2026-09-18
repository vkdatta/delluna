export const name="video_camera_front_off";
export const id="dl_318b58ca70e5496ebb28";
export const url=new URL("../icons/video_camera_front_off.svg?v=925378c50a4c76406697b96b8d9bb3c6488c63b6144aea82b14c3e1a45a11269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
