export const name="format_color_reset";
export const id="dl_6d0e42e48b3041268048";
export const url=new URL("../icons/format_color_reset.svg?v=9f8733b5650d50462169c0e6ec95f5691333a1763d1fbcc6c08b2424e4881538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
