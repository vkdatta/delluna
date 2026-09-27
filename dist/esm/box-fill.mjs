export const name="box-fill";
export const id="dl_fa9877a926fdf8cf6e4d";
export const url=new URL("../icons/box-fill.svg?v=665f8d433adef3a378e95226e222575e722be4db964da4f8f5aa70037a1bdbfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
