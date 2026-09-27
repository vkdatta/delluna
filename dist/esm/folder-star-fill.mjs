export const name="folder-star-fill";
export const id="dl_fdca95f10a054bc28adc";
export const url=new URL("../icons/folder-star-fill.svg?v=11162302bf806d417b71c57a0a997556d9a8d7487ff3b39cafcfa300d8dbf784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
