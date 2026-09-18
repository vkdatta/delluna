export const name="touchpad_mouse-fill";
export const id="dl_57f7aed6a93b4a88a8d1";
export const url=new URL("../icons/touchpad_mouse-fill.svg?v=415a035aa7b896363b87be5c99a85d6dc9b61a5d453a2451694ba2f849bf0e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
