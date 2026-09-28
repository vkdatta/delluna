export const name="camera_outdoor-fill";
export const id="dl_248d1dd3307f6a83fe1c";
export const url=new URL("../icons/camera_outdoor-fill.svg?v=cd646b69c1f3e8a2f92d2096010dc170ecbe7034bb3d1e879846338011a785e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
