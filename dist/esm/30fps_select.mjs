export const name="30fps_select";
export const id="dl_63d1d0944bd6c07d614b";
export const url=new URL("../icons/30fps_select.svg?v=6dd7591f256c9b0d699ff1b8ccc731133617c0d8307e79180ecabe4c6090c71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
