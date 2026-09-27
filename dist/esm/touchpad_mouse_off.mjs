export const name="touchpad_mouse_off";
export const id="dl_98fd9f3592c30c4fc39f";
export const url=new URL("../icons/touchpad_mouse_off.svg?v=49a452dad51d26c1b552626fb6fe7db5aa30415e2eb6d0d0ba92c344c2b589ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
