export const name="camera_outdoor";
export const id="dl_36bf277986f2968819ab";
export const url=new URL("../icons/camera_outdoor.svg?v=ab1efc9e7b18d8c710f8a9f3f9d64c29aabb9cd897d41f228b2149dff41df834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
