export const name="split_scene_left-fill";
export const id="dl_8f9a76f6e5f1488da104";
export const url=new URL("../icons/split_scene_left-fill.svg?v=e71e6ca4fd6be637130a4b747e38af004a9f10ad3b59427d782ed8b323970372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
