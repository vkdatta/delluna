export const name="split_scene_left";
export const id="dl_eb6f85500603242dba3b";
export const url=new URL("../icons/split_scene_left.svg?v=8cdfe3dbb29f305953e89d1f324003e2f1fb93fba4504eac6bbc89150791ac31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
