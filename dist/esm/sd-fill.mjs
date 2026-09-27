export const name="sd-fill";
export const id="dl_923bcf96ea6b3617bcf8";
export const url=new URL("../icons/sd-fill.svg?v=0319c1ba51872a9c8681e8c11962f890b2dfefb5c47a250bfd047efc71dc31d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
