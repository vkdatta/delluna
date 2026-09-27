export const name="anchor-fill";
export const id="dl_647395575a41446d8154";
export const url=new URL("../icons/anchor-fill.svg?v=fe250ff2a265596bac1372d6a13b6816d28cd65bff3c10b721658bfd0de7202f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
