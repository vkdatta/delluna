export const name="shape_line-fill";
export const id="dl_2c8cd247d65904bc1224";
export const url=new URL("../icons/shape_line-fill.svg?v=e93271c8e64bdecc4410f1f18edee9af8d61149b04b075aa0be9da5ee214a1d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
