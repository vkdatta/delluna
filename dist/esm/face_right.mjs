export const name="face_right";
export const id="dl_fa9120c929b1feeca7df";
export const url=new URL("../icons/face_right.svg?v=9c7e9d590ec8094255653ef6760cc5c210501c6eeb11d832e5cfde890fcf6e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
