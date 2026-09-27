export const name="hide_image-fill";
export const id="dl_dcf3dc7c221aa3f50f46";
export const url=new URL("../icons/hide_image-fill.svg?v=3396e8e90e4e3a3249964bdf12119cc52f1566e9ccfb4ab3ed5451bd6affc6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
