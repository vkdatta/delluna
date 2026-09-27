export const name="villa-fill";
export const id="dl_774b80b3f426b42a820c";
export const url=new URL("../icons/villa-fill.svg?v=6e00baa24c19f4dd3ca056ebed10868f81650ac53646e59961bb6314b71d6cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
