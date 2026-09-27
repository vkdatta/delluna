export const name="intersect-square-light";
export const id="dl_ebd8d23bba8d49b79127";
export const url=new URL("../icons/intersect-square-light.svg?v=c83080f2cdd8690fcc83b3f7789c6dd8dc84d90c445d0f103724415452b6eda4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
