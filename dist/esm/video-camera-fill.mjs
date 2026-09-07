export const name="video-camera-fill";
export const id="dl_8e65b68780db477a9561";
export const url=new URL("../icons/V/video-camera-fill.svg?v=daf72fb4e3f7978254c2ac1959db6d855f12bb0d9b7504309d2e6270b7192933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
