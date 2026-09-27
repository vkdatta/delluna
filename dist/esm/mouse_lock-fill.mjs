export const name="mouse_lock-fill";
export const id="dl_2acd54e1a682c2727250";
export const url=new URL("../icons/mouse_lock-fill.svg?v=8a337167503bfb1a3c881f34f32684adb185513fe4a3dd769184d81071e80f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
