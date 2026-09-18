export const name="av1-fill";
export const id="dl_1c9bf47d352446fc919e";
export const url=new URL("../icons/av1-fill.svg?v=bc326f715ae5606ae841d5f6d4d2df2e7f9c2d70295f6de3321da8b7b8d0cb18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
