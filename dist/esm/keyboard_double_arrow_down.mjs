export const name="keyboard_double_arrow_down";
export const id="dl_d8b4c3fbb84b7810c120";
export const url=new URL("../icons/keyboard_double_arrow_down.svg?v=fbe34e0a788edfec2227db445153e70295669e259853c45a44057ff019684c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
