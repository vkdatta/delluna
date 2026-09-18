export const name="height-fill";
export const id="dl_edde91e2fb804f7788d4";
export const url=new URL("../icons/H/height-fill.svg?v=c5f715f948f2d599ed78e7b9c14be038edacd534a03539f55ace662255cb3d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
