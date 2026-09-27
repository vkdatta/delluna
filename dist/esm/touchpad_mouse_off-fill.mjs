export const name="touchpad_mouse_off-fill";
export const id="dl_e79731c6ab2922f5632e";
export const url=new URL("../icons/touchpad_mouse_off-fill.svg?v=4d778fdacd3d532436a4cfff19beb2c850203941efb69f127a27b4bd49c38156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
