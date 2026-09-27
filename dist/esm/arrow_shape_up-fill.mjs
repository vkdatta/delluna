export const name="arrow_shape_up-fill";
export const id="dl_8d8cc634419d1e27deab";
export const url=new URL("../icons/arrow_shape_up-fill.svg?v=b2568b1883c6764120aa2bb5628d4f736306f0985f282da6668caa264d0f686d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
