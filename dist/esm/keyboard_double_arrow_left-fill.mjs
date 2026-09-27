export const name="keyboard_double_arrow_left-fill";
export const id="dl_8535484c32435191fcbd";
export const url=new URL("../icons/keyboard_double_arrow_left-fill.svg?v=3f0be0db9fc54aab04e0e872f8bcef3f20954925cb5b7a8c8b8c8610e30a31cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
