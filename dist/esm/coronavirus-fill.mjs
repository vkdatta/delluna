export const name="coronavirus-fill";
export const id="dl_8b95c1abbfded8bc79c3";
export const url=new URL("../icons/coronavirus-fill.svg?v=f9c24e96f7025c39a2fdf9a89f215dd5269b148a1c5aefb55649a749977d9d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
