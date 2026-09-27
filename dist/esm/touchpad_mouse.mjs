export const name="touchpad_mouse";
export const id="dl_61d5521e51ad0db5aeed";
export const url=new URL("../icons/touchpad_mouse.svg?v=7fc907503bead264c46ec270bd8086a323621068f4b8017e9c9c2c33020b8c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
