export const name="device-tablet-camera";
export const id="dl_57ea7fc3c99f4690a927";
export const url=new URL("../icons/device-tablet-camera.svg?v=4208dcbb40f50601abe3e729b4b45881bac1b5895e2d110e070a5ba2cb8ea4ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
