export const name="touchpad_mouse_off-fill";
export const id="dl_5f8f3d1d122c1e4be4d5";
export const url=new URL("../icons/touchpad_mouse_off-fill.svg?v=efe0f9d7eee9cb15968ec1c1e1f28939996214d914fd609ecb7bbd1a06d4e718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
