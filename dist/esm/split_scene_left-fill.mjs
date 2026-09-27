export const name="split_scene_left-fill";
export const id="dl_c789e61840fb805472df";
export const url=new URL("../icons/split_scene_left-fill.svg?v=61f0d7454a35ee3509a72025996e06657f68f0b60035a7777c7543f11f9cba82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
