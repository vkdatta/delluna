export const name="camera_roll";
export const id="dl_0bcfd1a2bd2812d96c71";
export const url=new URL("../icons/camera_roll.svg?v=8d1176dc3220bea2ec8dfdf0269616a393020a120be11c996f8e425bebf11782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
