export const name="flip_camera_ios";
export const id="dl_ffb0dd4792f0d7d7875f";
export const url=new URL("../icons/flip_camera_ios.svg?v=159f68a746b9c4145c6b0b49668a5b14f8e66cbcbc12ca5c5059f0686889b370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
