export const name="eraser_size_1";
export const id="dl_cd08889eb7c27977fe93";
export const url=new URL("../icons/eraser_size_1.svg?v=80ab28f258d2e7967802231ebc18d3da4ddd4beba8813b563996ad25469cea57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
