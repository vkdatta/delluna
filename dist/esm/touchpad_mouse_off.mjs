export const name="touchpad_mouse_off";
export const id="dl_a00d92c4086f8f23104e";
export const url=new URL("../icons/touchpad_mouse_off.svg?v=38a077d1751e28960d0b4341e72c6d54d79077857f27386141ecc6cbeba3de20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
