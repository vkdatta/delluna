export const name="split_scene_down";
export const id="dl_fa8776427cddfb61d1f6";
export const url=new URL("../icons/split_scene_down.svg?v=3d17f25665c3c52dda765e7afd4868aaf07d9ee7ead58bfea8e39db9b9d27d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
